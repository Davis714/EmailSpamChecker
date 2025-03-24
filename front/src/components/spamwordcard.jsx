import React from "react";
import {useState} from "react";
import axios from "axios";
const SpamWordCard = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkSpam = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", { text });
      setResult(response.data.prediction);
      console.log(response.data.prediction);
    } catch (error) {
      setResult("Error checking spam");
    }
    setLoading(false);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <div className="text-gray-700 text-sm mb-4">
          <p className="font-semibold">Insert your subject line and email body in the fields below to identify and remove possible email spam.</p>
        </div>
        
        <input
          type="text"
          placeholder="Insert your subject line"
          className="w-full border rounded p-2 mb-4"
        />
        
        <textarea
          className="w-full border rounded p-2 mb-4"
          rows="4"
          placeholder="Enter your email content"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button type="button" 
                onClick={checkSpam}
                disabled={loading}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{loading ? "Checking..." : "Check Spam"}
        </button> 
        {result && (
          <div className={`mt-4 p-3 rounded ${result === "spam" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}>
            <p className="font-semibold">{result === "spam" ? "Spam Detected" : "Not Spam"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpamWordCard;
