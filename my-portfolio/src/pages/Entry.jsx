import React from 'react';
import GlowButton from '../components/GlowButton.tsx';

const Entry = () => {
  return (
    <div className="h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <h1 className="text-[5rem] md:text-[8rem] font-extrabold leading-none text-red-500">ALERT</h1>
        <p className="text-xs uppercase tracking-widest text-gray-300">
          This portfolio isn't just a website – it's a simulation of my professional growth.
        </p>
        <p className="text-xs uppercase tracking-widest text-gray-300">
          Inspired by my background in psychology and cybersecurity, the interface reflects how I think, learn, and evolve.
        </p>

        <GlowButton />
      </div>
    </div>
  );
};

export default Entry;
