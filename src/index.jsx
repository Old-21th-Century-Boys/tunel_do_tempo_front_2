// src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import VideoIntro from './components/VideoIntro';
import SettingPage from './pages/SettingsPage';
import FotosEVideos from './pages/FotosEVideosPage';
import HistoriasPage from './pages/HistoriasPage';
import HistoriasParalelasPage from './pages/HistoriasParalelasPage';
import PessoasPage from './pages/PessoasPage';
import RaizPage from './pages/RaizPage';
import UploadHistoriasPage from './pages/UploadHistoriasPage';
import UploadHistoriasParalelasPage from './pages/UploadHistoriasParalelasPage';
import UploadPessoasPage from './pages/UploadPessoasPage';


import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<VideoIntro />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/settings" element={<SettingPage />} />
      <Route path="/fotos-e-videos" element={<FotosEVideos />} />
      <Route path="/historias" element={<HistoriasPage />} />
      <Route path="/historias-paralelas" element={<HistoriasParalelasPage />} />
      <Route path="/pessoas" element={<PessoasPage />} />
      <Route path="/raiz" element={<RaizPage />} />
      <Route path="/upload-historias" element={<UploadHistoriasPage />} />
      <Route path="/upload-historias-paralelas" element={<UploadHistoriasParalelasPage />} />
      <Route path="/upload-pessoas" element={<UploadPessoasPage />} />
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
