import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, PauseIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';

const Gallery: React.FC = () => {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: 'KCA University Campus',
      description: 'State-of-the-art facilities for innovation and learning',
      category: 'Campus',
    },
    {
      id: 2,
      title: 'Innovation Lab',
      description: 'Where ideas come to life through cutting-edge technology',
      category: 'Facilities',
    },
    {
      id: 3,
      title: 'Previous Seminar Success',
      description: 'Highlights from our 2024 Innovation Seminar',
      category: 'Events',
    },
    {
      id: 4,
      title: 'Student Projects',
      description: 'Innovative solutions developed by our students',
      category: 'Innovation',
    },
    {
      id: 5,
      title: 'Industry Partnerships',
      description: 'Collaborating with leading technology companies',
      category: 'Partnerships',
    },
    {
      id: 6,
      title: 'Research Excellence',
      description: 'Groundbreaking research in technology and innovation',
      category: 'Research',
    },
  ];

  const categories = ['All', 'Campus', 'Facilities', 'Events', 'Innovation', 'Partnerships', 'Research'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSlides = selectedCategory === 'All' 
    ? slides 
    : slides.filter(slide => slide.category === selectedCategory);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % filteredSlides.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isPlaying, filteredSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredSlides.length) % filteredSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="gallery" className="section-padding" style={{
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
              <span className="text-gradient">Gallery</span> & Highlights
            </h2>
            <p className="fs-5 mx-auto mb-0" style={{
              maxWidth: '800px',
              color: theme === 'light' ? '#6b7280' : '#d1d5db'
            }}>
              Explore our campus, facilities, and past events that showcase the spirit of innovation at KCA University.
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="d-flex flex-wrap justify-content-center gap-2 mb-5"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentSlide(0);
              }}
              className={`btn px-3 py-2 fw-medium border-0 ${
                selectedCategory === category
                  ? 'text-white'
                  : 'text-body'
              }`}
              style={{
                background: selectedCategory === category
                  ? 'linear-gradient(135deg, #3b82f6, #f59e0b)'
                  : theme === 'light' ? '#f8f9fa' : '#374151',
                fontSize: '0.875rem',
                borderRadius: '25px'
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Main Slideshow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="position-relative"
        >
          <div 
            className="position-relative rounded-3 overflow-hidden"
            style={{
              height: '600px',
              boxShadow: theme === 'light' 
                ? '0 25px 50px rgba(0,0,0,0.1)' 
                : '0 25px 50px rgba(0,0,0,0.3)'
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${currentSlide}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="position-absolute w-100 h-100"
              >
                {/* Placeholder for slide image */}
                <div 
                  className="w-100 h-100 d-flex align-items-center justify-content-center"
                  style={{
                    background: theme === 'light' 
                      ? 'linear-gradient(135deg, #eff6ff, #fef3c7, #eff6ff)' 
                      : 'linear-gradient(135deg, #374151, #1f2937, #374151)'
                  }}
                >
                  <div className="text-center">
                    <div 
                      className="rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-4"
                      style={{
                        width: '96px',
                        height: '96px',
                        background: 'linear-gradient(135deg, #3b82f6, #f59e0b)'
                      }}
                    >
                      <span className="text-white fw-bold fs-3">
                        {filteredSlides[currentSlide]?.id}
                      </span>
                    </div>
                    <h3 className="h2 fw-bold mb-3" style={{
                      color: theme === 'light' ? '#3b82f6' : '#f59e0b'
                    }}>
                      {filteredSlides[currentSlide]?.title}
                    </h3>
                    <p className="fs-5 mx-auto mb-4" style={{
                      maxWidth: '400px',
                      color: theme === 'light' ? '#6b7280' : '#d1d5db'
                    }}>
                      {filteredSlides[currentSlide]?.description}
                    </p>
                    <div>
                      <span 
                        className="badge px-3 py-2 fw-medium"
                        style={{
                          background: theme === 'light' 
                            ? 'rgba(59, 130, 246, 0.1)' 
                            : 'rgba(245, 158, 11, 0.2)',
                          color: theme === 'light' ? '#3b82f6' : '#f59e0b'
                        }}
                      >
                        {filteredSlides[currentSlide]?.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Overlay with gradient */}
                <div 
                  className="position-absolute w-100 h-100"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent, transparent)',
                    top: 0,
                    left: 0
                  }}
                />
                
                {/* Slide Content */}
                <div className="position-absolute bottom-0 start-0 end-0 text-white p-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div 
                      className="rounded-3 p-4"
                      style={{
                        background: 'rgba(0,0,0,0.2)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <h3 className="h4 fw-bold mb-2">
                        {filteredSlides[currentSlide]?.title}
                      </h3>
                      <p className="fs-5 mb-0" style={{ opacity: 0.9 }}>
                        {filteredSlides[currentSlide]?.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="position-absolute start-0 top-50 translate-middle-y btn border-0 text-white ms-3"
              style={{
                background: 'rgba(0,0,0,0.25)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                border: '2px solid rgba(255,255,255,0.2)'
              }}
            >
              <ChevronLeftIcon style={{ width: '24px', height: '24px' }} />
            </motion.button>
            
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="position-absolute end-0 top-50 translate-middle-y btn border-0 text-white me-3"
              style={{
                background: 'rgba(0,0,0,0.25)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                border: '2px solid rgba(255,255,255,0.2)'
              }}
            >
              <ChevronRightIcon style={{ width: '24px', height: '24px' }} />
            </motion.button>

            {/* Play/Pause Button */}
            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="position-absolute top-0 end-0 btn border-0 text-white mt-3 me-3"
              style={{
                background: 'rgba(0,0,0,0.25)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                border: '2px solid rgba(255,255,255,0.2)'
              }}
            >
              {isPlaying ? (
                <PauseIcon style={{ width: '20px', height: '20px' }} />
              ) : (
                <PlayIcon style={{ width: '20px', height: '20px' }} />
              )}
            </motion.button>
          </div>

          {/* Slide Indicators */}
          <div className="d-flex justify-content-center gap-2 mt-4">
            {filteredSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="border-0"
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: currentSlide === index
                    ? 'linear-gradient(135deg, #3b82f6, #f59e0b)'
                    : theme === 'light' ? '#d1d5db' : '#6b7280',
                  transition: 'all 0.2s ease'
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Thumbnail Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="row g-3 mt-5"
        >
          {filteredSlides.map((slide, index) => (
            <div key={slide.id} className="col-6 col-md-4 col-lg-2">
              <motion.button
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="btn border-0 w-100 p-0 position-relative overflow-hidden"
                style={{
                  aspectRatio: '1',
                  borderRadius: '12px',
                  border: `2px solid ${
                    currentSlide === index
                      ? theme === 'light' ? '#3b82f6' : '#f59e0b'
                      : theme === 'light' ? '#e5e7eb' : '#374151'
                  }`,
                  boxShadow: currentSlide === index
                    ? theme === 'light' 
                      ? '0 10px 25px rgba(59, 130, 246, 0.2)' 
                      : '0 10px 25px rgba(245, 158, 11, 0.2)'
                    : 'none'
                }}
              >
                <div 
                  className="w-100 h-100 d-flex align-items-center justify-content-center"
                  style={{
                    background: theme === 'light' 
                      ? 'linear-gradient(135deg, #f3f4f6, #e5e7eb)' 
                      : 'linear-gradient(135deg, #374151, #1f2937)'
                  }}
                >
                  <div className="text-center">
                    <div 
                      className="rounded-circle d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(135deg, #3b82f6, #f59e0b)'
                      }}
                    >
                      <span className="text-white fw-bold small">{slide.id}</span>
                    </div>
                    <p className="small mt-1 mb-0" style={{
                      color: theme === 'light' ? '#6b7280' : '#9ca3af'
                    }}>
                      {slide.category}
                    </p>
                  </div>
                </div>
              </motion.button>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
