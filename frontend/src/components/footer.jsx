import React, { PureComponent } from 'react';
import { motion } from "framer-motion";
const Footer = () => {
    return ( 
        <motion.footer 
        className="mt-10 text-center text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p>&copy; {new Date().getFullYear()} Spam Detector. All rights reserved.</p>
      </motion.footer>
    
     );
}
 
export default Footer;