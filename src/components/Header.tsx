import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';
import KCALogo from '../assets/KCAU_logo.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${theme === 'dark' ? 'navbar-dark' : 'navbar-light'}`} 
         style={{
           background: theme === 'light' 
             ? 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' 
             : 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
           boxShadow: theme === 'light'
             ? '0 10px 25px rgba(0, 0, 0, 0.1)'
             : '0 10px 25px rgba(245, 158, 11, 0.2)',
           borderBottom: theme === 'light' 
             ? '3px solid #3b82f6' 
             : '3px solid #f59e0b',
           height: '80px',
         }}>
      <div className="container-fluid">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="navbar-brand d-flex align-items-center"
        >
          <div 
            className="me-3 d-flex align-items-center justify-content-center"
            style={{
              width: '50px',
              height: '40px',
              borderRadius: '8px',
              background: theme === 'light' ? '#ffffff' : '#374151',
              boxShadow: theme === 'light' 
                ? '0 4px 12px rgba(0, 0, 0, 0.1)' 
                : '0 4px 12px rgba(0, 0, 0, 0.3)',
              border: theme === 'light' 
                ? '1px solid rgba(0, 0, 0, 0.05)' 
                : '1px solid rgba(255, 255, 255, 0.1)',
              padding: '8px',
            }}
          >
            <img 
              src={KCALogo} 
              alt="KCA University Logo" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </div>
          <div>
            <h1 
              className="mb-0 fs-4 fw-bold"
              style={{
                color: theme === 'light' ? '#6b7280' : '#d1d5db',
              }}
            >
              KCA University
            </h1>
            <p 
              className="mb-0 small fw-medium"
              style={{
                color: theme === 'light' ? '#6b7280' : '#d1d5db',
              }}
            >
              Innovation Seminar 2025
            </p>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="d-none d-lg-flex align-items-center">
          <div className="d-flex align-items-center me-4">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="nav-link px-3 py-2 mx-1 rounded-pill fw-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  color: theme === 'light' ? '#374151' : '#d1d5db',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  if (theme === 'light') {
                    target.style.background = 'rgba(59, 130, 246, 0.1)';
                    target.style.color = '#3b82f6';
                    target.style.transform = 'translateY(-2px)';
                    target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.15)';
                  } else {
                    target.style.background = 'rgba(245, 158, 11, 0.1)';
                    target.style.color = '#f59e0b';
                    target.style.transform = 'translateY(-2px)';
                    target.style.boxShadow = '0 4px 12px rgba(245, 158, 11, 0.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.background = 'transparent';
                  target.style.color = theme === 'light' ? '#374151' : '#d1d5db';
                  target.style.transform = 'translateY(0)';
                  target.style.boxShadow = 'none';
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          
          <div className="d-flex align-items-center gap-3">
            {/* Theme Toggle Switch - Redesigned */}
            <motion.div
              className="position-relative"
              style={{
                width: '80px',
                height: '32px',
                borderRadius: '16px',
                background: theme === 'light'
                  ? '#e5e7eb'
                  : '#374151',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: 'none',
                boxShadow: theme === 'light' 
                  ? 'inset 0 2px 4px rgba(0, 0, 0, 0.1)' 
                  : 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                padding: '2px'
              }}
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Sliding Button with Icon */}
              <motion.div
                className="position-absolute d-flex align-items-center justify-content-center"
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '14px',
                  top: '2px',
                  background: theme === 'light' 
                    ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' 
                    : 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)',
                  border: 'none'
                }}
                animate={{
                  x: theme === 'light' ? 2 : 47
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                {theme === 'light' ? (
                  <SunIcon 
                    style={{ 
                      width: '16px', 
                      height: '16px',
                      color: '#e2e8f0'
                    }} 
                  />
                ) : (
                  <MoonIcon 
                    style={{ 
                      width: '16px', 
                      height: '16px',
                      color: '#e2e8f0'
                    }} 
                  />
                )}
              </motion.div>
            </motion.div>

            {/* Register Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="kca-btn kca-btn-primary kca-btn-sm"
              style={{
                width: '125px',
                height: '60px',
              }}
            >
              Register Now
            </motion.button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="d-flex d-lg-none align-items-center gap-3">
          {/* Mobile Theme Toggle Switch - Redesigned */}
          <motion.div
            className="position-relative"
            style={{
              width: '56px',
              height: '30px',
              borderRadius: '15px',
              background: theme === 'light'
                ? '#e5e7eb'
                : '#374151',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: 'none',
              boxShadow: theme === 'light' 
                ? 'inset 0 2px 4px rgba(0, 0, 0, 0.1)' 
                : 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
              padding: '2px'
            }}
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Sliding Button with Icon */}
            <motion.div
              className="position-absolute d-flex align-items-center justify-content-center"
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '13px',
                top: '2px',
                background: theme === 'light' 
                  ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' 
                  : 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                border: 'none'
              }}
              animate={{
                x: theme === 'light' ? 2 : 25
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              {theme === 'light' ? (
                <SunIcon 
                  style={{ 
                    width: '14px', 
                    height: '14px',
                    color: '#e2e8f0'
                  }} 
                />
              ) : (
                <MoonIcon 
                  style={{ 
                    width: '14px', 
                    height: '14px',
                    color: '#e2e8f0'
                  }} 
                />
              )}
            </motion.div>
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn rounded-circle p-3"
            style={{
              background: theme === 'light'
                ? 'linear-gradient(135deg, #3b82f6, #f59e0b)'
                : 'linear-gradient(135deg, #f59e0b, #3b82f6)',
              color: 'white',
              border: 'none',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
            }}
          >
            {isMenuOpen ? (
              <XMarkIcon style={{ width: '24px', height: '24px' }} />
            ) : (
              <Bars3Icon style={{ width: '24px', height: '24px' }} />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0, 
            opacity: isMenuOpen ? 1 : 0 
          }}
          className={`collapse navbar-collapse d-lg-none ${isMenuOpen ? 'show' : ''}`}
          style={{
            background: theme === 'light' 
              ? 'linear-gradient(135deg, #f9fafb, #f3f4f6)' 
              : 'linear-gradient(135deg, #1f2937, #374151)',
            borderRadius: '16px',
            margin: '16px',
            padding: '16px',
            border: theme === 'light' 
              ? '1px solid rgba(59, 130, 246, 0.1)' 
              : '1px solid rgba(245, 158, 11, 0.2)',
            maxHeight: 'calc(100vh - 120px)',
            overflowY: 'auto',
            overflowX: 'hidden',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'thin',
            scrollbarColor: theme === 'light' 
              ? 'rgba(59, 130, 246, 0.3) rgba(0, 0, 0, 0.1)' 
              : 'rgba(245, 158, 11, 0.3) rgba(255, 255, 255, 0.1)',
          }}
        >
          <div className="d-flex flex-column gap-2"
               style={{
                 paddingBottom: '8px',
                 position: 'relative'
               }}
          >
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ scale: 1.02, x: 10 }}
                className="nav-link px-4 py-3 rounded fw-medium"
                style={{
                  color: theme === 'light' ? '#374151' : '#d1d5db',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  if (theme === 'light') {
                    target.style.background = 'rgba(59, 130, 246, 0.1)';
                    target.style.color = '#3b82f6';
                    target.style.transform = 'translateY(-2px)';
                    target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.15)';
                  } else {
                    target.style.background = 'rgba(245, 158, 11, 0.1)';
                    target.style.color = '#f59e0b';
                    target.style.transform = 'translateY(-2px)';
                    target.style.boxShadow = '0 4px 12px rgba(245, 158, 11, 0.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.background = 'transparent';
                  target.style.color = theme === 'light' ? '#374151' : '#d1d5db';
                  target.style.transform = 'translateY(0)';
                  target.style.boxShadow = 'none';
                }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="kca-btn kca-btn-primary mt-3"
            >
              Register Now
            </motion.button>
            
            {/* Scroll indicator for mobile menu */}
            <div 
              className="position-absolute"
              style={{
                bottom: '0',
                left: '0',
                right: '0',
                height: '20px',
                background: `linear-gradient(to top, ${
                  theme === 'light' 
                    ? 'rgba(249, 250, 251, 0.9)' 
                    : 'rgba(31, 41, 55, 0.9)'
                } 0%, transparent 100%)`,
                pointerEvents: 'none',
                opacity: 0.6
              }}
            />
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Header;
