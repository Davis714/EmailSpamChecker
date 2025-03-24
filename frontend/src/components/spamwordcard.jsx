import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const SpamWordCard = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkSpam = async () => {
    setLoading(true);
    setResult(null);
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", { text });
      setResult(response.data.prediction);
    } catch (error) {
      setResult("Error checking spam");
    }
    setLoading(false);
  };

  return (
      <React.Fragment>
      {/* 🌟 Title & Description */}
      <motion.div 
        className="text-center mb-8 max-w-2xl text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-extrabold drop-shadow-lg">Spam Detector 🔍</h1>
        <p className="mt-4 text-lg text-gray-300">
          Protect your inbox with AI-powered spam detection. Enter an email's body, and let our system determine whether it's spam.
        </p>
      </motion.div>

      {/* 🌟 Card UI */}
      <motion.div 
        className="w-full max-w-xl bg-gray-800 shadow-2xl rounded-2xl p-8 backdrop-blur-lg bg-opacity-80 text-white "
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p 
          className="text-gray-400 text-center text-sm mb-4"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5 }}
        >
          Enter the email details below to identify whether it is spam or not.
        </motion.p>

        {/* Input Fields */}
        <motion.textarea
          className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
          rows="4"
          placeholder="Enter email content"
          onChange={(e) => setText(e.target.value)}
          whileFocus={{ scale: 1.05 }}
        ></motion.textarea>

        {/* 🌟 Button with Animated Loading */}
        <motion.button 
          type="button" 
          onClick={checkSpam}
          disabled={loading}
          className="w-full flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-3 text-center transition-all shadow-lg"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
        >
          {loading ? (
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                transition={{ repeat: Infinity, duration: 1 }}
              />
              <span>Checking...</span>
            </motion.div>
          ) : (
            "Check Spam"
          )}
        </motion.button> 
        
        {/* 🌟 Animated Result Display */}
        {result && (
          <motion.div 
            className={`mt-4 p-4 rounded-lg text-center font-semibold shadow-md ${
              result === "spam" ? "bg-red-900 text-red-300" : "bg-green-900 text-green-300"
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {result === "spam" ? "🚨 Spam Detected" : "✅ Not Spam"}
          </motion.div>
        )}
      </motion.div>
      </React.Fragment>

  );
};

export default SpamWordCard;


