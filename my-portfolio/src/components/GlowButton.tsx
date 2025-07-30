import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GlowButton = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link to="/home" className="inline-block group">
      <button
        onMouseMove={handleMouseMove}
        className="relative px-6 py-3 border border-red-500 text-red-500 font-monospace text-xs uppercase tracking-widest overflow-hidden rounded-none hover:text-purple-500 hover:border-purple-500 transition duration-300"
      >
        {/* Glow Effect (hidden by default, visible on hover) */}
        <span
          className="absolute w-32 h-32 bg-purple-500 opacity-0 group-hover:opacity-40 rounded-full blur-2xl pointer-events-none transition-all duration-300 ease-out"
          style={{
            top: coords.y - 64,
            left: coords.x - 64,
          }}
        />

        {/* Button Text */}
        <span className="relative z-10">Enter the System</span>
      </button>
    </Link>
  );
};

export default GlowButton;
