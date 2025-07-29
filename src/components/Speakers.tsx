import React from 'react';
import { motion } from 'framer-motion';
import { BuildingOfficeIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';

const Speakers: React.FC = () => {
  const { theme } = useTheme();
  const speakers = [
    {
      name: 'Dr. Sarah Kimani',
      title: 'Director of Innovation',
      company: 'Kenya ICT Authority',
      image: '/api/placeholder/300/300',
      bio: 'Leading expert in digital transformation and technology policy in Kenya.',
      type: 'keynote',
    },
    {
      name: 'Prof. Michael Ochieng',
      title: 'Head of Computer Science',
      company: 'University of Nairobi',
      image: '/api/placeholder/300/300',
      bio: 'Renowned researcher in artificial intelligence and machine learning.',
      type: 'academic',
    },
    {
      name: 'James Mwangi',
      title: 'Founder & CEO',
      company: 'TechHub Nairobi',
      image: '/api/placeholder/300/300',
      bio: 'Serial entrepreneur and investor in African tech startups.',
      type: 'industry',
    },
    {
      name: 'Dr. Grace Wanjiku',
      title: 'Innovation Director',
      company: 'Safaricom PLC',
      image: '/api/placeholder/300/300',
      bio: 'Pioneer in mobile technology and financial inclusion.',
      type: 'industry',
    },
    {
      name: 'Prof. David Kariuki',
      title: 'Research Director',
      company: 'KCA University',
      image: '/api/placeholder/300/300',
      bio: 'Expert in sustainable technology and green innovation.',
      type: 'academic',
    },
    {
      name: 'Maria Rodriguez',
      title: 'Global Innovation Lead',
      company: 'Google for Startups',
      image: '/api/placeholder/300/300',
      bio: 'International expert in startup ecosystems and technology acceleration.',
      type: 'keynote',
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'keynote':
        return 'linear-gradient(135deg, #f59e0b, #fbbf24)';
      case 'academic':
        return 'linear-gradient(135deg, #3b82f6, #60a5fa)';
      case 'industry':
        return 'linear-gradient(135deg, #10b981, #34d399)';
      default:
        return 'linear-gradient(135deg, #6b7280, #9ca3af)';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'academic':
        return AcademicCapIcon;
      case 'industry':
        return BuildingOfficeIcon;
      default:
        return BuildingOfficeIcon;
    }
  };

  return (
    <section id="speakers" className="section-padding" style={{
      background: theme === 'light' ? '#ffffff' : '#1a1a2e',
      paddingTop: '6rem'
    }}>
      <div className="container">
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="display-4 fw-bold mb-4">
              Featured <span className="text-gradient">Speakers</span>
            </h2>
            <p className="fs-5 mx-auto mb-0" style={{
              maxWidth: '800px',
              color: theme === 'light' ? '#6b7280' : '#d1d5db'
            }}>
              Learn from industry leaders, academic experts, and innovation pioneers who are 
              shaping the future of technology and entrepreneurship.
            </p>
          </motion.div>
        </div>

        <div className="row g-4">
          {speakers.map((speaker, index) => {
            const TypeIcon = getTypeIcon(speaker.type);
            
            return (
              <div key={speaker.name} className="col-lg-4 col-md-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="card h-100"
                  style={{
                    background: theme === 'light' ? '#ffffff' : '#16213e',
                    border: `1px solid ${theme === 'light' ? '#e5e7eb' : '#374151'}`,
                    transition: 'all 0.5s ease'
                  }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.03,
                    boxShadow: theme === 'light' 
                      ? '0 20px 40px rgba(0,0,0,0.1)' 
                      : '0 20px 40px rgba(0,0,0,0.3)'
                  }}
                >
                  <div className="card-body p-4">
                    <div className="position-relative mb-4">
                      {/* Speaker Image */}
                      <div 
                        className="d-flex align-items-center justify-content-center rounded-3 mb-3 position-relative"
                        style={{
                          height: '200px',
                          background: theme === 'light' 
                            ? 'linear-gradient(135deg, #f3f4f6, #e5e7eb)' 
                            : 'linear-gradient(135deg, #374151, #1f2937)'
                        }}
                      >
                        <div className="text-center" style={{
                          color: theme === 'light' ? '#6b7280' : '#9ca3af'
                        }}>
                          <div 
                            className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2"
                            style={{
                              width: '80px',
                              height: '80px',
                              background: 'linear-gradient(135deg, #3b82f6, #f59e0b)'
                            }}
                          >
                            <span className="text-white fw-bold fs-4">
                              {speaker.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <p className="small fw-medium mb-0">Speaker Photo</p>
                        </div>
                      </div>
                      
                      {/* Speaker Type Badge */}
                      <div 
                        className="position-absolute top-0 end-0 px-2 py-1 rounded-pill text-white small fw-medium d-flex align-items-center"
                        style={{
                          background: getTypeColor(speaker.type),
                          fontSize: '0.75rem'
                        }}
                      >
                        <TypeIcon style={{ width: '12px', height: '12px' }} className="me-1" />
                        <span className="text-capitalize">{speaker.type}</span>
                      </div>
                    </div>

                    <div className="d-flex flex-column h-100">
                      <div className="mb-3">
                        <h3 className="h5 fw-bold mb-2" style={{
                          color: theme === 'light' ? '#3b82f6' : '#f59e0b'
                        }}>
                          {speaker.name}
                        </h3>
                        <p className="small fw-semibold mb-1" style={{
                          color: theme === 'light' ? '#3b82f6' : '#f59e0b'
                        }}>
                          {speaker.title}
                        </p>
                        <p className="small mb-0" style={{
                          color: theme === 'light' ? '#6b7280' : '#d1d5db'
                        }}>
                          {speaker.company}
                        </p>
                      </div>
                      
                      <p className="small flex-grow-1 mb-3" style={{
                        color: theme === 'light' ? '#6b7280' : '#d1d5db',
                        lineHeight: '1.5'
                      }}>
                        {speaker.bio}
                      </p>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="kca-btn kca-btn-outline w-100"
                      >
                        <span className="d-flex align-items-center justify-content-center">
                          <span>View Profile</span>
                          <svg 
                            style={{ width: '16px', height: '16px' }} 
                            className="ms-2" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M9 5l7 7-7 7" 
                            />
                          </svg>
                        </span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-5"
        >
          <div 
            className="card"
            style={{
              background: theme === 'light' 
                ? 'linear-gradient(135deg, #eff6ff, #fef3c7)' 
                : 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(245, 158, 11, 0.2))',
              border: `1px solid ${theme === 'light' ? '#dbeafe' : 'rgba(59, 130, 246, 0.3)'}`
            }}
          >
            <div className="card-body p-5">
              <h3 className="h3 fw-bold mb-3" style={{
                color: theme === 'light' ? '#3b82f6' : '#f59e0b'
              }}>
                Join Our Speaker Lineup
              </h3>
              <p className="fs-5 mb-4 mx-auto" style={{
                maxWidth: '500px',
                color: theme === 'light' ? '#6b7280' : '#d1d5db'
              }}>
                Want to speak at our event? We're always looking for innovative voices to inspire our community.
              </p>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="kca-btn kca-btn-primary kca-btn-lg"
              >
                <span className="d-flex align-items-center justify-content-center">
                  <svg 
                    style={{ width: '20px', height: '20px' }} 
                    className="me-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                    />
                  </svg>
                  <span>Apply to Speak</span>
                  <svg 
                    style={{ width: '20px', height: '20px' }} 
                    className="ms-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;
