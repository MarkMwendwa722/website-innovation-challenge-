import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AdjustmentsHorizontalIcon,
  XMarkIcon,
  PlusIcon,
  MinusIcon,
  PlayIcon,
  PauseIcon,
  EyeIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';
import { useAccessibility } from '../contexts/AccessibilityContext';

const AccessibilityWidget: React.FC = () => {
  const { theme } = useTheme();
  const { 
    fontSize, 
    increaseFontSize, 
    decreaseFontSize,
    animationsEnabled,
    toggleAnimations,
    highContrast,
    toggleHighContrast,
    resetAllSettings
  } = useAccessibility();
  const [isOpen, setIsOpen] = useState(false);

  const getFontSizeLabel = () => {
    switch (fontSize) {
      case 'small': return 'Small';
      case 'normal': return 'Normal';
      case 'large': return 'Large';
      case 'extra-large': return 'Extra Large';
      default: return 'Normal';
    }
  };

  return (
    <>
      {/* Accessibility Button */}
      <motion.div
        className="position-fixed"
        style={{
          bottom: '96px',
          right: '24px',
          zIndex: 1060
        }}
        initial={{ scale: 0, x: 50 }}
        animate={{ scale: 1, x: 0 }}
        transition={{ delay: 2.5, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="btn rounded-circle d-flex align-items-center justify-content-center position-relative"
          style={{
            width: '60px',
            height: '60px',
            background: theme === 'light' 
              ? 'linear-gradient(135deg, #059669, #10b981)' 
              : 'linear-gradient(135deg, #7c3aed, #a855f7)',
            border: 'none',
            boxShadow: theme === 'light' 
              ? '0 8px 25px rgba(5, 150, 105, 0.4)' 
              : '0 8px 25px rgba(124, 58, 237, 0.4)',
            color: 'white'
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Accessibility Settings"
          aria-label="Open accessibility settings"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <XMarkIcon style={{ width: '24px', height: '24px' }} />
              </motion.div>
            ) : (
              <motion.div
                key="accessibility"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <AdjustmentsHorizontalIcon style={{ width: '24px', height: '24px' }} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="position-fixed"
            style={{
              bottom: '172px',
              right: '24px',
              width: '320px',
              zIndex: 1050
            }}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div 
              className="card shadow-lg"
              style={{
                background: theme === 'light' ? '#ffffff' : '#1f2937',
                border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '20px',
                overflow: 'hidden'
              }}
            >
              {/* Header */}
              <div 
                className="card-header border-0 text-center"
                style={{
                  background: theme === 'light' 
                    ? 'linear-gradient(135deg, #059669, #10b981)' 
                    : 'linear-gradient(135deg, #7c3aed, #a855f7)',
                  color: 'white',
                  padding: '20px'
                }}
              >
                <h6 className="mb-0 fw-bold d-flex align-items-center justify-content-center gap-2">
                  <AdjustmentsHorizontalIcon style={{ width: '20px', height: '20px' }} />
                  Accessibility Settings
                </h6>
              </div>

              {/* Content */}
              <div className="card-body p-4">
                {/* Font Size Controls */}
                <div className="mb-4">
                  <h6 
                    className="fw-semibold mb-3 d-flex align-items-center gap-2"
                    style={{ color: theme === 'light' ? '#1f2937' : '#e5e7eb' }}
                  >
                    <span style={{ fontSize: '16px' }}>🔤</span>
                    Text Size
                  </h6>
                  
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={decreaseFontSize}
                        disabled={fontSize === 'small'}
                        className="btn btn-sm rounded-circle"
                        style={{
                          background: fontSize === 'small' 
                            ? 'transparent' 
                            : theme === 'light' 
                              ? 'rgba(5, 150, 105, 0.1)' 
                              : 'rgba(124, 58, 237, 0.2)',
                          color: fontSize === 'small'
                            ? theme === 'light' ? '#9ca3af' : '#6b7280'
                            : theme === 'light' ? '#059669' : '#a855f7',
                          border: `1px solid ${fontSize === 'small' 
                            ? theme === 'light' ? '#e5e7eb' : '#374151'
                            : theme === 'light' ? '#059669' : '#a855f7'}`,
                          width: '36px',
                          height: '36px'
                        }}
                      >
                        <MinusIcon style={{ width: '16px', height: '16px' }} />
                      </motion.button>
                      
                      <span 
                        className="fw-medium px-3"
                        style={{ 
                          color: theme === 'light' ? '#374151' : '#d1d5db',
                          minWidth: '80px',
                          textAlign: 'center',
                          fontSize: '14px'
                        }}
                      >
                        {getFontSizeLabel()}
                      </span>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={increaseFontSize}
                        disabled={fontSize === 'extra-large'}
                        className="btn btn-sm rounded-circle"
                        style={{
                          background: fontSize === 'extra-large' 
                            ? 'transparent' 
                            : theme === 'light' 
                              ? 'rgba(5, 150, 105, 0.1)' 
                              : 'rgba(124, 58, 237, 0.2)',
                          color: fontSize === 'extra-large'
                            ? theme === 'light' ? '#9ca3af' : '#6b7280'
                            : theme === 'light' ? '#059669' : '#a855f7',
                          border: `1px solid ${fontSize === 'extra-large' 
                            ? theme === 'light' ? '#e5e7eb' : '#374151'
                            : theme === 'light' ? '#059669' : '#a855f7'}`,
                          width: '36px',
                          height: '36px'
                        }}
                      >
                        <PlusIcon style={{ width: '16px', height: '16px' }} />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Animation Controls */}
                <div className="mb-4">
                  <h6 
                    className="fw-semibold mb-3 d-flex align-items-center gap-2"
                    style={{ color: theme === 'light' ? '#1f2937' : '#e5e7eb' }}
                  >
                    <span style={{ fontSize: '16px' }}>🎬</span>
                    Animations
                  </h6>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={toggleAnimations}
                    className="btn w-100 d-flex align-items-center justify-content-between"
                    style={{
                      background: animationsEnabled 
                        ? theme === 'light' 
                          ? 'rgba(5, 150, 105, 0.1)' 
                          : 'rgba(124, 58, 237, 0.2)'
                        : theme === 'light'
                          ? 'rgba(239, 68, 68, 0.1)'
                          : 'rgba(239, 68, 68, 0.2)',
                      color: animationsEnabled
                        ? theme === 'light' ? '#059669' : '#a855f7'
                        : theme === 'light' ? '#dc2626' : '#ef4444',
                      border: `1px solid ${animationsEnabled 
                        ? theme === 'light' ? '#059669' : '#a855f7'
                        : theme === 'light' ? '#dc2626' : '#ef4444'}`,
                      borderRadius: '12px',
                      padding: '12px 16px'
                    }}
                  >
                    <span className="fw-medium">
                      {animationsEnabled ? 'Animations On' : 'Animations Off'}
                    </span>
                    {animationsEnabled ? (
                      <PlayIcon style={{ width: '18px', height: '18px' }} />
                    ) : (
                      <PauseIcon style={{ width: '18px', height: '18px' }} />
                    )}
                  </motion.button>
                </div>

                {/* High Contrast */}
                <div className="mb-4">
                  <h6 
                    className="fw-semibold mb-3 d-flex align-items-center gap-2"
                    style={{ color: theme === 'light' ? '#1f2937' : '#e5e7eb' }}
                  >
                    <span style={{ fontSize: '16px' }}>🌓</span>
                    High Contrast
                  </h6>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={toggleHighContrast}
                    className="btn w-100 d-flex align-items-center justify-content-between"
                    style={{
                      background: highContrast 
                        ? theme === 'light' 
                          ? 'rgba(5, 150, 105, 0.1)' 
                          : 'rgba(124, 58, 237, 0.2)'
                        : theme === 'light'
                          ? 'rgba(107, 114, 128, 0.1)'
                          : 'rgba(107, 114, 128, 0.2)',
                      color: highContrast
                        ? theme === 'light' ? '#059669' : '#a855f7'
                        : theme === 'light' ? '#6b7280' : '#9ca3af',
                      border: `1px solid ${highContrast 
                        ? theme === 'light' ? '#059669' : '#a855f7'
                        : theme === 'light' ? '#d1d5db' : '#4b5563'}`,
                      borderRadius: '12px',
                      padding: '12px 16px'
                    }}
                  >
                    <span className="fw-medium">
                      {highContrast ? 'High Contrast On' : 'High Contrast Off'}
                    </span>
                    <EyeIcon style={{ width: '18px', height: '18px' }} />
                  </motion.button>
                </div>

                {/* Reset All */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={resetAllSettings}
                  className="btn w-100"
                  style={{
                    background: theme === 'light' 
                      ? 'rgba(107, 114, 128, 0.1)' 
                      : 'rgba(107, 114, 128, 0.2)',
                    color: theme === 'light' ? '#6b7280' : '#9ca3af',
                    border: `1px solid ${theme === 'light' ? '#d1d5db' : '#4b5563'}`,
                    borderRadius: '12px',
                    padding: '12px 16px'
                  }}
                >
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <ArrowPathIcon style={{ width: '16px', height: '16px' }} />
                    <span className="fw-medium">Reset All Settings</span>
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityWidget;
