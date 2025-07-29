import React from 'react';
import { motion } from 'framer-motion';
import { 
  LightBulbIcon, 
  AcademicCapIcon, 
  BuildingOfficeIcon, 
  GlobeAltIcon 
} from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { theme } = useTheme();
  
  const features = [
    {
      icon: LightBulbIcon,
      title: 'Innovation Focus',
      description: 'Explore cutting-edge technologies and innovative solutions that are shaping the future of various industries.',
    },
    {
      icon: AcademicCapIcon,
      title: 'Academic Excellence',
      description: 'Learn from renowned professors, researchers, and industry experts who are leading innovation in their fields.',
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Industry Partnerships',
      description: 'Connect with leading companies and startups that are driving technological advancement and creating opportunities.',
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Impact',
      description: 'Understand how local innovations can have global implications and contribute to sustainable development.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Expected Attendees' },
    { number: '50+', label: 'Industry Speakers' },
    { number: '20+', label: 'Workshop Sessions' },
    { number: '15+', label: 'Innovation Showcases' },
  ];

  return (
    <section id="about" className="section-padding" style={{
      background: theme === 'light' ? '#f8f9fa' : '#1a1a2e',
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
              About the <span className="text-gradient">Innovation Seminar</span>
            </h2>
            <p className="fs-5 mx-auto mb-0" style={{
              maxWidth: '800px',
              color: theme === 'light' ? '#6b7280' : '#d1d5db'
            }}>
              The KCA University Innovation Seminar is a premier event bringing together students, 
              faculty, industry leaders, and innovators to explore the future of technology and entrepreneurship.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="row g-4 mb-5">
          {features.map((feature, index) => (
            <div key={feature.title} className="col-lg-3 col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card text-center h-100"
                style={{
                  background: theme === 'light' ? '#ffffff' : '#16213e',
                  border: `1px solid ${theme === 'light' ? '#e5e7eb' : '#374151'}`,
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: theme === 'light' 
                    ? '0 10px 25px rgba(0,0,0,0.1)' 
                    : '0 10px 25px rgba(0,0,0,0.3)'
                }}
              >
                <div className="card-body p-4">
                  <div className="mb-4">
                    <div 
                      className="rounded-circle d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: '80px',
                        height: '80px',
                        background: theme === 'light' 
                          ? 'linear-gradient(135deg, #3b82f6, #f59e0b)' 
                          : 'linear-gradient(135deg, #f59e0b, #3b82f6)'
                      }}
                    >
                      <feature.icon style={{ width: '40px', height: '40px', color: 'white' }} />
                    </div>
                  </div>
                  <h3 className="h5 fw-bold mb-3" style={{
                    color: theme === 'light' ? '#3b82f6' : '#f59e0b'
                  }}>
                    {feature.title}
                  </h3>
                  <p className="mb-0" style={{
                    color: theme === 'light' ? '#6b7280' : '#d1d5db'
                  }}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card mb-5"
          style={{
            background: theme === 'light' ? '#ffffff' : '#16213e',
            border: `1px solid ${theme === 'light' ? '#e5e7eb' : '#374151'}`
          }}
        >
          <div className="card-body p-5">
            <div className="row g-4 text-center">
              {stats.map((stat, index) => (
                <div key={stat.label} className="col-lg-3 col-md-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <div className="display-5 fw-bold text-gradient mb-2">
                      {stat.number}
                    </div>
                    <div className="fw-medium" style={{
                      color: theme === 'light' ? '#6b7280' : '#d1d5db'
                    }}>
                      {stat.label}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div 
            className="card text-white"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #f59e0b)',
              border: 'none'
            }}
          >
            <div className="card-body p-5">
              <h3 className="h2 fw-bold mb-4">
                Our Mission
              </h3>
              <p className="fs-5 mb-0 mx-auto" style={{
                maxWidth: '800px',
                opacity: 0.95
              }}>
                To foster innovation, entrepreneurship, and technological advancement by bringing together 
                brilliant minds, industry leaders, and change-makers to create solutions for tomorrow's challenges.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
