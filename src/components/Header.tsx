import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';

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
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: theme === 'light' 
                ? 'linear-gradient(135deg, #3b82f6 0%, #f59e0b 100%)' 
                : 'linear-gradient(135deg, #f59e0b 0%, #3b82f6 100%)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
            }}
          >
            <span className="text-white fw-bold fs-5">KCA</span>
          </div>
          <div>
            <h1 
              className="mb-0 fs-4 fw-bold"
              style={{
                color: theme === 'light' ? '#1e293b' : '#ffffff'
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
                    target.style.background = 'linear-gradient(135deg, #3b82f6, #60a5fa)';
                    target.style.color = 'white';
                  } else {
                    target.style.background = 'linear-gradient(135deg, #f59e0b, #fbbf24)';
                    target.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.background = 'transparent';
                  target.style.color = theme === 'light' ? '#374151' : '#d1d5db';
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          
          <div className="d-flex align-items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="btn rounded-circle p-3"
              style={{
                background: theme === 'light'
                  ? 'linear-gradient(135deg, #dbeafe, #bfdbfe)'
                  : 'linear-gradient(135deg, #451a03, #78350f)',
                color: theme === 'light' ? '#1d4ed8' : '#f59e0b',
                border: 'none',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
              }}
            >
              {theme === 'light' ? (
                <MoonIcon style={{ width: '20px', height: '20px' }} />
              ) : (
                <SunIcon style={{ width: '20px', height: '20px' }} />
              )}
            </motion.button>

            {/* Register Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="kca-btn kca-btn-primary kca-btn-sm"
            >
              Register Now
            </motion.button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="d-flex d-lg-none align-items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="btn rounded-circle p-3"
            style={{
              background: theme === 'light'
                ? 'linear-gradient(135deg, #dbeafe, #bfdbfe)'
                : 'linear-gradient(135deg, #451a03, #78350f)',
              color: theme === 'light' ? '#1d4ed8' : '#f59e0b',
              border: 'none',
            }}
          >
            {theme === 'light' ? (
              <MoonIcon style={{ width: '20px', height: '20px' }} />
            ) : (
              <SunIcon style={{ width: '20px', height: '20px' }} />
            )}
          </motion.button>
          
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
          }}
        >
          <div className="d-flex flex-column gap-2">
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
                    target.style.background = 'linear-gradient(135deg, #3b82f6, #60a5fa)';
                    target.style.color = 'white';
                  } else {
                    target.style.background = 'linear-gradient(135deg, #f59e0b, #fbbf24)';
                    target.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.background = 'transparent';
                  target.style.color = theme === 'light' ? '#374151' : '#d1d5db';
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
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Header;
