import os
import numpy as np
import joblib
import re
import nltk
from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model 
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from sklearn.feature_extraction.text import TfidfVectorizer

nltk.download('stopwords')

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Load models and vectorizer
MODELS_DIR = os.path.join(os.path.dirname(__file__), 'models')
log_reg = joblib.load(os.path.join(MODELS_DIR, 'log_reg.pkl'))
svm = joblib.load(os.path.join(MODELS_DIR, 'svm.pkl'))
mlp = joblib.load(os.path.join(MODELS_DIR, 'mlp.pkl'))
meta_model = load_model(os.path.join(MODELS_DIR, 'stacked_model.keras'))
vectorizer = joblib.load(os.path.join(MODELS_DIR, 'vectorizer.pkl'))

# Preprocessing function
def preprocess_text(text):
    text = text.lower()
    text = re.sub(r'\W', ' ', text)  
    text = re.sub(r'\s+', ' ', text).strip()  
    words = text.split()
    words = [word for word in words if word not in stopwords.words('english')]
    stemmer = PorterStemmer()
    words = [stemmer.stem(word) for word in words]  
    return ' '.join(words)

# Prediction API
@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    text = data.get('text','')

    if not text:
        return jsonify({"error": "No text provided"}), 400

    # Preprocess and vectorize input
    processed_text = preprocess_text(text)
    vectorized_text = vectorizer.transform([processed_text])

    # Get base model predictions
    log_reg_proba = log_reg.predict_proba(vectorized_text)[:, 1]
    svm_proba = svm.predict_proba(vectorized_text)[:, 1]
    mlp_proba = mlp.predict_proba(vectorized_text)[:, 1]

    # Stack predictions
    stacked_input = np.column_stack([log_reg_proba, svm_proba, mlp_proba])
    final_prediction = (meta_model.predict(stacked_input) > 0.5).astype(int)[0][0]
    return jsonify({"prediction": "spam" if final_prediction == 1 else "ham"})

if __name__ == '__main__':
    app.run(debug=True)
