import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PhotoUploadModal from './PhotoUploadModal';
import VideoUploadModal from './VideoUploadModal';
import './styles/Navbar.css';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const openPhotoModal = () => {
    setPhotoModalOpen(true);
    setShowDropdown(false);
  };

  const closePhotoModal = () => {
    setPhotoModalOpen(false);
  };

  const openVideoModal = () => {
    setVideoModalOpen(true);
    setShowDropdown(false);
  }

  const closeVideoModal = () => {
    setVideoModalOpen(false);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div className="nav-container">
      <div className="nav-logo">Grupo Da Rua R</div>

      <div className={`nav-items ${menuOpen ? 'open' : ''}`}>
        <Link to="/home" className="nav-item">Home</Link>
        <Link to="/raiz" className="nav-item">Raiz</Link>
        <Link to="/pessoas" className="nav-item">Pessoas</Link>
        <Link to="/historias" className="nav-item">Histórias</Link>
        <Link to="/fotos-e-videos" className="nav-item">Fotos/Vídeos</Link>
        <Link to="/historias-paralelas" className="nav-item">Histórias Paralelas</Link>
      </div>


      <div className="user-area">
        <div className="hamburger-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div>
          <FontAwesomeIcon
            icon={showDropdown ? faAngleUp : faCaretDown}
            className={`dropdown-icon ${showDropdown ? 'rotate' : ''}`}
            onClick={toggleDropdown}
          />
        </div>
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="user-avatar"
        />
      </div>

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            className="dropdown-menu"
            ref={dropdownRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <ul>
              <li onClick={openPhotoModal}>Adicionar Foto</li>
              <li onClick={openVideoModal}>Adicionar Vídeo</li>
              <Link to="/upload-historias"><li>Adicionar História</li></Link>
              <Link to="/upload-historias-paralelas"><li>Adicionar História Paralela</li></Link>
              <Link to="/upload-pessoas"><li>Adicionar Pessoa</li></Link>
              <Link to="/settings"><li>Configurações</li></Link>
              <Link to="/login"><li>Sair</li></Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>


      <PhotoUploadModal
        open={photoModalOpen}
        onClose={closePhotoModal}
      />
      <VideoUploadModal
        open={videoModalOpen}
        onClose={closeVideoModal}
      />
    </div>
  );
};

export default Navbar;
