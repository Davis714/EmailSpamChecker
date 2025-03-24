import './App.css';
import React from 'react';
import SpamWordCard from './components/spamwordcard';
import Navbar from './components/navbar';
import { Route,Routes } from 'react-router-dom';
import AboutUs from './components/aboutus';

function App() {
  return (
<React.Fragment>
  <Navbar/>
  <Routes>
    <Route path="/" element={<SpamWordCard/>}/>
    <Route path="/aboutus" element={<AboutUs/>}/>
  </Routes> 
</React.Fragment>
  );
}

export default App;
