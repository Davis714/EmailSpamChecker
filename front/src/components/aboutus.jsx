import React from 'react';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
            <div className="max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Us</h1>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Welcome to the <strong>Email Spam Checker</strong>, a powerful tool designed to help users
                    detect and filter out spam emails efficiently. Our mission is to enhance email security
                    by utilizing advanced machine learning models to analyze and classify emails with high accuracy.
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-2">Our Mission</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    With the increasing number of spam and phishing attacks, our goal is to provide a
                    reliable and user-friendly solution for identifying malicious content in emails.
                    We aim to reduce email fraud and protect users from potential security threats.
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-2">How It Works</h2>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>Users input an email message.</li>
                    <li>Our AI model analyzes the content and structure.</li>
                    <li>The system predicts whether the email is spam or legitimate.</li>
                    <li>Users receive real-time feedback with actionable insights.</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutUs;