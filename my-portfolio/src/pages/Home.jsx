// src/pages/Home.jsx
import React from 'react';

function Home() {
  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen flex items-center justify-center px-6 font-[Poppins]">
      {/* Background glow */}
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.3),transparent_60%)] blur-[100px] z-0" />

      <main className="z-10 text-center max-w-3xl w-full space-y-10">
        <h1 className="text-4xl sm:text-5xl font-semibold text-white-300">Hi, I'm Liana</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm a cybersecurity practitioner with a foundation in psychology.
          I design secure systems that reflect how people think, feel, and interact with technology.
        </p>

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl shadow p-6 md:p-10 space-y-4 text-left text-gray-300">
          <h2 className="text-2xl font-semibold text-purple-200">What you'll find here:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Projects that bridge human insight and technical precision</li>
            <li>My journey into cybersecurity and where it's taken me</li>
            <li>Reflections, lessons, and things I'm still exploring</li>
          </ul>
        </div>

        <div className="pt-6">
          <a href="/">
            <button className="px-6 py-3 rounded-md font-medium bg-transparent border border-white text-white hover:text-purple-300 hover:border-purple-300 transition duration-300">
              ← Back to Entry
            </button>
          </a>
        </div>
      </main>
    </div>
  );
}

export default Home;
