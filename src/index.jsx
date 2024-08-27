// src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import VideoIntro from './components/VideoIntro';
import SettingPage from './pages/SettingsPage';
import './index.css'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<VideoIntro />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/settings" element={<SettingPage/>} />
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
