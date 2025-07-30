import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-black bg-opacity-80 text-white fixed top-0 left-0 z-50 backdrop-blur-md">
      <div className="text-lg font-semibold tracking-wider">Liana Perry</div>
      <ul className="flex gap-6 text-sm">
        <li><Link to="/" className="hover:text-purple-400 transition">Home</Link></li>
        <li><Link to="/projects" className="hover:text-purple-400 transition">Projects</Link></li>
        <li><Link to="/about" className="hover:text-purple-400 transition">About</Link></li>
        <li><Link to="/contact" className="hover:text-purple-400 transition">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
