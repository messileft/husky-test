import React from 'react';
import { FaStar, FaVideo, FaPhone, FaComments } from 'react-icons/fa';

const LiveGuruCards = () => {
  const liveGurus = [
    {
      id: 1,
      name: 'Pandit Raj Kumar',
      specialty: 'Vedic Astrology',
      experience: '15+ Years',
      rating: 4.9,
      reviews: 2340,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      price: '₹50/min',
      languages: ['Hindi', 'English'],
      isOnline: true,
      consultations: 5420,
    },
    {
      id: 2,
      name: 'Acharya Priya Sharma',
      specialty: 'Numerology Expert',
      experience: '12+ Years',
      rating: 4.8,
      reviews: 1890,
      image: 'data:image/jpeg;base64,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',
      price: '₹45/min',
      languages: ['Hindi', 'English', 'Bengali'],
      isOnline: true,
      consultations: 3240,
    },
    {
      id: 3,
      name: 'Guru Vikash Pandit',
      specialty: 'Palm Reading',
      experience: '20+ Years',
      rating: 4.9,
      reviews: 3120,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      price: '₹60/min',
      languages: ['Hindi', 'English', 'Marathi'],
      isOnline: true,
      consultations: 6780,
    },
    {
      id: 4,
      name: 'Pandit Anand Joshi',
      specialty: 'Tarot Reading',
      experience: '8+ Years',
      rating: 4.7,
      reviews: 1560,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      price: '₹40/min',
      languages: ['Hindi', 'English'],
      isOnline: true,
      consultations: 2890,
    },
    {
      id: 5,
      name: 'Acharya Sunita Devi',
      specialty: 'Horoscope Analysis',
      experience: '18+ Years',
      rating: 4.9,
      reviews: 2980,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      price: '₹55/min',
      languages: ['Hindi', 'English', 'Gujarati'],
      isOnline: true,
      consultations: 5120,
    },
    {
      id: 6,
      name: 'Guru Mahesh Tripathi',
      specialty: 'Gemology & Vastu',
      experience: '25+ Years',
      rating: 5.0,
      reviews: 4560,
      image: 'data:image/jpeg;base64,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',
      price: '₹70/min',
      languages: ['Hindi', 'English', 'Sanskrit'],
      isOnline: true,
      consultations: 8760,
    },
  ];

  // Duplicate the array for infinite scroll effect
  const infiniteGurus = [...liveGurus, ...liveGurus];

  return (
    <section className="live-gurus-section section-padding bg-light-gray">
      <div className="container-custom">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Live Guru Consultations</h2>
          <p className="section-subtitle">
            Connect instantly with our expert astrologers who are available right now
          </p>
        </div>

        <div className="scrolling-container" data-aos="fade-up" data-aos-delay="300">
          <div className="guru-cards-track">
            {infiniteGurus.map((guru, index) => (
              <div key={`${guru.id}-${index}`} className="live-guru-card">
                <div className="card-header">
                  <div className="guru-image-wrapper">
                    <img src={guru.image} alt={guru.name} className="guru-image" />
                    <div className="online-indicator"></div>
                  </div>
                  <div className="guru-rating">
                    <FaStar className="star-icon" />
                    <span>{guru.rating}</span>
                    <span className="reviews">({guru.reviews})</span>
                  </div>
                </div>

                <div className="card-content">
                  <h4 className="guru-name">{guru.name}</h4>
                  <p className="guru-specialty">{guru.specialty}</p>
                  <p className="guru-experience">{guru.experience} Experience</p>
                  
                  <div className="guru-stats">
                    <span className="consultations">{guru.consultations}+ consultations</span>
                    <span className="languages">{guru.languages.join(', ')}</span>
                  </div>

                  <div className="pricing">
                    <span className="price">{guru.price}</span>
                    <span className="price-label">per minute</span>
                  </div>
                </div>

                <div className="card-actions">
                  <button className="action-btn call-btn">
                    <FaPhone />
                    Call
                  </button>
                  <button className="action-btn video-btn">
                    <FaVideo />
                    Video
                  </button>
                  <button className="action-btn chat-btn">
                    <FaComments />
                    Chat
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .live-gurus-section {
          position: relative;
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .live-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 20px auto 40px;
          padding: 12px 24px;
          background: var(--primary-black);
          color: var(--white);
          border-radius: 25px;
          font-weight: 600;
          width: fit-content;
          animation: pulse 2s infinite;
        }

        .live-icon {
          color: var(--accent-gold);
          font-size: 1.2rem;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .scrolling-container {
          overflow: hidden;
          mask: linear-gradient(90deg, 
            transparent, 
            white 10%, 
            white 90%, 
            transparent
          );
        }

        .guru-cards-track {
          display: flex;
          gap: 20px;
          animation: scroll 30s linear infinite;
          width: fit-content;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .guru-cards-track:hover {
          animation-play-state: paused;
        }

        .live-guru-card {
          background: var(--white);
          border-radius: 15px;
          padding: 20px;
          width: 300px;
          height: 320px;
          flex-shrink: 0;
          box-shadow: 0 8px 25px var(--shadow-light);
          transition: all 0.3s ease;
          border: 2px solid transparent;
          display: flex;
          flex-direction: column;
        }

        .live-guru-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px var(--shadow-medium);
          border-color: var(--accent-gold);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 15px;
        }

        .guru-image-wrapper {
          position: relative;
        }

        .guru-image {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--accent-gold);
        }

        .online-indicator {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 16px;
          height: 16px;
          background: #00ff00;
          border-radius: 50%;
          border: 2px solid var(--white);
          animation: blink 2s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .guru-rating {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.85rem;
        }

        .star-icon {
          color: var(--accent-gold);
        }

        .reviews {
          color: var(--primary-gray);
          font-size: 0.8rem;
        }

        .card-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-bottom: 15px;
        }

        .guru-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--primary-black);
          margin: 0 0 4px 0;
          line-height: 1.3;
        }

        .guru-specialty {
          color: var(--primary-gray);
          font-size: 0.85rem;
          margin: 0 0 4px 0;
          line-height: 1.2;
        }

        .guru-experience {
          color: var(--accent-gold);
          font-size: 0.8rem;
          font-weight: 500;
          margin: 0 0 8px 0;
        }

        .guru-stats {
          margin: 8px 0;
          flex: 1;
        }

        .consultations, .languages {
          display: block;
          font-size: 0.75rem;
          color: var(--primary-gray);
          margin-bottom: 2px;
          line-height: 1.3;
        }

        .pricing {
          display: flex;
          align-items: baseline;
          gap: 5px;
          margin: 8px 0;
        }

        .price {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--primary-black);
        }

        .price-label {
          font-size: 0.75rem;
          color: var(--primary-gray);
        }

        .card-actions {
          display: flex;
          gap: 6px;
          margin-top: auto;
        }

        .action-btn {
          flex: 1;
          padding: 8px 6px;
          border: none;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3px;
        }

        .call-btn {
          background: #22c55e;
          color: white;
        }

        .call-btn:hover {
          background: #16a34a;
        }

        .video-btn {
          background: #3b82f6;
          color: white;
        }

        .video-btn:hover {
          background: #2563eb;
        }

        .chat-btn {
          background: var(--primary-gray);
          color: white;
        }

        .chat-btn:hover {
          background: var(--secondary-black);
        }

        @media (max-width: 768px) {
          .guru-cards-track {
            animation-duration: 20s;
          }

          .live-guru-card {
            width: 280px;
            height: 300px;
          }

          .action-btn {
            font-size: 0.7rem;
            padding: 6px 4px;
          }
        }
      `}</style>
    </section>
  );
};

export default LiveGuruCards;
