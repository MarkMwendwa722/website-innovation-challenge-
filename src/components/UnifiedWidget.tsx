import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon,
  AdjustmentsHorizontalIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  PlusIcon,
  MinusIcon,
  PlayIcon,
  PauseIcon,
  EyeIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';
import { useAccessibility } from '../contexts/AccessibilityContext';
import KCALogo from '../assets/KCAU_logo.svg';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

type WidgetMode = 'chat' | 'accessibility';

const UnifiedWidget: React.FC = () => {
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
  const [mode, setMode] = useState<WidgetMode>('chat');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to KCA University's Innovation Week & Industry Summit 2025! How can I help you today?",
      isUser: false,
      timestamp: new Date()
    },
    {
      id: 2,
      text: "I have some questions about the event schedule.",
      isUser: true,
      timestamp: new Date()
    },
    {
      id: 3,
      text: "I'd be happy to help! The event runs from October 28-30, 2025 at KCA Main Campus, Ruaraka. What specific information would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: messages.length + 1,
        text: newMessage,
        isUser: true,
        timestamp: new Date()
      };
      
      setMessages([...messages, userMessage]);
      setNewMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        const botMessage: Message = {
          id: messages.length + 2,
          text: "Thank you for your message! Our team will get back to you soon with more information about the Innovation Week.",
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getFontSizeLabel = () => {
    switch (fontSize) {
      case 'small': return 'Small';
      case 'normal': return 'Normal';
      case 'large': return 'Large';
      case 'extra-large': return 'Extra Large';
      default: return 'Normal';
    }
  };

  const toggleMode = () => {
    setMode(mode === 'chat' ? 'accessibility' : 'chat');
  };

  const getCurrentIcon = () => {
    if (isOpen) {
      return <XMarkIcon style={{ width: '24px', height: '24px' }} />;
    }
    return mode === 'chat' 
      ? <ChatBubbleLeftRightIcon style={{ width: '24px', height: '24px' }} />
      : <AdjustmentsHorizontalIcon style={{ width: '24px', height: '24px' }} />;
  };

  const getButtonTitle = () => {
    if (isOpen) return 'Close';
    return mode === 'chat' ? 'Open Chat' : 'Accessibility Settings';
  };

  return (
    <>
      {/* Unified Button */}
      <motion.div
        className="position-fixed"
        style={{
          bottom: '24px',
          right: '24px',
          zIndex: 1060
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <div className="d-flex flex-column align-items-end gap-2">
          {/* Mode Toggle Button (only show when closed) */}
          {!isOpen && (
            <motion.button
              onClick={toggleMode}
              className="btn rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '48px',
                height: '48px',
                background: theme === 'light' 
                  ? 'rgba(107, 114, 128, 0.1)' 
                  : 'rgba(107, 114, 128, 0.2)',
                border: `1px solid ${theme === 'light' ? '#e5e7eb' : '#374151'}`,
                color: theme === 'light' ? '#6b7280' : '#9ca3af'
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={`Switch to ${mode === 'chat' ? 'Accessibility' : 'Chat'}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
            >
              {mode === 'chat' 
                ? <AdjustmentsHorizontalIcon style={{ width: '20px', height: '20px' }} />
                : <ChatBubbleLeftRightIcon style={{ width: '20px', height: '20px' }} />
              }
            </motion.button>
          )}

          {/* Main Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="btn rounded-circle d-flex align-items-center justify-content-center position-relative"
            style={{
              width: '60px',
              height: '60px',
              background: mode === 'chat'
                ? theme === 'light' ? '#3b82f6' : '#f59e0b'
                : theme === 'light' 
                  ? 'linear-gradient(135deg, #059669, #10b981)' 
                  : 'linear-gradient(135deg, #7c3aed, #a855f7)',
              border: 'none',
              boxShadow: mode === 'chat'
                ? theme === 'light' 
                  ? '0 8px 25px rgba(59, 130, 246, 0.4)' 
                  : '0 8px 25px rgba(245, 158, 11, 0.4)'
                : theme === 'light' 
                  ? '0 8px 25px rgba(5, 150, 105, 0.4)' 
                  : '0 8px 25px rgba(124, 58, 237, 0.4)',
              color: 'white'
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={getButtonTitle()}
            aria-label={getButtonTitle()}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : mode}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {getCurrentIcon()}
              </motion.div>
            </AnimatePresence>

            {/* Notification Badge for Chat */}
            {mode === 'chat' && !isOpen && (
              <motion.span 
                className="position-absolute badge rounded-pill"
                style={{
                  top: '-2px',
                  right: '-2px',
                  background: '#ef4444',
                  color: 'white',
                  fontSize: '10px',
                  minWidth: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 3, type: "spring" }}
              >
                3
              </motion.span>
            )}
          </motion.button>
        </div>
      </motion.div>

      {/* Unified Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="position-fixed"
            style={{
              bottom: mode === 'chat' ? '100px' : '100px',
              right: '24px',
              width: mode === 'chat' ? '350px' : '320px',
              height: mode === 'chat' ? '500px' : 'auto',
              zIndex: 1050
            }}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div 
              className="card shadow-lg h-100"
              style={{
                background: theme === 'light' ? '#ffffff' : '#1f2937',
                border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: mode === 'chat' ? '16px' : '20px',
                overflow: 'hidden'
              }}
            >
              {mode === 'chat' ? (
                <>
                  {/* Chat Header */}
                  <div 
                    className="card-header border-0 d-flex align-items-center justify-content-between"
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6, #f59e0b)',
                      color: 'white',
                      padding: '16px 20px'
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: '40px',
                          height: '40px',
                          background: '#ffffff',
                          padding: '6px'
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
                        <h6 className="mb-0 fw-bold">KCA Support</h6>
                        <small style={{ opacity: 0.9 }}>Innovation Week Assistant</small>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div 
                        className="rounded-circle me-2"
                        style={{
                          width: '8px',
                          height: '8px',
                          background: '#10b981'
                        }}
                      />
                      <small style={{ opacity: 0.9 }}>Online</small>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div 
                    className="card-body d-flex flex-column"
                    style={{
                      padding: '0',
                      height: 'calc(100% - 140px)',
                      overflow: 'hidden'
                    }}
                  >
                    <div 
                      className="flex-1 overflow-auto"
                      style={{
                        padding: '16px',
                        maxHeight: '100%'
                      }}
                    >
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`d-flex mb-3 ${message.isUser ? 'justify-content-end' : 'justify-content-start'}`}
                        >
                          <div
                            className="px-3 py-2 rounded-3"
                            style={{
                              maxWidth: '80%',
                              background: message.isUser 
                                ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
                                : theme === 'light' 
                                  ? '#f3f4f6' 
                                  : '#374151',
                              color: message.isUser 
                                ? 'white' 
                                : theme === 'light' 
                                  ? '#1f2937' 
                                  : '#e5e7eb',
                              fontSize: '14px',
                              lineHeight: '1.4'
                            }}
                          >
                            {message.text}
                            <div 
                              className="mt-1"
                              style={{
                                fontSize: '11px',
                                opacity: 0.7
                              }}
                            >
                              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
                  </div>

                  {/* Chat Input */}
                  <div 
                    className="card-footer border-0"
                    style={{
                      background: theme === 'light' ? '#f9fafb' : '#111827',
                      padding: '16px'
                    }}
                  >
                    <div className="d-flex gap-2">
                      <textarea
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="form-control border-0"
                        style={{
                          background: theme === 'light' ? 'white' : '#374151',
                          color: theme === 'light' ? '#1f2937' : '#e5e7eb',
                          resize: 'none',
                          borderRadius: '20px',
                          padding: '8px 16px',
                          fontSize: '14px'
                        }}
                        rows={1}
                      />
                      <motion.button
                        whileHover={{ scale: newMessage.trim() !== '' ? 1.1 : 1 }}
                        whileTap={{ scale: newMessage.trim() !== '' ? 0.9 : 1 }}
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                        className="btn rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: '40px',
                          height: '40px',
                          background: newMessage.trim() === '' 
                            ? '#9ca3af' 
                            : 'linear-gradient(135deg, #3b82f6, #f59e0b)',
                          border: 'none',
                          color: 'white'
                        }}
                      >
                        <PaperAirplaneIcon style={{ width: '16px', height: '16px' }} />
                      </motion.button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Accessibility Header */}
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

                  {/* Accessibility Content */}
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
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UnifiedWidget;
