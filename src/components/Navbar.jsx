import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faBook, faTree, faHome, faUsers, faHiking   } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [items, setItems] = useState([
    { icon: <FontAwesomeIcon icon={faCamera} />, text: 'FOTOS E VIDEOS', href: '#fotos-videos', active: true },
    { icon: <FontAwesomeIcon icon={faBook} />, text: 'HISTORIAS', href: '#historias', active: false },
    { icon: <FontAwesomeIcon icon={faTree} />, text: 'RAIZ', href: '#raiz', active: false },
    { icon: <FontAwesomeIcon icon={faHome} />, text: 'HOME', href: '#home', active: false },
    { icon: <FontAwesomeIcon icon={faUsers} />, text: 'PERSONAS', href: '#personas', active: false },
    { icon: <FontAwesomeIcon icon={faHiking  } />, text: 'HISTORIAS PARALELAS', href: '#historias-paralelas', active: false },
  ]);

  const [showNavbar, setShowNavbar] = useState(true);

  const changeActiveNavItem = (index) => {
    const newItems = items.map((item, i) => ({
      ...item,
      active: i === index,
    }));
    setItems(newItems);
  };

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setShowNavbar(false);
      } else {
        setShowNavbar(scrollTop === 0);
      }
      
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`nav-container ${showNavbar ? '' : 'hidden'}`}>
      <div className="nav-items">
        {items.slice(0, 5).map((item, i) => (
          <a
            key={i}
            href={item.href}
            className={`nav-item item-${i} ${item.active ? 'active' : ''}`}
            onClick={() => changeActiveNavItem(i)}
          >
            {item.icon}
            <span className="nav-item-text">{item.text}</span>
          </a>
        ))}
        <a
          href={items[5].href}
          className={`nav-item item-5 ${items[5].active ? 'active' : ''}`}
          onClick={() => changeActiveNavItem(5)}
          style={{ marginRight: '30px' }}
        >
          {items[5].icon}
          <span className="nav-item-text">{items[5].text}</span>
        </a>
      </div>
      
      <div className="user-area">
        <img
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className="user-avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
