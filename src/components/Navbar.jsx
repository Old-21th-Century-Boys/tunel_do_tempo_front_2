import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faBook, faTree, faHome, faUsers, faHiking, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import PhotoUploadModal from './PhotoUploadModal';
import VideoUploadModal from './VideoUploadModal';
import toast from 'react-hot-toast';
import './Navbar.css';
import { duration } from '@mui/material';

const dropdownVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: {
      type: 'spring',
      duration: 0.5,
      stiffness: 300,
      damping: 20,
    },
  },
};

const Navbar = () => {
  const [items] = useState([
    { icon: <FontAwesomeIcon icon={faCamera} />, text: 'FOTOS E VIDEOS', href: '#fotos-videos', active: true },
    { icon: <FontAwesomeIcon icon={faBook} />, text: 'HISTORIAS', href: '#historias', active: false },
    { icon: <FontAwesomeIcon icon={faTree} />, text: 'RAIZ', href: '#raiz', active: false },
    { icon: <FontAwesomeIcon icon={faHome} />, text: 'HOME', href: '#home', active: false },
    { icon: <FontAwesomeIcon icon={faUsers} />, text: 'PERSONAS', href: '#personas', active: false },
    { icon: <FontAwesomeIcon icon={faHiking} />, text: 'HISTORIAS PARALELAS', href: '#historias-paralelas', active: false },
  ]);

  const [showDropdown, setShowDropdown] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [photoModalOpen, setPhotoModalOpen] = useState(false); 
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setIsSelected(!isSelected);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
      setIsSelected(false);
    }
  };

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  const handleOpenPhotoModal = () => {
    setPhotoModalOpen(true);
    setShowDropdown(false);
  };

  const handleClosePhotoModal = () => {
    setPhotoModalOpen(false);
  };

  const handleOpenVideoModal = () => {
    setVideoModalOpen(true);
    setShowDropdown(false);
  };

  const handleCloseVideoModal = () => {
    setVideoModalOpen(false);
  };

  const handleSavePhoto = (data) => {
    if (data) {
      toast.success('Foto salva com sucesso!');
    } else {
      toast.error('Erro ao salvar foto.');
    }
  };

  const handleSaveVideo = (data) => {
    if (data) {
      toast.success('Vídeo salvo com sucesso!');
    } else {
      toast.error('Erro ao salvar vídeo.');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav-container">
      <div className="hamburger-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>

      <div className={`nav-items ${menuOpen ? 'open' : ''}`}>
        <AnimatePresence>
          {items.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              className={`nav-item item-${i} ${item.active ? 'active' : ''}`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={itemVariants}
            >
              {item.icon}
              <span className="nav-item-text">{item.text}</span>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>

      <div className="user-area" onClick={toggleDropdown}>
        <img
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className={`user-avatar ${isSelected ? 'selected' : ''}`}
        />
        <AnimatePresence>
          {showDropdown && (
            <motion.div
              className="dropdown-menu"
              ref={dropdownRef}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
            >
              <ul>
                <motion.li variants={itemVariants} onClick={handleOpenPhotoModal}>Adicionar Foto</motion.li>
                <motion.li variants={itemVariants} onClick={handleOpenVideoModal}>Adicionar Video</motion.li>
                <motion.li variants={itemVariants}>Adicionar História</motion.li>
                <motion.li variants={itemVariants}>Adicionar História Paralela</motion.li>
                <motion.li variants={itemVariants}>Adicionar Persona</motion.li>
                <motion.li variants={itemVariants}>Configurações</motion.li>
                <motion.li variants={itemVariants}>Sair</motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <PhotoUploadModal
        open={photoModalOpen}
        onClose={handleClosePhotoModal}
        onSave={handleSavePhoto}
      />

      <VideoUploadModal
        open={videoModalOpen}
        onClose={handleCloseVideoModal}
        onSave={handleSaveVideo}
      />
    </div>
  );
};

export default Navbar;
