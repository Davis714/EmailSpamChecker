import React, { useState } from 'react';
import logo from '../icons/spam.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [activePage, setActivePage] = useState('home');

    return ( 
        <nav className="bg-blue-900 border-gray-200 shadow-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Spam Checker Logo" />
                    <span className="self-center text-2xl font-semibold text-white">
                        Email Spam Checker
                    </span>
                </div>
                <button 
                    data-collapse-toggle="navbar-default" 
                    type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600" 
                    aria-controls="navbar-default" 
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-blue-800 rounded-lg bg-blue-700 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-blue-900">
                        <li>
                            <NavLink 
                                onClick={() => setActivePage('home')} 
                                to="/" 
                                className={activePage === "home" 
                                    ? "block py-2 px-3 text-white bg-blue-600 rounded-sm md:bg-transparent md:text-blue-300 md:p-0" 
                                    : "block py-2 px-3 text-white hover:bg-blue-800 md:hover:bg-transparent md:hover:text-blue-300 md:p-0"}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                onClick={() => setActivePage('aboutus')} 
                                to="/aboutus"  
                                className={activePage === "aboutus" 
                                    ? "block py-2 px-3 text-white bg-blue-600 rounded-sm md:bg-transparent md:text-blue-300 md:p-0" 
                                    : "block py-2 px-3 text-white hover:bg-blue-800 md:hover:bg-transparent md:hover:text-blue-300 md:p-0"}
                            >
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
