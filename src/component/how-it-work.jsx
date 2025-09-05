import React from 'react';
import { 
  FaPlayCircle, 
  FaCalendarCheck, 
  FaGraduationCap, 
  FaQuestionCircle,
  FaArrowRight,
  FaClock,
  FaUsers,
  FaHandshake,
} from 'react-icons/fa';

const WorkAnddetail = () => {
  const services = [
    {
      id: 1,
      title: 'How It Works',
      subtitle: 'Simple 3-Step Process',
      description: 'Discover how easy it is to connect with our expert gurus and get personalized guidance for your life\'s questions.',
      icon: FaPlayCircle,
      features: [
        'Choose your preferred guru',
        'Select consultation type',
        'Get instant guidance',
      ],
      buttonText: 'Learn More',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      delay: 100,
    },
    {
      id: 2,
      title: 'Book Your Free Session Now',
      subtitle: 'Complimentary First Consultation',
      description: 'Start your spiritual journey with a free 15-minute session with any of our certified astrology experts.',
      icon: FaCalendarCheck,
      features: [
        '15 minutes free consultation',
        'No hidden charges',
        'Choose any guru',
      ],
      buttonText: 'Book Free Session',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      delay: 200,
    },
    {
      id: 3,
      title: 'Connect the Guru For Tuition Now',
      subtitle: 'Learn Ancient Sciences',
      description: 'Take comprehensive courses in Vedic astrology, numerology, and other ancient sciences from master gurus.',
      icon: FaGraduationCap,
      features: [
        'Structured learning modules',
        'One-on-one teaching',
        'Certification programs',
      ],
      buttonText: 'Start Learning',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      delay: 300,
    },
    {
      id: 4,
      title: 'Clear Your Doubt - Connect to Live Guru',
      subtitle: 'Instant Expert Guidance',
      description: 'Get immediate answers to your pressing questions from our live gurus available 24/7 for instant consultation.',
      icon: FaQuestionCircle,
      features: [
        '24/7 availability',
        'Instant responses',
        'Multiple communication modes',
      ],
      buttonText: 'Connect Now',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      delay: 400,
    },
  ];

  const stats = [
    { icon: FaUsers, number: '50,000+', label: 'Happy Clients' },
    { icon: FaClock, number: '24/7', label: 'Available Support' },
    { icon: FaHandshake, number: '10,000+', label: 'Successful Consultations' },
    { icon: FaGraduationCap, number: '100+', label: 'Expert Gurus' },
  ];

  return (
    <section className="work-detail-section section-padding bg-light-gray">
      <div className="container-custom">
        {/* Header */}
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">How We Serve You</h2>
          <p className="section-subtitle">
            Choose from our comprehensive range of services designed to guide you through life's journey
          </p>
        </div>

        {/* Stats */}
        <div className="stats-container" data-aos="fade-up" data-aos-delay="100">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <stat.icon className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Service Cards */}
        <div className="services-container">
          {services.map((service) => (
            <div 
              key={service.id}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={service.delay}
              style={{ background: service.gradient }}
            >
              <div className="card-content">
                <div className="service-icon-container">
                  <service.icon className="service-icon" />
                </div>

                <div className="service-info">
                  <h3 className="service-title">{service.title}</h3>
                  <h4 className="service-subtitle">{service.subtitle}</h4>
                  <p className="service-description">{service.description}</p>

                  <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <FaArrowRight className="feature-arrow" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="service-button">
                    {service.buttonText}
                    <FaArrowRight className="button-arrow" />
                  </button>
                </div>
              </div>

              <div className="card-overlay"></div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .work-detail-section {
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        /* Stats Section */
        .stats-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 60px;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }

        .stat-card {
          background: var(--white);
          padding: 25px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 15px;
          box-shadow: 0 8px 25px var(--shadow-light);
          transition: transform 0.3s ease;
          min-height: 120px;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-icon {
          font-size: 2rem;
          color: var(--accent-gold);
          flex-shrink: 0;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary-black);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--primary-gray);
          font-weight: 500;
        }

        /* Services */
        .services-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 10px;
        }

        .service-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          justify-content: stretch;
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .service-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }

        .card-content {
          position: relative;
          padding: 25px;
          flex: 1;
          display: flex;
          flex-direction: column;
          z-index: 2;
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          z-index: 1;
        }

        .service-icon-container {
          width: 65px;
          height: 65px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .service-icon {
          font-size: 1.9rem;
          color: var(--white);
        }

        .service-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .service-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--white);
          margin: 0 0 6px 0;
          line-height: 1.3;
        }

        .service-subtitle {
          font-size: 0.95rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 12px 0;
        }

        .service-description {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.5;
          margin: 0 0 15px 0;
          flex: 1;
        }

        .service-features {
          list-style: none;
          margin: 0 0 20px 0;
          padding: 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .feature-arrow {
          font-size: 0.7rem;
          color: var(--white);
        }

        .service-button {
          background: rgba(255, 255, 255, 0.9);
          color: var(--primary-black);
          border: none;
          padding: 12px 20px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.9rem;
          align-self: flex-start;
        }

        .service-button:hover {
          background: var(--white);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .button-arrow {
          font-size: 0.8rem;
          transition: transform 0.3s ease;
        }

        .service-button:hover .button-arrow {
          transform: translateX(3px);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .stats-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .services-container {
            grid-template-columns: 1fr;
          }
          .stats-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }
          .stat-card {
            padding: 20px;
            min-height: 100px;
          }
          .service-card {
            min-height: 300px;
          }
          .card-content {
            padding: 20px;
          }
          .service-title {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .stats-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

    </section>
  );
};

export default WorkAnddetail;
