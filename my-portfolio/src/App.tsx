import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Entry from './pages/Entry';
import Home from './pages/Home';
import Maintenance from './pages/Maintenance';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root to /entry */}
        <Route path="/" element={<Navigate to="/entry" replace />} />

        {/* Routes */}
        <Route path="/entry" element={<Entry />} />
        <Route path="/home" element={<Home />} />
        <Route path="/maintenance" element={<Maintenance />} />
      </Routes>
    </Router>
  );
};

export default App;
