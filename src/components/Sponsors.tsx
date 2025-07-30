import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

// Import logos from assets
import EquityLogo from '../assets/Equity Bank Uganda Logo PNG Vector (PDF) Free Download.jpg';
import KCBLogo from '../assets/KCB Bank Uganda Logo PNG Vector (PDF) Free Download.jpg';
import StrathmoreImage from '../assets/Strathmore.jpg';
import USIULogo from '../assets/United States International University - Africa Logo PNG Vector (EPS) Free Download.jpg';

const Sponsors: React.FC = () => {
  const { theme } = useTheme();
  
  // All sponsors in one flat array for the sliding gallery
  const allSponsors = [
    { 
      name: 'Safaricom PLC', 
      logo: 'https://techafricanews.com/wp-content/uploads/2024/11/Safaricom-Logo-New-PR.jpg',
      fallback: 'SAFARICOM',
      website: 'https://safaricom.co.ke'
    },
    { 
      name: 'Equity Bank', 
      logo: EquityLogo,
      fallback: 'EQUITY',
      website: 'https://equitybank.co.ke'
    },
    { 
      name: 'Microsoft Kenya', 
      logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31',
      fallback: 'MICROSOFT',
      website: 'https://microsoft.com'
    },
    { 
      name: 'Google', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png',
      fallback: 'GOOGLE',
      website: 'https://google.com'
    },
    { 
      name: 'IBM Kenya', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/IBM-Logo.png',
      fallback: 'IBM',
      website: 'https://ibm.com'
    },
    { 
      name: 'USIU-Africa', 
      logo: USIULogo,
      fallback: 'USIU',
      website: 'https://usiu.ac.ke'
    },
    { 
      name: 'Strathmore University', 
      logo: StrathmoreImage,
      fallback: 'STRATHMORE',
      website: 'https://strathmore.edu'
    },
    { 
      name: 'University of Nairobi', 
      logo: 'https://www.uonbi.ac.ke/sites/default/files/logo.png',
      fallback: 'UoN',
      website: 'https://uonbi.ac.ke'
    },
    { 
      name: 'KCB Bank', 
      logo: KCBLogo,
      fallback: 'KCB',
      website: 'https://kcbgroup.com'
    },
    { 
      name: 'Airtel Kenya', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/12/Airtel-Logo.png',
      fallback: 'AIRTEL',
      website: 'https://airtel.co.ke'
    }
  ];

  // Duplicate the array for seamless infinite scroll (removed as we're using bento grid now)
  // const duplicatedSponsors = [...allSponsors, ...allSponsors];

  return (
    <section 
      id="sponsors" 
      className="py-5"
      style={{
        background: theme === 'light' 
          ? 'linear-gradient(180deg, #fafbff 0%, #f1f5f9 50%, #ffffff 100%)' 
          : 'linear-gradient(180deg, #0a0a0f 0%, #111827 50%, #1f2937 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Geometric Background Pattern */}
      <div 
        className="position-absolute w-100 h-100"
        style={{
          backgroundImage: theme === 'light'
            ? `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            : `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          top: 0,
          left: 0,
          zIndex: 1
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Redesigned Header */}
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
              className="d-inline-flex align-items-center gap-2 mb-4 px-4 py-2"
              style={{
                background: theme === 'light'
                  ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(245, 158, 11, 0.08))'
                  : 'linear-gradient(45deg, rgba(59, 130, 246, 0.15), rgba(245, 158, 11, 0.12))',
                border: `2px solid ${theme === 'light' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(245, 158, 11, 0.4)'}`,
                borderRadius: '50px',
                backdropFilter: 'blur(10px)'
              }}
            >
              <span style={{ fontSize: '20px' }}>🤝</span>
              <span 
                className="fw-semibold"
                style={{
                  color: theme === 'light' ? '#3b82f6' : '#f59e0b',
                  fontSize: '16px'
                }}
              >
                Strategic Partners
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="display-2 fw-bold mb-4" 
              style={{ 
                color: theme === 'light' ? '#1e293b' : '#e2e8f0',
                lineHeight: '1.1',
                textAlign: 'center'
              }}
            >
              Innovating Together for{' '}
              <span style={{
                background: 'linear-gradient(135deg, #3b82f6, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Tomorrow
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="fs-4 mx-auto mb-0" 
              style={{
                maxWidth: '800px',
                color: theme === 'light' ? '#64748b' : '#cbd5e1',
                lineHeight: '1.7',
                fontWeight: '300'
              }}
            >
              Collaborating with industry leaders, government agencies, and development partners 
              to strengthen our innovation ecosystem. From Kenya Innovation Agency to leading 
              universities and financial institutions, we're building Kenya's future together.
            </motion.p>
          </motion.div>
        </div>

        {/* Modern Card-based Grid */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-5"
        >
          <div className="row g-3">
            {allSponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100
                }}
                className="col-lg-3 col-md-4 col-sm-6 col-12"
              >
                <motion.div
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="position-relative overflow-hidden h-100"
                  style={{
                    background: theme === 'light' 
                      ? 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
                      : 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
                    border: `1px solid ${theme === 'light' ? 'rgba(226, 232, 240, 0.8)' : 'rgba(71, 85, 105, 0.6)'}`,
                    borderRadius: '16px',
                    boxShadow: theme === 'light' 
                      ? '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)'
                      : '0 4px 20px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(245, 158, 11, 0.1)',
                    cursor: 'pointer',
                    minHeight: '180px'
                  }}
                  onClick={() => window.open(sponsor.website, '_blank')}
                >
                  {/* Subtle corner accent */}
                  <div
                    className="position-absolute"
                    style={{
                      top: 0,
                      right: 0,
                      width: '40px',
                      height: '40px',
                      background: `linear-gradient(135deg, ${theme === 'light' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(245, 158, 11, 0.2)'}, transparent)`,
                      borderRadius: '0 16px 0 40px'
                    }}
                  />
                  
                  <div className="p-4 d-flex flex-column align-items-center justify-content-center h-100 text-center">
                    {/* Logo */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="mb-3"
                    >
                      <div 
                        className="d-flex align-items-center justify-content-center mx-auto"
                        style={{
                          width: '80px',
                          height: '80px',
                          background: theme === 'light' 
                            ? 'linear-gradient(135deg, rgba(248, 250, 252, 0.9), rgba(241, 245, 249, 0.7))'
                            : 'linear-gradient(135deg, rgba(51, 65, 85, 0.6), rgba(30, 41, 59, 0.8))',
                          borderRadius: '12px',
                          border: `1px solid ${theme === 'light' ? 'rgba(226, 232, 240, 0.5)' : 'rgba(71, 85, 105, 0.4)'}`,
                        }}
                      >
                        <img 
                          src={sponsor.logo} 
                          alt={sponsor.name}
                          className="img-fluid"
                          style={{ 
                            width: '60px',
                            height: '60px',
                            objectFit: 'contain',
                            filter: theme === 'dark' ? 'brightness(1.1)' : 'none'
                          }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div 
                          className="d-none align-items-center justify-content-center text-white fw-bold"
                          style={{
                            width: '60px',
                            height: '60px',
                            background: 'linear-gradient(135deg, #3b82f6, #f59e0b)',
                            borderRadius: '8px',
                            fontSize: '10px'
                          }}
                        >
                          {sponsor.fallback}
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Company Name */}
                    <h6 
                      className="fw-semibold mb-2" 
                      style={{
                        color: theme === 'light' ? '#1e293b' : '#cbd5e1',
                        fontSize: '14px',
                        lineHeight: '1.4'
                      }}
                    >
                      {sponsor.name}
                    </h6>

                    {/* Small indicator dot */}
                    <div
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: theme === 'light' ? '#3b82f6' : '#f59e0b'
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership CTA - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <div 
            className="row align-items-center"
            style={{
              background: theme === 'light' 
                ? 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)'
                : 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)',
              border: `1px solid ${theme === 'light' ? 'rgba(226, 232, 240, 0.8)' : 'rgba(71, 85, 105, 0.4)'}`,
              borderRadius: '20px',
              padding: '3rem 2rem'
            }}
          >
            <div className="col-lg-8 text-lg-start text-center mb-4 mb-lg-0">
              <motion.h3 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="h2 fw-bold mb-3"
                style={{
                  color: theme === 'light' ? '#1e293b' : '#e2e8f0'
                }}
              >
                Ready to be part of something bigger?
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="fs-5 mb-0" 
                style={{
                  color: theme === 'light' ? '#64748b' : '#cbd5e1',
                  lineHeight: '1.6'
                }}
              >
                Join our ecosystem of innovators and help shape the future of technology in Kenya.
              </motion.p>
            </div>
            
            <div className="col-lg-4 d-flex justify-content-lg-end justify-content-center">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: theme === 'light' 
                    ? '0 15px 35px rgba(59, 130, 246, 0.25)' 
                    : '0 15px 35px rgba(245, 158, 11, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, delay: 0.6 }}
                className="btn fw-semibold px-5 py-3"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '16px',
                  boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)'
                }}
                onClick={() => window.open('mailto:partnerships@kca.ac.ke', '_blank')}
              >
                Partner With Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
