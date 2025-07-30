import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Entry from './pages/Entry';
import Home from './pages/Home';
import Maintenance from './pages/Maintenance';

function App() {
  return (
    <Router>
      <Routes>
        {/* 👇 Default route */}
        <Route path="/" element={<Entry />} />

        {/* 👇 Other pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/maintenance" element={<Maintenance />} />
      </Routes>
    </Router>
  );
}

export default App;
