import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoIntro from './components/VideoIntro';
import LoginPage from './pages/LoginPage'; // Substitua com a página real

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VideoIntro />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
