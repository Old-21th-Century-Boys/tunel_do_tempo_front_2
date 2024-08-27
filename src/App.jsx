import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import VideoIntro from './components/VideoIntro';
import LoginPage from './pages/LoginPage'; 
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import FotosEVideos from './pages/FotosEVideosPage';
import HistoriasPage from './pages/HistoriasPage';
import HistoriasParalelasPage from './pages/HistoriasParalelasPage';
import PessoasPage from './pages/PessoasPage';
import RaizPage from './pages/RaizPage';
import UploadHistoriasPage from './pages/UploadHistoriasPage';
import UploadHistoriasParalelasPage from './pages/UploadHistoriasParalelasPage';
import UploadPessoasPage from './pages/UploadPessoasPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VideoIntro />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/fotos-e-videos" element={<FotosEVideos />} />
        <Route path="/historias" element={<HistoriasPage />} />
        <Route path="/historias-paralelas" element={<HistoriasParalelasPage />} />
        <Route path="/pessoas" element={<PessoasPage />} />
        <Route path="/raiz" element={<RaizPage />} />
        <Route path="/upload-historias" element={<UploadHistoriasPage />} />
        <Route path="/upload-historias-paralelas" element={<UploadHistoriasParalelasPage />} />
        <Route path="/upload-pessoas" element={<UploadPessoasPage />} />
      </Routes>
    </Router>
  );
}

export default App;
