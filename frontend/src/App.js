import './App.css';
import React from 'react';
import SpamWordCard from './components/spamwordcard';
import Navbar from './components/navbar';
import { Route,Routes } from 'react-router-dom';
import AboutUs from './components/aboutus';
import Footer from './components/footer';
import { motion } from "framer-motion";
function App() {
  return (
<React.Fragment>
  <Navbar/>
<motion.div 
      className="flex flex-col justify-center items-center min-h-screen w-full bg-cover bg-center bg-no-repeat px-4 dark:bg-gray-900"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
  <Routes>
    <Route path="/" element={<SpamWordCard/>}/>
    <Route path="/aboutus" element={<AboutUs/>}/>
  </Routes> 
  <Footer/>
  </motion.div>
</React.Fragment>
  );
}

export default App;
