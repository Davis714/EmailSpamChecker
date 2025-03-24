import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-gray-700 dark:text-gray-300 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Welcome to the <strong>Email Spam Checker</strong>, a powerful tool designed to help users
          detect and filter out spam emails efficiently. Our mission is to enhance email security
          by utilizing advanced machine learning models to analyze and classify emails with high accuracy.
        </motion.p>
        <motion.h2
          className="text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          With the increasing number of spam and phishing attacks, our goal is to provide a
          reliable and user-friendly solution for identifying malicious content in emails.
          We aim to reduce email fraud and protect users from potential security threats.
        </motion.p>
        <motion.h2
          className="text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          How It Works
        </motion.h2>
        <motion.ul
          className="list-disc list-inside text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <li>Users input an email message.</li>
          <li>Our AI model analyzes the content and structure.</li>
          <li>The system predicts whether the email is spam or legitimate.</li>
          <li>Users receive real-time feedback with actionable insights.</li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;