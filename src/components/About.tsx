
import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  LightBulbIcon, 
  AcademicCapIcon, 
  BuildingOfficeIcon, 
  GlobeAltIcon 
} from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';

// Counter component for animated numbers
const AnimatedCounter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ 
  end, 
  duration = 2000,
  suffix = '' 
}) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      // Reset count to 0 and start animation
      setCount(0);
      let startTime: number;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * end);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(animate);
    } else {
      // Reset to 0 when out of view
      setCount(0);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About: React.FC = () => {
  const { theme } = useTheme();
  
  const features = [
    {
      icon: LightBulbIcon,
      title: 'Innovation Exhibitions',
      description: 'Showcase research outputs, student projects, and innovative ideas with commercial potential through exhibitions and pitch competitions.',
    },
    {
      icon: AcademicCapIcon,
      title: 'Research to Commercialization',
      description: 'Build capacity among innovators on intellectual property, funding, scaling, and market access through specialized workshops.',
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Industry Partnerships',
      description: 'Connect with investors, mentors, and enterprise development support through our investor-innovator matchmaking forum.',
    },
    {
      icon: GlobeAltIcon,
      title: 'Sustainability Innovation',
      description: 'Participate in our Sustainability Innovation Challenge featuring Green Tech, EduTech, AgriTech, and Health Innovation tracks.',
    },
  ];

  const stats = [
    { number: 500, suffix: '+', label: 'Expected Attendees' },
    { number: 50, suffix: '+', label: 'Industry Speakers' },
    { number: 20, suffix: '+', label: 'Workshop Sessions' },
    { number: 15, suffix: '+', label: 'Innovation Showcases' },
  ];

  return (
    <section 
      id="about" 
      className="section-padding position-relative overflow-hidden"
      style={{
        minHeight: '100vh',
        paddingTop: '6rem'
      }}
    >
      {/* Parallax Background Image */}
      <div 
        className="position-absolute w-100 h-100"
        style={{
          top: 0,
          left: 0,
          zIndex: 0,
          backgroundImage: `url('https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          filter: theme === 'light' ? 'brightness(0.3)' : 'brightness(0.2)',
        }}
      />
      
      {/* Content Overlay */}
      <div 
        className="position-relative w-100 h-100"
        style={{
          zIndex: 1
        }}
      >
        <div className="container">
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="display-4 fw-bold mb-4" style={{
              color: '#ffffff'
            }}>
              About the <span className="text-gradient">4th Innovation Week & Industry Summit</span>
            </h2>
            <p className="fs-5 mx-auto mb-0" style={{
              maxWidth: '900px',
              color: '#cbd5e1'
            }}>
              KCA University's flagship annual event celebrating creativity, research excellence, enterprise, 
              and collaboration between academia, industry, government, and the community. This year's theme, 
              "Innovate, Elevate, Impact," reflects the urgent need to transform promising ideas into viable 
              commercial and social ventures that contribute to sustainable development.
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
                  background: theme === 'light' 
                    ? 'rgba(255, 255, 255, 0.15)' 
                    : 'rgba(22, 33, 62, 0.15)',
                  border: `1px solid ${theme === 'light' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)'}`,
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
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
                    color: '#e2e8f0'
                  }}>
                    {feature.title}
                  </h3>
                  <p className="mb-0" style={{
                    color: '#cbd5e1'
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
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)'
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
                      <AnimatedCounter 
                        end={stat.number} 
                        suffix={stat.suffix}
                        duration={2000 + (index * 200)}
                      />
                    </div>
                    <div className="fw-medium" style={{
                      color: '#cbd5e1'
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
      </div>
    </section>
  );
};

export default About;
