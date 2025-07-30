import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="home" className="position-relative min-vh-100 d-flex align-items-center justify-content-center overflow-hidden" style={{ paddingTop: '80px' }}>
      {/* Background Gradient */}
      <div 
        className="position-absolute w-100 h-100"
        style={{
          background: theme === 'light' 
            ? 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #fffbeb 100%)' 
            : 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)',
          top: 0,
          left: 0,
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="position-absolute w-100 h-100">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="position-absolute rounded-circle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              background: theme === 'light'
                ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(245, 158, 11, 0.1))'
                : 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(59, 130, 246, 0.1))',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="position-relative container-fluid text-center" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="row justify-content-center"
        >
          <div className="col-12 col-lg-10">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="d-inline-flex align-items-center px-4 py-2 rounded-pill mb-4"
              style={{
                background: theme === 'light'
                  ? 'rgba(59, 130, 246, 0.1)'
                  : 'rgba(245, 158, 11, 0.2)',
                color: theme === 'light' ? '#1d4ed8' : '#f59e0b',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              <span className="position-relative d-flex me-2" style={{ width: '8px', height: '8px' }}>
                <span 
                  className="position-absolute rounded-circle animate-pulse"
                  style={{
                    width: '100%',
                    height: '100%',
                    background: theme === 'light' ? '#3b82f6' : '#f59e0b',
                    opacity: 0.75
                  }}
                />
                <span 
                  className="position-relative rounded-circle"
                  style={{
                    width: '8px',
                    height: '8px',
                    background: theme === 'light' ? '#3b82f6' : '#f59e0b'
                  }}
                />
              </span>
              4th Innovation Week & Industry Summit 2025
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="display-3 fw-bold mb-4"
            >
              <span className="text-gradient">Innovate.</span>
              <br />
              <span className="text-gradient">Elevate.</span>
              <br />
              <span style={{ color: theme === 'light' ? '#111827' : '#e2e8f0' }}>Impact.</span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="fs-5 mb-5 mx-auto"
              style={{
                maxWidth: '700px',
                color: theme === 'light' ? '#6b7280' : '#d1d5db',
                lineHeight: '1.7'
              }}
            >
              Join KCA University's flagship innovation event celebrating creativity, research excellence, and 
              collaboration between academia, industry, government, and community. Transform promising ideas 
              into viable commercial and social ventures that contribute to sustainable development.
            </motion.p>

            {/* Event Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="row g-3 justify-content-center mb-5"
            >
              <div className="col-12 col-sm-4">
                <div 
                  className="d-flex align-items-center justify-content-center p-3 rounded"
                  style={{
                    background: theme === 'light' 
                      ? 'rgba(255, 255, 255, 0.7)' 
                      : 'rgba(31, 41, 55, 0.7)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme === 'light' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(245, 158, 11, 0.2)'}`
                  }}
                >
                  <CalendarIcon style={{ width: '24px', height: '24px', color: theme === 'light' ? '#3b82f6' : '#f59e0b' }} className="me-3" />
                  <div className="text-start">
                    <p className="mb-0 small" style={{ color: theme === 'light' ? '#6b7280' : '#9ca3af' }}>Date</p>
                    <p className="mb-0 fw-semibold" style={{ color: theme === 'light' ? '#111827' : '#e2e8f0' }}>Oct 28-30, 2025</p>
                  </div>
                </div>
              </div>
              
              <div className="col-12 col-sm-4">
                <div 
                  className="d-flex align-items-center justify-content-center p-3 rounded"
                  style={{
                    background: theme === 'light' 
                      ? 'rgba(255, 255, 255, 0.7)' 
                      : 'rgba(31, 41, 55, 0.7)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme === 'light' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(245, 158, 11, 0.2)'}`
                  }}
                >
                  <MapPinIcon style={{ width: '24px', height: '24px', color: theme === 'light' ? '#3b82f6' : '#f59e0b' }} className="me-3" />
                  <div className="text-start">
                    <p className="mb-0 small" style={{ color: theme === 'light' ? '#6b7280' : '#9ca3af' }}>Venue</p>
                    <p className="mb-0 fw-semibold" style={{ color: theme === 'light' ? '#111827' : '#e2e8f0' }}>KCA Main Campus, Ruaraka</p>
                  </div>
                </div>
              </div>
              
              <div className="col-12 col-sm-4">
                <div 
                  className="d-flex align-items-center justify-content-center p-3 rounded"
                  style={{
                    background: theme === 'light' 
                      ? 'rgba(255, 255, 255, 0.7)' 
                      : 'rgba(31, 41, 55, 0.7)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme === 'light' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(245, 158, 11, 0.2)'}`
                  }}
                >
                  <UsersIcon style={{ width: '24px', height: '24px', color: theme === 'light' ? '#3b82f6' : '#f59e0b' }} className="me-3" />
                  <div className="text-start">
                    <p className="mb-0 small" style={{ color: theme === 'light' ? '#6b7280' : '#9ca3af' }}>Capacity</p>
                    <p className="mb-0 fw-semibold" style={{ color: theme === 'light' ? '#111827' : '#e2e8f0' }}>500+ Attendees</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center mb-5"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="kca-btn kca-btn-primary kca-btn-lg"
              >
                Register Now
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  background: theme === 'light' ? '#3b82f6' : '#f9880eff',
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="kca-btn kca-btn-outline kca-btn-lg"
                style={{
                  background: theme === 'light' ? '#f4f7f9ff' : 'rgba(59, 130, 246, 0.1)',
                  color: theme === 'light' ? '#3b82f6' : '#f9870e'
                }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
