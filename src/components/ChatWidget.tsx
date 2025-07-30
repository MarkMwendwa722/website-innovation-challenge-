import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon, 
  XMarkIcon, 
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';
import KCALogo from '../assets/KCAU_logo.svg';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatWidget: React.FC = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
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
    if (newMessage.trim() === '') return;

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
      const botResponse: Message = {
        id: messages.length + 2,
        text: "Thank you for your message! Our team will get back to you shortly. In the meantime, feel free to explore our website for more information about speakers, schedule, and registration.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="position-fixed"
        style={{
          bottom: '24px',
          right: '24px',
          zIndex: 1050
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="btn rounded-circle d-flex align-items-center justify-content-center position-relative"
          style={{
            width: '60px',
            height: '60px',
            background: theme === 'light' ? '#3b82f6' : '#f59e0b',
            border: 'none',
            boxShadow: theme === 'light' 
              ? '0 8px 25px rgba(59, 130, 246, 0.4)' 
              : '0 8px 25px rgba(245, 158, 11, 0.4)',
            color: 'white'
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
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
                <XMarkIcon style={{ 
                  width: '24px', 
                  height: '24px',
                  color: 'white'
                }} />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <ChatBubbleLeftRightIcon style={{ 
                  width: '24px', 
                  height: '24px',
                  color: 'white'
                }} />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Notification Badge */}
          {!isOpen && (
            <motion.div
              className="position-absolute rounded-circle d-flex align-items-center justify-content-center"
              style={{
                top: '-2px',
                right: '-2px',
                width: '20px',
                height: '20px',
                background: '#ef4444',
                color: 'white',
                fontSize: '12px',
                fontWeight: 'bold'
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 3, type: "spring", stiffness: 500, damping: 15 }}
            >
              3
            </motion.div>
          )}
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="position-fixed"
            style={{
              bottom: '100px',
              right: '24px',
              width: '350px',
              height: '500px',
              zIndex: 1040
            }}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div 
              className="card h-100 shadow-lg"
              style={{
                background: theme === 'light' ? '#ffffff' : '#1f2937',
                border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '16px',
                overflow: 'hidden'
              }}
            >
              {/* Header */}
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

              {/* Messages */}
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

              {/* Input */}
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
                    onClick={handleSendMessage}
                    disabled={newMessage.trim() === ''}
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
                    whileHover={{ scale: newMessage.trim() !== '' ? 1.1 : 1 }}
                    whileTap={{ scale: newMessage.trim() !== '' ? 0.9 : 1 }}
                  >
                    <PaperAirplaneIcon style={{ width: '16px', height: '16px' }} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
