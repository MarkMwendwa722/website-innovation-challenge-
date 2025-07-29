import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

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
      logo: 'https://equitygroupholdings.com/ke/',
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
      name: 'TechHub Nairobi', 
      logo: 'https://techcrunch.com/wp-content/uploads/2018/11/techhub.png',
      fallback: 'TECHHUB',
      website: 'https://techhub.com'
    },
    { 
      name: 'iHub', 
      logo: 'https://ihub.co.ke/assets/img/ihub-logo.png',
      fallback: 'iHUB',
      website: 'https://ihub.co.ke'
    },
    { 
      name: 'Nailab', 
      logo: 'https://nailab.co.ke/wp-content/uploads/2020/06/nailab-logo.png',
      fallback: 'NAILAB',
      website: 'https://nailab.co.ke'
    },
    { 
      name: 'USIU-Africa', 
      logo: 'https://www.usiu.ac.ke/images/logo.png',
      fallback: 'USIU',
      website: 'https://usiu.ac.ke'
    },
    { 
      name: 'Kenya ICT Authority', 
      logo: 'https://icta.go.ke/wp-content/uploads/2019/09/icta-logo.png',
      fallback: 'KICTA',
      website: 'https://icta.go.ke'
    },
    { 
      name: 'Konza Technopolis', 
      logo: 'https://konzacity.go.ke/wp-content/uploads/2021/01/konza-logo.png',
      fallback: 'KONZA',
      website: 'https://konzacity.go.ke'
    },
    { 
      name: 'Strathmore University', 
      logo: 'https://strathmore.edu/assets/images/strathmore-logo.png',
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
      logo: 'https://1000logos.net/wp-content/uploads/2021/05/KCB-Bank-Logo.png',
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
          ? 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)' 
          : 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Elements */}
      <div 
        className="position-absolute w-100 h-100"
        style={{
          background: theme === 'light'
            ? 'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.2) 0%, transparent 50%)',
          top: 0,
          left: 0,
          zIndex: 1
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Header */}
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="d-inline-block mb-3"
            >
              <span 
                className="badge px-4 py-2 rounded-pill fw-medium"
                style={{
                  background: theme === 'light'
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(245, 158, 11, 0.1))'
                    : 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(245, 158, 11, 0.2))',
                  border: `1px solid ${theme === 'light' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(245, 158, 11, 0.3)'}`,
                  color: theme === 'light' ? '#3b82f6' : '#f59e0b',
                  fontSize: '14px'
                }}
              >
                ✨ Trusted Partners
              </span>
            </motion.div>
            
            <h2 className="display-3 fw-bold mb-4" style={{ 
              background: 'linear-gradient(135deg, #3b82f6, #f59e0b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.2'
            }}>
              Our Innovation <br />
              <span style={{
                color: theme === 'light' ? '#1e293b' : '#ffffff',
                fontWeight: 'bold'
              }}>
                Ecosystem
              </span>
            </h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="fs-5 mx-auto mb-0" 
              style={{
                maxWidth: '700px',
                color: theme === 'light' ? '#64748b' : '#cbd5e1',
                lineHeight: '1.6'
              }}
            >
              Powered by industry leaders and innovators who believe in shaping Kenya's technological future
            </motion.p>
          </motion.div>
        </div>

        {/* Modern Bento-style Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-5"
        >
          <div className="row g-4">
            {allSponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className={`${
                  index % 5 === 0 ? 'col-lg-6 col-md-6' : 
                  index % 5 === 1 ? 'col-lg-3 col-md-6' :
                  index % 5 === 2 ? 'col-lg-3 col-md-6' :
                  index % 5 === 3 ? 'col-lg-4 col-md-6' :
                  'col-lg-8 col-md-6'
                } col-12`}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.02, 
                    y: -8,
                    rotateY: 5,
                    rotateX: 5
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 10 
                  }}
                  className="card border-0 h-100 position-relative overflow-hidden"
                  style={{
                    background: theme === 'light' 
                      ? 'linear-gradient(135deg, #ffffff 0%, rgba(248, 250, 252, 0.8) 100%)'
                      : 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(22, 33, 62, 0.9) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: `1px solid ${theme === 'light' ? 'rgba(226, 232, 240, 0.8)' : 'rgba(71, 85, 105, 0.3)'}`,
                    borderRadius: '20px',
                    boxShadow: theme === 'light' 
                      ? '0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.06)'
                      : '0 20px 40px rgba(0, 0, 0, 0.4), 0 8px 16px rgba(245, 158, 11, 0.1)',
                    cursor: 'pointer',
                    transformStyle: 'preserve-3d'
                  }}
                  onClick={() => window.open(sponsor.website, '_blank')}
                >
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="position-absolute w-100 h-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: `linear-gradient(135deg, ${theme === 'light' ? 'rgba(59, 130, 246, 0.05)' : 'rgba(245, 158, 11, 0.1)'} 0%, transparent 100%)`,
                      borderRadius: '20px',
                      zIndex: 1
                    }}
                  />

                  <div 
                    className="card-body d-flex flex-column align-items-center justify-content-center text-center position-relative"
                    style={{
                      padding: index % 5 === 0 || index % 5 === 4 ? '3rem 2rem' : '2rem 1.5rem',
                      zIndex: 2
                    }}
                  >
                    {/* Logo container with enhanced styling */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotateY: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="mb-3"
                    >
                      <div 
                        className="d-flex align-items-center justify-content-center mx-auto position-relative"
                        style={{
                          width: index % 5 === 0 || index % 5 === 4 ? '100px' : '80px',
                          height: index % 5 === 0 || index % 5 === 4 ? '100px' : '80px',
                          background: theme === 'light' 
                            ? 'linear-gradient(135deg, rgba(248, 250, 252, 0.8), rgba(241, 245, 249, 0.6))'
                            : 'linear-gradient(135deg, rgba(51, 65, 85, 0.6), rgba(30, 41, 59, 0.8))',
                          border: `2px solid ${theme === 'light' ? 'rgba(226, 232, 240, 0.6)' : 'rgba(71, 85, 105, 0.4)'}`,
                          borderRadius: '16px',
                          backdropFilter: 'blur(10px)',
                          boxShadow: theme === 'light'
                            ? 'inset 0 2px 4px rgba(0, 0, 0, 0.06)'
                            : 'inset 0 2px 4px rgba(245, 158, 11, 0.1)'
                        }}
                      >
                        <img 
                          src={sponsor.logo} 
                          alt={sponsor.name}
                          className="img-fluid"
                          style={{ 
                            width: index % 5 === 0 || index % 5 === 4 ? '70px' : '55px',
                            height: index % 5 === 0 || index % 5 === 4 ? '70px' : '55px',
                            objectFit: 'contain',
                            filter: theme === 'dark' ? 'brightness(1.1) contrast(1.1)' : 'none',
                            transition: 'all 0.3s ease'
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
                            width: index % 5 === 0 || index % 5 === 4 ? '70px' : '55px',
                            height: index % 5 === 0 || index % 5 === 4 ? '70px' : '55px',
                            background: 'linear-gradient(135deg, #3b82f6, #f59e0b)',
                            borderRadius: '12px',
                            fontSize: index % 5 === 0 || index % 5 === 4 ? '12px' : '10px'
                          }}
                        >
                          {sponsor.fallback}
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Sponsor name with enhanced typography */}
                    <motion.h5 
                      className="fw-bold mb-0 text-center" 
                      style={{
                        color: theme === 'light' ? '#1e293b' : '#f1f5f9',
                        fontSize: index % 5 === 0 || index % 5 === 4 ? '18px' : '15px',
                        lineHeight: '1.3',
                        letterSpacing: '-0.02em'
                      }}
                      whileHover={{
                        color: '#3b82f6'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {sponsor.name}
                    </motion.h5>

                    {/* Subtle accent line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: '60%' }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      style={{
                        height: '2px',
                        background: 'linear-gradient(90deg, #3b82f6, #f59e0b)',
                        borderRadius: '1px',
                        marginTop: '0.75rem'
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modern Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <div 
            className="card border-0 position-relative overflow-hidden"
            style={{
              background: theme === 'light' 
                ? 'linear-gradient(135deg, #ffffff 0%, rgba(59, 130, 246, 0.02) 50%, rgba(245, 158, 11, 0.02) 100%)'
                : 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(22, 33, 62, 0.9) 100%)',
              backdropFilter: 'blur(20px)',
              border: `1px solid ${theme === 'light' ? 'rgba(226, 232, 240, 0.6)' : 'rgba(71, 85, 105, 0.3)'}`,
              borderRadius: '24px',
              boxShadow: theme === 'light'
                ? '0 25px 50px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1)'
                : '0 25px 50px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(245, 158, 11, 0.2)'
            }}
          >
            {/* Animated background patterns */}
            <div className="position-absolute w-100 h-100">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="position-absolute"
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: `linear-gradient(45deg, ${theme === 'light' ? 'rgba(59, 130, 246, 0.05)' : 'rgba(59, 130, 246, 0.1)'}, transparent)`,
                  top: '-100px',
                  right: '-100px'
                }}
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="position-absolute"
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: `linear-gradient(45deg, ${theme === 'light' ? 'rgba(245, 158, 11, 0.05)' : 'rgba(245, 158, 11, 0.1)'}, transparent)`,
                  bottom: '-75px',
                  left: '-75px'
                }}
              />
            </div>

            <div className="card-body position-relative" style={{ padding: '4rem 2rem', zIndex: 2 }}>
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="d-inline-block mb-4"
              >
                <span 
                  className="badge px-4 py-2 rounded-pill fw-medium"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #f59e0b)',
                    color: 'white',
                    fontSize: '14px',
                    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
                  }}
                >
                  🚀 Join Our Ecosystem
                </span>
              </motion.div>

              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="display-5 fw-bold mb-4"
                style={{
                  background: 'linear-gradient(135deg, #1e293b, #3b82f6, #f59e0b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: '1.2'
                }}
              >
                Ready to Shape the Future?
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="fs-5 mb-5" 
                style={{
                  color: theme === 'light' ? '#64748b' : '#cbd5e1',
                  maxWidth: '600px',
                  margin: '0 auto 2rem',
                  lineHeight: '1.6'
                }}
              >
                Join Kenya's most innovative companies in empowering the next generation of tech leaders. 
                Your partnership creates lasting impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: theme === 'light' 
                      ? '0 20px 40px rgba(59, 130, 246, 0.3)' 
                      : '0 20px 40px rgba(245, 158, 11, 0.4)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="kca-btn kca-btn-primary kca-btn-lg position-relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    border: 'none',
                    padding: '1rem 2.5rem',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
                  }}
                  onClick={() => window.location.href = '#contact'}
                >
                  <span className="position-relative d-flex align-items-center gap-2">
                    Become a Partner
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="btn fw-semibold"
                  style={{
                    background: 'transparent',
                    border: `2px solid ${theme === 'light' ? '#3b82f6' : '#f59e0b'}`,
                    color: theme === 'light' ? '#3b82f6' : '#f59e0b',
                    padding: '1rem 2rem',
                    borderRadius: '12px'
                  }}
                  onClick={() => window.open('mailto:partnerships@kca.ac.ke', '_blank')}
                >
                  Learn More
                </motion.button>
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="row g-4 mt-4"
              >
                {[
                  { number: '15+', label: 'Partners' },
                  { number: '500+', label: 'Attendees' },
                  { number: '2', label: 'Days' }
                ].map((stat, index) => (
                  <div key={stat.label} className="col-4">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                      className="text-center"
                    >
                      <div 
                        className="fw-bold mb-1"
                        style={{
                          fontSize: '1.5rem',
                          background: 'linear-gradient(135deg, #3b82f6, #f59e0b)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        {stat.number}
                      </div>
                      <div 
                        className="small"
                        style={{
                          color: theme === 'light' ? '#64748b' : '#94a3b8',
                          fontSize: '0.875rem'
                        }}
                      >
                        {stat.label}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
