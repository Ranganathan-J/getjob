import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navBar flex justify-between items-center p-6 bg-white shadow-md'>
      <div className="logoDiv">
        <h1 className="logo text-blue-500 text-2xl bg-slate-300 p-2 rounded-lg"><strong>Get</strong>Job()</h1>
      </div>
      <nav className={`menu flex-col md:flex-row md:flex gap-7 font-bold absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in ${isOpen ? 'flex' : 'hidden'}`}>
        <li className="menuList text-gray-600 hover:text-blue-500 p-4 md:p-0">Home</li>
        <li className="menuList text-gray-600 hover:text-blue-500 p-4 md:p-0">Jobs</li>
        <li className="menuList text-gray-600 hover:text-blue-500 p-4 md:p-0">Company</li>
        <li className="menuList text-gray-600 hover:text-blue-500 p-4 md:p-0">Contact</li>
        <li className="menuList text-gray-600 hover:text-blue-500 p-4 md:p-0">Blog</li>
        <li className="menuList text-gray-600 hover:text-blue-500 p-4 md:p-0">Login</li>
        <li className="menuList text-gray-600 hover:text-blue-500 p-4 md:p-0">Register</li>
      </nav>
      <div className='md:hidden' onClick={toggleMenu}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </div>
  );
}

export default NavBar;
