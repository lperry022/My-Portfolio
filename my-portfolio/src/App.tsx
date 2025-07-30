import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Entry from './pages/Entry';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
