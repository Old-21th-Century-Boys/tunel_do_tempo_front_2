import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import VideoIntro from './components/VideoIntro';
import LoginPage from './pages/LoginPage'; 
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VideoIntro />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} /> {/* Verifique se está com o caminho correto */}
      </Routes>
    </Router>
  );
}

export default App;
