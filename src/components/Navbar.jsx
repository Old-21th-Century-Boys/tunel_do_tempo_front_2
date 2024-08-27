import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
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
        <div className="nav-item">Home</div>
        <div className="nav-item">Raiz</div>
        <div className="nav-item">Pessoas</div>
        <div className="nav-item">Histórias</div>
        <div className="nav-item">Fotos/Vídeos</div>
        <div className="nav-item">Histórias Paralelas</div>
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
              <li onClick={openPhotoModal}>Adicionar Foto</li> {/* Abre o modal ao clicar */}
              <li onClick={openVideoModal}>Adicionar Vídeo</li>
              <li>Adicionar História</li>
              <li>Adicionar História Paralela</li>
              <li>Adicionar Pessoa</li>
              <li>Configurações</li>
              <li>Sair</li>
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
