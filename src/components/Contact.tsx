import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  GlobeAltIcon,
  CalendarIcon,
  UserGroupIcon 
} from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        subject: '',
        message: '',
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Visit Us',
      details: [
        'KCA University',
        'Ruaraka Campus',
        'Thika Road, Nairobi',
        'Kenya'
      ],
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      details: [
        '+254 20 834 9999',
        '+254 711 013 666',
        'Mon - Fri: 8:00 AM - 5:00 PM'
      ],
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      details: [
        'innovation@kca.ac.ke',
        'partnerships@kca.ac.ke',
        'info@kca.ac.ke'
      ],
    },
    {
      icon: GlobeAltIcon,
      title: 'Online',
      details: [
        'www.kca.ac.ke',
        '@KCAUniversity',
        'KCA University'
      ],
    },
  ];

  const quickActions = [
    {
      icon: CalendarIcon,
      title: 'Register for Event',
      description: 'Secure your spot at the innovation seminar',
      action: 'Register Now',
      color: 'primary',
    },
    {
      icon: UserGroupIcon,
      title: 'Become a Sponsor',
      description: 'Partner with us to support innovation',
      action: 'Learn More',
      color: 'secondary',
    },
  ];

  return (
    <section id="contact" className="section-padding" style={{
      background: theme === 'light' ? '#ffffff' : '#1a1a2e',
      paddingTop: '6rem'
    }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="display-4 fw-bold mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="fs-5 mx-auto mb-0" style={{
              maxWidth: '700px',
              color: theme === 'light' ? '#6b7280' : '#d1d5db'
            }}>
              Have questions about the 4th Innovation Week & Industry Summit? Want to participate, 
              exhibit, or sponsor? We'd love to hear from you and help you be part of this transformative 
              innovation journey.
            </p>
          </motion.div>
        </div>

        <div className="row g-5">
          {/* Contact Form */}
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card h-100"
              style={{
                background: theme === 'light' ? '#ffffff' : '#16213e',
                border: `1px solid ${theme === 'light' ? '#e5e7eb' : '#374151'}`
              }}
            >
              <div className="card-body p-4">
                <h3 className="h4 fw-bold mb-3" style={{
                  color: theme === 'light' ? '#3b82f6' : '#f59e0b'
                }}>
                  Send us a Message
                </h3>
                <p className="mb-4" style={{
                  color: theme === 'light' ? '#6b7280' : '#d1d5db'
                }}>
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label fw-semibold" style={{
                        color: theme === 'light' ? '#374151' : '#f9fafb'
                      }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-control"
                        placeholder="Your full name"
                        style={{
                          background: theme === 'light' ? '#ffffff' : '#1f2937',
                          border: `1px solid ${theme === 'light' ? '#d1d5db' : '#4b5563'}`,
                          color: theme === 'light' ? '#111827' : '#f9fafb'
                        }}
                      />
                    </div>
                    
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label fw-semibold" style={{
                        color: theme === 'light' ? '#374151' : '#f9fafb'
                      }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-control"
                        placeholder="your.email@example.com"
                        style={{
                          background: theme === 'light' ? '#ffffff' : '#1f2937',
                          border: `1px solid ${theme === 'light' ? '#d1d5db' : '#4b5563'}`,
                          color: theme === 'light' ? '#111827' : '#f9fafb'
                        }}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="organization" className="form-label fw-semibold" style={{
                      color: theme === 'light' ? '#374151' : '#f9fafb'
                    }}>
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Your organization or company"
                      style={{
                        background: theme === 'light' ? '#ffffff' : '#1f2937',
                        border: `1px solid ${theme === 'light' ? '#d1d5db' : '#4b5563'}`,
                        color: theme === 'light' ? '#111827' : '#f9fafb'
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label fw-semibold" style={{
                      color: theme === 'light' ? '#374151' : '#f9fafb'
                    }}>
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="form-select"
                      style={{
                        background: theme === 'light' ? '#ffffff' : '#1f2937',
                        border: `1px solid ${theme === 'light' ? '#d1d5db' : '#4b5563'}`,
                        color: theme === 'light' ? '#111827' : '#f9fafb'
                      }}
                    >
                      <option value="">Select a subject</option>
                      <option value="registration">Event Registration</option>
                      <option value="sponsorship">Sponsorship Inquiry</option>
                      <option value="speaking">Speaking Opportunity</option>
                      <option value="partnership">Partnership</option>
                      <option value="media">Media Inquiry</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-semibold" style={{
                      color: theme === 'light' ? '#374151' : '#f9fafb'
                    }}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="form-control"
                      placeholder="Tell us more about your inquiry..."
                      style={{
                        background: theme === 'light' ? '#ffffff' : '#1f2937',
                        border: `1px solid ${theme === 'light' ? '#d1d5db' : '#4b5563'}`,
                        color: theme === 'light' ? '#111827' : '#f9fafb',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`kca-btn kca-btn-lg w-100 ${
                      isSubmitting
                        ? 'kca-btn-secondary'
                        : 'kca-btn-primary'
                    }`}
                    style={{ opacity: isSubmitting ? 0.6 : 1 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>

                  {submitMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="alert alert-success mt-3"
                      style={{
                        background: theme === 'light' ? '#d1fae5' : 'rgba(16, 185, 129, 0.2)',
                        border: `1px solid ${theme === 'light' ? '#a7f3d0' : 'rgba(16, 185, 129, 0.3)'}`,
                        color: theme === 'light' ? '#065f46' : '#10b981'
                      }}
                    >
                      {submitMessage}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-100"
            >
              <h3 className="h4 fw-bold mb-4" style={{
                color: theme === 'light' ? '#3b82f6' : '#f59e0b'
              }}>
                Contact Information
              </h3>
              <p className="mb-4" style={{
                color: theme === 'light' ? '#6b7280' : '#d1d5db'
              }}>
                Reach out to us through any of these channels. We're here to help!
              </p>

              {/* Contact Details */}
              <div className="row g-3 mb-4">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="col-sm-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="card h-100"
                      style={{
                        background: theme === 'light' ? '#f9fafb' : '#1f2937',
                        border: `1px solid ${theme === 'light' ? '#e5e7eb' : '#374151'}`
                      }}
                    >
                      <div className="card-body p-3">
                        <div className="d-flex align-items-start">
                          <div className="flex-shrink-0 me-3">
                            <div 
                              className="rounded d-flex align-items-center justify-content-center"
                              style={{
                                width: '48px',
                                height: '48px',
                                background: theme === 'light' 
                                  ? 'linear-gradient(135deg, #3b82f6, #f59e0b)' 
                                  : 'linear-gradient(135deg, #f59e0b, #3b82f6)'
                              }}
                            >
                              <info.icon style={{ width: '24px', height: '24px', color: '#e2e8f0' }} />
                            </div>
                          </div>
                          <div>
                            <h5 className="fw-semibold mb-2" style={{
                              color: theme === 'light' ? '#3b82f6' : '#f59e0b',
                              fontSize: '16px'
                            }}>
                              {info.title}
                            </h5>
                            <div>
                              {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="mb-1 small" style={{
                                  color: theme === 'light' ? '#6b7280' : '#d1d5db'
                                }}>
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mb-4">
                <h4 className="h5 fw-semibold mb-3" style={{
                  color: theme === 'light' ? '#f59e0b' : '#3b82f6'
                }}>
                  Quick Actions
                </h4>
                {quickActions.map((action, index) => (
                  <motion.div
                    key={action.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="card mb-3"
                    style={{
                      background: action.color === 'primary' 
                        ? 'linear-gradient(135deg, #3b82f6, #60a5fa)' 
                        : 'linear-gradient(135deg, #f59e0b, #fbbf24)',
                      border: 'none',
                      color: '#e2e8f0'
                    }}
                  >
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-start">
                          <action.icon style={{ width: '32px', height: '32px' }} className="me-3 mt-1" />
                          <div>
                            <h5 className="fw-semibold mb-1">{action.title}</h5>
                            <p className="mb-0 small opacity-90">{action.description}</p>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.08, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn btn-light btn-sm fw-semibold"
                          style={{
                            background: 'rgba(255, 255, 255, 0.9)',
                            border: 'none',
                            color: action.color === 'primary' ? '#3b82f6' : '#f59e0b'
                          }}
                        >
                          {action.action}
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="card"
                style={{
                  background: theme === 'light' ? '#f3f4f6' : '#1f2937',
                  border: `1px solid ${theme === 'light' ? '#e5e7eb' : '#374151'}`,
                  height: '200px'
                }}
              >
                <div className="card-body d-flex align-items-center justify-content-center">
                  <div className="text-center">
                    <MapPinIcon style={{ 
                      width: '48px', 
                      height: '48px', 
                      color: theme === 'light' ? '#9ca3af' : '#6b7280'
                    }} className="mb-2" />
                    <p className="mb-1 fw-medium" style={{
                      color: theme === 'light' ? '#6b7280' : '#d1d5db'
                    }}>
                      Interactive Map
                    </p>
                    <p className="mb-0 small" style={{
                      color: theme === 'light' ? '#9ca3af' : '#6b7280'
                    }}>
                      KCA University, Ruaraka Campus
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
