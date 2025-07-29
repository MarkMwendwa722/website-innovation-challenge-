import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ClockIcon, MapPinIcon, UserIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';

const Schedule: React.FC = () => {
  const { theme } = useTheme();
  const [selectedDay, setSelectedDay] = useState(0);

  const scheduleData = [
    {
      day: 'Day 1',
      date: 'March 15, 2025',
      events: [
        {
          time: '08:00 - 09:00',
          title: 'Registration & Welcome Coffee',
          speaker: 'Event Team',
          location: 'Main Lobby',
          type: 'registration',
        },
        {
          time: '09:00 - 09:30',
          title: 'Opening Ceremony',
          speaker: 'Prof. Jane Karanja, Vice Chancellor',
          location: 'Main Auditorium',
          type: 'ceremony',
        },
        {
          time: '09:30 - 10:30',
          title: 'Keynote: The Future of Innovation in Africa',
          speaker: 'Dr. Sarah Kimani',
          location: 'Main Auditorium',
          type: 'keynote',
        },
        {
          time: '10:30 - 11:00',
          title: 'Coffee Break & Networking',
          speaker: '',
          location: 'Exhibition Hall',
          type: 'break',
        },
        {
          time: '11:00 - 12:00',
          title: 'Panel: AI and Machine Learning in Kenya',
          speaker: 'Prof. Michael Ochieng & Others',
          location: 'Main Auditorium',
          type: 'panel',
        },
        {
          time: '12:00 - 13:00',
          title: 'Workshop: Building Your First Startup',
          speaker: 'James Mwangi',
          location: 'Workshop Room A',
          type: 'workshop',
        },
        {
          time: '13:00 - 14:00',
          title: 'Lunch & Exhibition',
          speaker: '',
          location: 'Exhibition Hall',
          type: 'break',
        },
        {
          time: '14:00 - 15:00',
          title: 'Innovation Showcase',
          speaker: 'Student Teams',
          location: 'Main Auditorium',
          type: 'showcase',
        },
        {
          time: '15:00 - 16:00',
          title: 'Industry Talk: Fintech Revolution',
          speaker: 'Dr. Grace Wanjiku',
          location: 'Main Auditorium',
          type: 'talk',
        },
        {
          time: '16:00 - 17:00',
          title: 'Networking & Closing Remarks',
          speaker: '',
          location: 'Exhibition Hall',
          type: 'networking',
        },
      ],
    },
    {
      day: 'Day 2',
      date: 'March 16, 2025',
      events: [
        {
          time: '09:00 - 09:30',
          title: 'Day 2 Welcome',
          speaker: 'Event Team',
          location: 'Main Auditorium',
          type: 'ceremony',
        },
        {
          time: '09:30 - 10:30',
          title: 'Keynote: Global Innovation Trends',
          speaker: 'Maria Rodriguez',
          location: 'Main Auditorium',
          type: 'keynote',
        },
        {
          time: '10:30 - 11:00',
          title: 'Coffee Break',
          speaker: '',
          location: 'Exhibition Hall',
          type: 'break',
        },
        {
          time: '11:00 - 12:00',
          title: 'Workshop: Sustainable Technology',
          speaker: 'Prof. David Kariuki',
          location: 'Workshop Room B',
          type: 'workshop',
        },
        {
          time: '12:00 - 13:00',
          title: 'Investor Panel: Funding Your Innovation',
          speaker: 'Investment Community',
          location: 'Main Auditorium',
          type: 'panel',
        },
        {
          time: '13:00 - 14:00',
          title: 'Lunch & Sponsor Presentations',
          speaker: '',
          location: 'Exhibition Hall',
          type: 'break',
        },
        {
          time: '14:00 - 15:30',
          title: 'Hackathon Presentations',
          speaker: 'Participant Teams',
          location: 'Main Auditorium',
          type: 'showcase',
        },
        {
          time: '15:30 - 16:00',
          title: 'Awards & Recognition',
          speaker: 'Event Committee',
          location: 'Main Auditorium',
          type: 'ceremony',
        },
        {
          time: '16:00 - 17:00',
          title: 'Closing Ceremony & Future Plans',
          speaker: 'University Leadership',
          location: 'Main Auditorium',
          type: 'ceremony',
        },
      ],
    },
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'keynote':
        return 'linear-gradient(135deg, #f59e0b, #fbbf24)';
      case 'panel':
        return 'linear-gradient(135deg, #3b82f6, #60a5fa)';
      case 'workshop':
        return 'linear-gradient(135deg, #10b981, #34d399)';
      case 'showcase':
        return 'linear-gradient(135deg, #8b5cf6, #a78bfa)';
      case 'talk':
        return 'linear-gradient(135deg, #06b6d4, #67e8f9)';
      case 'ceremony':
        return 'linear-gradient(135deg, #ef4444, #f87171)';
      case 'networking':
        return 'linear-gradient(135deg, #6366f1, #818cf8)';
      default:
        return 'linear-gradient(135deg, #6b7280, #9ca3af)';
    }
  };

  return (
    <section id="schedule" className="section-padding" style={{
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
              Event <span className="text-gradient">Schedule</span>
            </h2>
            <p className="fs-5 mx-auto mb-0" style={{
              maxWidth: '800px',
              color: theme === 'light' ? '#6b7280' : '#d1d5db'
            }}>
              Two days packed with inspiring talks, hands-on workshops, networking opportunities, 
              and innovation showcases.
            </p>
          </motion.div>
        </div>

        {/* Day Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="d-flex justify-content-center mb-5"
        >
          <div 
            className="d-flex gap-2 p-2 rounded-3"
            style={{
              background: theme === 'light' ? '#ffffff' : '#16213e',
              border: `1px solid ${theme === 'light' ? '#e5e7eb' : '#374151'}`
            }}
          >
            {scheduleData.map((day, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedDay(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className={`btn px-4 py-3 fw-bold border-0 position-relative overflow-hidden`}
                style={{
                  background: selectedDay === index 
                    ? 'linear-gradient(135deg, #3b82f6, #f59e0b)'
                    : 'transparent',
                  color: selectedDay === index 
                    ? 'white'
                    : (theme === 'light' ? '#374151' : '#d1d5db'),
                  minWidth: '150px'
                }}
              >
                <div className="position-relative">
                  <div className="fw-bold">{day.day}</div>
                  <div className="small mt-1">{day.date}</div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Schedule Content */}
        <motion.div
          key={selectedDay}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="row g-3"
        >
          {scheduleData[selectedDay].events.map((event, index) => (
            <div key={index} className="col-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
                style={{
                  background: theme === 'light' ? '#ffffff' : '#16213e',
                  border: `1px solid ${theme === 'light' ? '#e5e7eb' : '#374151'}`,
                  borderLeft: `4px solid ${theme === 'light' ? '#3b82f6' : '#f59e0b'}`
                }}
                whileHover={{ y: -2, boxShadow: theme === 'light' 
                  ? '0 10px 25px rgba(0,0,0,0.1)' 
                  : '0 10px 25px rgba(0,0,0,0.3)' 
                }}
              >
                <div className="card-body p-4">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="d-flex flex-column flex-sm-row">
                        <div className="flex-shrink-0 mb-3 mb-sm-0 me-sm-4">
                          <div className="d-flex align-items-center">
                            <div 
                              className="rounded-circle me-2"
                              style={{
                                width: '8px',
                                height: '8px',
                                background: theme === 'light' ? '#3b82f6' : '#f59e0b'
                              }}
                            ></div>
                            <ClockIcon style={{ width: '16px', height: '16px' }} className="me-2" />
                            <span className="fw-medium small" style={{
                              color: theme === 'light' ? '#3b82f6' : '#f59e0b'
                            }}>
                              {event.time}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex-grow-1">
                          <h3 className="h6 fw-bold mb-2" style={{
                            color: theme === 'light' ? '#1f2937' : '#f9fafb'
                          }}>
                            {event.title}
                          </h3>
                          
                          <div className="d-flex flex-column gap-1">
                            {event.speaker && (
                              <div className="d-flex align-items-center small" style={{
                                color: theme === 'light' ? '#6b7280' : '#d1d5db'
                              }}>
                                <UserIcon style={{ width: '14px', height: '14px' }} className="me-2" />
                                <span>{event.speaker}</span>
                              </div>
                            )}
                            
                            <div className="d-flex align-items-center small" style={{
                              color: theme === 'light' ? '#6b7280' : '#d1d5db'
                            }}>
                              <MapPinIcon style={{ width: '14px', height: '14px' }} className="me-2" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-lg-4">
                      <div className="d-flex justify-content-lg-end align-items-center gap-3 mt-3 mt-lg-0">
                        <span 
                          className="badge text-white fw-bold px-3 py-2"
                          style={{
                            background: getEventTypeColor(event.type),
                            fontSize: '0.75rem'
                          }}
                        >
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="kca-btn kca-btn-sm kca-btn-outline"
                        >
                          View Details
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Download Schedule CTA */}
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
                Get the Complete Schedule
              </h3>
              <p className="fs-5 mb-4 mx-auto" style={{
                maxWidth: '500px',
                color: theme === 'light' ? '#6b7280' : '#d1d5db'
              }}>
                Download the full PDF schedule with detailed session information, speaker bios, and venue maps.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="kca-btn kca-btn-primary kca-btn-lg"
                >
                  <span className="d-flex align-items-center justify-content-center">
                    <ArrowDownTrayIcon style={{ width: '20px', height: '20px' }} className="me-2" />
                    <span>Download PDF Schedule</span>
                  </span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="kca-btn kca-btn-secondary kca-btn-lg"
                >
                  <span className="d-flex align-items-center justify-content-center">
                    <ArrowDownTrayIcon style={{ width: '20px', height: '20px' }} className="me-2" />
                    <span>Add to Calendar</span>
                  </span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
