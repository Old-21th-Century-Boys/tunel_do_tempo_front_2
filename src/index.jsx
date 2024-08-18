// src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import VideoIntro from './components/VideoIntro';
import './index.css'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<VideoIntro />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
