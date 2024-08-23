import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faBook, faTree, faHome, faUsers, faHiking, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import PhotoUploadModal from './PhotoUploadModal';
import VideoUploadModal from './VideoUploadModal';
import toast from 'react-hot-toast'; // Importar o toast
import './Navbar.css';

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
        {items.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className={`nav-item item-${i} ${item.active ? 'active' : ''}`}
          >
            {item.icon}
            <span className="nav-item-text">{item.text}</span>
          </a>
        ))}
      </div>

      <div className="user-area" onClick={toggleDropdown}>
        <img
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className={`user-avatar ${isSelected ? 'selected' : ''}`}
        />
        {showDropdown && (
          <div className="dropdown-menu" ref={dropdownRef}>
            <ul>
              <li onClick={handleOpenPhotoModal}>Adicionar Foto</li>
              <li onClick={handleOpenVideoModal}>Adicionar Video</li>
              <li>Adicionar História</li>
              <li>Adicionar História Paralela</li>
              <li>Adicionar Persona</li>
              <li>Configurações</li>
              <li>Sair</li>
            </ul>
          </div>
        )}
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
