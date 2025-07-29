import React from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ArrowUpIcon 
} from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Speakers', href: '#speakers' },
        { name: 'Schedule', href: '#schedule' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Sponsors', href: '#sponsors' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Event Info',
      links: [
        { name: 'Registration', href: '#register' },
        { name: 'Venue', href: '#venue' },
        { name: 'Accommodation', href: '#accommodation' },
        { name: 'Travel Guide', href: '#travel' },
        { name: 'FAQs', href: '#faqs' },
        { name: 'Code of Conduct', href: '#conduct' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Presentations', href: '#presentations' },
        { name: 'Workshop Materials', href: '#materials' },
        { name: 'Networking App', href: '#app' },
        { name: 'Photo Gallery', href: '#photos' },
        { name: 'Event Videos', href: '#videos' },
        { name: 'Certificates', href: '#certificates' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: 'T' },
    { name: 'LinkedIn', href: '#', icon: 'L' },
    { name: 'Facebook', href: '#', icon: 'F' },
    { name: 'Instagram', href: '#', icon: 'I' },
    { name: 'YouTube', href: '#', icon: 'Y' },
  ];

  return (
    <footer style={{
      background: theme === 'light' ? '#1f2937' : '#0f1419',
      color: 'white'
    }}>
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-5">
          <div className="row g-4">
            {/* University Info */}
            <div className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="d-flex flex-column gap-4"
              >
                <div className="d-flex align-items-center gap-3">
                  <div 
                    className="rounded-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #3b82f6, #f59e0b)'
                    }}
                  >
                    <span className="text-white fw-bold fs-4">K</span>
                  </div>
                  <div>
                    <h3 className="h5 fw-bold mb-0">KCA University</h3>
                    <p className="small mb-0" style={{ color: '#9ca3af' }}>Innovation Seminar 2025</p>
                  </div>
                </div>
                
                <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
                  Join us for Kenya's premier innovation seminar, bringing together brilliant minds, 
                  industry leaders, and change-makers to shape the future of technology.
                </p>

                <div className="d-flex flex-column gap-2">
                  <div className="d-flex align-items-center gap-3">
                    <MapPinIcon style={{ width: '20px', height: '20px', color: '#60a5fa' }} />
                    <span className="small" style={{ color: '#d1d5db' }}>Ruaraka Campus, Thika Road, Nairobi</span>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <PhoneIcon style={{ width: '20px', height: '20px', color: '#60a5fa' }} />
                    <span className="small" style={{ color: '#d1d5db' }}>+254 20 834 9999</span>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <EnvelopeIcon style={{ width: '20px', height: '20px', color: '#60a5fa' }} />
                    <span className="small" style={{ color: '#d1d5db' }}>innovation@kca.ac.ke</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="d-flex gap-2">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="btn border-0 d-flex align-items-center justify-content-center text-white"
                      style={{
                        width: '40px',
                        height: '40px',
                        background: theme === 'light' ? '#374151' : '#1f2937',
                        color: '#d1d5db'
                      }}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, sectionIndex) => (
              <div key={section.title} className="col-lg-2 col-md-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: (sectionIndex + 1) * 0.1 }}
                  className="d-flex flex-column gap-3"
                >
                  <h4 className="h6 fw-semibold text-white">{section.title}</h4>
                  <ul className="list-unstyled d-flex flex-column gap-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <motion.a
                          href={link.href}
                          whileHover={{ x: 5 }}
                          className="text-decoration-none small"
                          style={{ 
                            color: '#d1d5db',
                            transition: 'color 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            (e.target as HTMLElement).style.color = '#60a5fa';
                          }}
                          onMouseLeave={(e) => {
                            (e.target as HTMLElement).style.color = '#d1d5db';
                          }}
                        >
                          {link.name}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`py-5 border-top ${theme === 'dark' ? 'border-secondary' : 'border-dark'}`}
          >
            <div className="text-center mb-4">
              <h3 className="h4 fw-bold mb-3 text-white">Stay Updated</h3>
              <p className={`mx-auto ${theme === 'dark' ? 'text-light' : 'text-white'}`} style={{ maxWidth: '32rem' }}>
                Get the latest updates about the innovation seminar, speaker announcements, 
                and exclusive content delivered to your inbox.
              </p>
            </div>
            
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`form-control ${theme === 'dark' ? 'bg-dark text-white border-secondary' : 'bg-light'}`}
                    style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="kca-btn kca-btn-primary"
                    style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}
                  >
                    Subscribe
                  </motion.button>
                </div>
                <p className="small text-muted mt-2 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="container">
          <div className={`py-4 border-top ${theme === 'dark' ? 'border-secondary' : 'border-dark'}`}>
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="d-flex flex-column flex-sm-row align-items-center gap-3">
                  <p className="mb-0 small text-muted">&copy; 2025 KCA University. All rights reserved.</p>
                  <div className="d-flex align-items-center gap-3">
                    <a 
                      href="#" 
                      className="text-decoration-none small text-muted"
                      style={{ transition: 'color 0.2s ease' }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.color = '#60a5fa';
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.color = '#6c757d';
                      }}
                    >
                      Privacy Policy
                    </a>
                    <span className="text-muted">•</span>
                    <a 
                      href="#" 
                      className="text-decoration-none small text-muted"
                      style={{ transition: 'color 0.2s ease' }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.color = '#60a5fa';
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.color = '#6c757d';
                      }}
                    >
                      Terms of Service
                    </a>
                    <span className="text-muted">•</span>
                    <a 
                      href="#" 
                      className="text-decoration-none small text-muted"
                      style={{ transition: 'color 0.2s ease' }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.color = '#60a5fa';
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.color = '#6c757d';
                      }}
                    >
                      Accessibility
                    </a>
                  </div>
                </div>
              </div>

              {/* Scroll to Top Button */}
              <div className="col-md-4 d-flex justify-content-md-end justify-content-center mt-3 mt-md-0">
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn d-flex align-items-center justify-content-center"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #3b82f6, #f59e0b)',
                    border: 'none',
                    color: 'white',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                  aria-label="Scroll to top"
                >
                  <ArrowUpIcon style={{ width: '20px', height: '20px' }} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Event Badge */}
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center pb-4"
          >
            <div 
              className="d-inline-flex align-items-center px-4 py-2 rounded-pill border"
              style={{
                background: `linear-gradient(135deg, ${theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}, ${theme === 'dark' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(245, 158, 11, 0.1)'})`,
                borderColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'
              }}
            >
              <span className="position-relative d-flex me-3" style={{ width: '12px', height: '12px' }}>
                <span 
                  className="position-absolute w-100 h-100 rounded-circle"
                  style={{
                    background: '#f59e0b',
                    animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
                    opacity: 0.75
                  }}
                ></span>
                <span 
                  className="position-relative rounded-circle w-100 h-100"
                  style={{ background: '#f59e0b' }}
                ></span>
              </span>
              <span className="fw-medium" style={{ color: theme === 'dark' ? '#93c5fd' : '#3b82f6' }}>
                Innovation Seminar 2025 • March 15-16 • Register Now
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
