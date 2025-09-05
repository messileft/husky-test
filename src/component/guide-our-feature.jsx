import React from 'react';
import { 
  FaVideo, 
  FaCalendarAlt, 
  FaShieldAlt, 
  FaClock, 
  FaGraduationCap,
  FaCheckCircle,
  FaArrowRight,
} from 'react-icons/fa';
import { GiLotus } from 'react-icons/gi';

const GuideToOurFeature = () => {
  const features = [
    {
      id: 1,
      title: 'Multiple Consultation Modes',
      description: 'Choose from video calls, voice calls, or chat sessions based on your comfort and preference.',
      icon: FaVideo,
      highlights: [
        'HD Video Consultations',
        'Crystal Clear Voice Calls',
        'Real-time Chat Support',
        'Screen Sharing for Chart Analysis',
      ],
    },
    {
      id: 2,
      title: 'Easy Appointment Booking',
      description: 'Book sessions with your preferred guru instantly or schedule for later with our user-friendly booking system.',
      icon: FaCalendarAlt,
      highlights: [
        'Instant Booking Available',
        'Schedule for Future Dates',
        'Guru Availability Calendar',
        'Automatic Reminders',
      ],
    },
    {
      id: 3,
      title: 'Secure & Private Platform',
      description: 'Your personal information and consultation details are protected with enterprise-grade security.',
      icon: FaShieldAlt,
      highlights: [
        'End-to-End Encryption',
        'Privacy Protection',
        'Secure Payment Gateway',
        'Confidential Consultations',
      ],
    },
    {
      id: 4,
      title: '24/7 Availability',
      description: 'Access expert guidance whenever you need it with our round-the-clock service availability.',
      icon: FaClock,
      highlights: [
        'Always Available Gurus',
        'Global Time Zone Support',
        'Emergency Consultations',
        'Weekend & Holiday Service',
      ],
    },
    {
      id: 5,
      title: 'Learning Resources',
      description: 'Expand your knowledge with comprehensive courses, tutorials, and educational content.',
      icon: FaGraduationCap,
      highlights: [
        'Structured Learning Modules',
        'Video Tutorials',
        'Practice Exercises',
        'Certification Programs',
      ],
    },
    {
      id: 6,
      title: 'Expert Verification',
      description: 'All our gurus are thoroughly verified and certified professionals with years of experience.',
      icon: FaCheckCircle,
      highlights: [
        'Background Verification',
        'Experience Validation',
        'Skill Assessment',
        'Client Feedback Reviews',
      ],
    },
  ];

  const steps = [
    {
      step: 1,
      title: 'Choose Your Service',
      description: 'Select from our wide range of astrological services including consultations, courses, or specific readings.',
    },
    {
      step: 2,
      title: 'Pick Your Guru',
      description: 'Browse through our expert gurus, read their profiles, reviews, and choose the one that resonates with you.',
    },
    {
      step: 3,
      title: 'Book & Pay Securely',
      description: 'Schedule your session at your preferred time and make secure payment through our protected gateway.',
    },
    {
      step: 4,
      title: 'Get Guidance',
      description: 'Connect with your chosen guru and receive personalized guidance for your life\'s questions.',
    },
  ];

  return (
    <section className="guide-features-section section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="section-header" data-aos="fade-up">
          <div className="feature-badge">
            <GiLotus />
            <span>PLATFORM FEATURES</span>
          </div>
          <h2 className="section-title">Guide to Our Features</h2>
          <p className="section-subtitle">
            Discover how our platform makes connecting with expert astrologers simple, secure, and meaningful
          </p>
        </div>

        {/* How It Works Steps */}
        <div className="steps-section" data-aos="fade-up" data-aos-delay="200">
          <h3 className="steps-title">How It Works</h3>
          <div className="steps-container">
            {steps.map((step, index) => (
              <div key={step.step} className="step-item" data-aos="fade-right" data-aos-delay={300 + (index * 100)}>
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="step-arrow">
                    <FaArrowRight />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="feature-card"
              data-aos="fade-up"
              data-aos-delay={100 + (index * 100)}
            >
              <div className="feature-icon">
                <feature.icon />
              </div>
              
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                
                <ul className="feature-highlights">
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="check-icon" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="guide-cta" data-aos="fade-up" data-aos-delay="800">
          <h3>Ready to Start Your Spiritual Journey?</h3>
          <p>Join thousands of satisfied clients who have found guidance and clarity through our platform</p>
          <div className="cta-buttons">
            <button className="btn-primary-custom">Start Free Consultation</button>
            <button className="btn-outline-custom">Explore Features</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .guide-features-section {
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .feature-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: var(--primary-black);
          color: var(--white);
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 20px;
        }

        .steps-section {
          margin-bottom: 80px;
        }

        .steps-title {
          text-align: center;
          font-size: 2rem;
          font-weight: 600;
          color: var(--primary-black);
          margin-bottom: 40px;
        }

        .steps-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          position: relative;
        }

        .step-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          position: relative;
        }

        .step-number {
          width: 60px;
          height: 60px;
          background: var(--accent-gold);
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
        }

        .step-content h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--primary-black);
          margin: 0 0 10px 0;
        }

        .step-content p {
          font-size: 0.95rem;
          color: var(--primary-gray);
          line-height: 1.6;
          margin: 0;
        }

        .step-arrow {
          position: absolute;
          top: 25px;
          right: -15px;
          color: var(--accent-gold);
          font-size: 1.2rem;
          z-index: 1;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .feature-card {
          background: var(--light-gray);
          border-radius: 20px;
          padding: 30px;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px var(--shadow-medium);
          border-color: var(--accent-gold);
          background: var(--white);
        }

        .feature-icon {
          width: 70px;
          height: 70px;
          background: var(--primary-black);
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          background: var(--accent-gold);
          transform: scale(1.1);
        }

        .feature-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--primary-black);
          margin: 0 0 12px 0;
        }

        .feature-description {
          font-size: 1rem;
          color: var(--primary-gray);
          line-height: 1.6;
          margin: 0 0 20px 0;
        }

        .feature-highlights {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .feature-highlights li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
          font-size: 0.9rem;
          color: var(--primary-black);
        }

        .check-icon {
          color: var(--accent-gold);
          font-size: 0.8rem;
        }

        .guide-cta {
          background: var(--primary-black);
          color: var(--white);
          padding: 50px;
          border-radius: 20px;
          text-align: center;
        }

        .guide-cta h3 {
          font-size: 2rem;
          font-weight: 600;
          margin: 0 0 15px 0;
        }

        .guide-cta p {
          font-size: 1.1rem;
          opacity: 0.9;
          margin: 0 0 30px 0;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .cta-buttons .btn-outline-custom {
          background: transparent;
          color: var(--white);
          border-color: var(--white);
        }

        .cta-buttons .btn-outline-custom:hover {
          background: var(--white);
          color: var(--primary-black);
        }

        @media (max-width: 768px) {
          .steps-container {
            grid-template-columns: 1fr;
          }

          .step-arrow {
            display: none;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .feature-card {
            padding: 25px;
          }

          .guide-cta {
            padding: 40px 25px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-buttons button {
            width: 250px;
          }
        }
      `}</style>
    </section>
  );
};

export default GuideToOurFeature;
