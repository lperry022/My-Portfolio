// src/pages/Entry.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // <-- Add this

function Entry() {
  return (
    <div className="bg-black text-white h-screen flex items-center justify-center relative font-[Poppins]">
      {/* Glow effect */}
      <div
        id="parallax-glow"
        className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,_#8b5cf6_0%,_transparent_60%)] blur-3xl opacity-30 z-0 transition-transform duration-300 ease-out"
      />

      <div className="text-center px-6 md:flex md:items-center md:justify-center md:gap-12 z-10">
        <img src="/assets/alert.png" alt="Alert" className="w-[300px]" />

        <div className="md:max-w-md text-left mt-10 md:mt-0">
          <p className="uppercase text-sm tracking-widest text-gray-400">
            This portfolio isn’t just a website — it’s a simulation of my professional growth.
          </p>
          <p className="uppercase text-sm tracking-widest text-gray-400 mt-4">
            Inspired by my background in psychology and cybersecurity,
            the interface reflects how I think, learn, and evolve.
          </p>

          <Link to="/home">
            <button
              id="parallax-button"
              className="mt-6 border font-semibold px-6 py-2 tracking-widest uppercase text-white border-white transition-all duration-300 hover:text-purple-500 hover:border-purple-500"
            >
              Enter the System
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Entry;
