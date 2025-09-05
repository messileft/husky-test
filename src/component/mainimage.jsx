import React from 'react';
import { FaStar, FaPlay } from 'react-icons/fa';
import { GiCrystalBall, GiSpellBook, GiMoon } from 'react-icons/gi';

const Mainimage = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop"
          alt="Jyotish Background"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container-custom">
        <div className="hero-content">
          <div className="hero-left" data-aos="fade-right">
            <div className="hero-icons">
              <GiCrystalBall className="floating-icon icon-1" />
              <GiSpellBook className="floating-icon icon-2" />
              <GiMoon className="floating-icon icon-3" />
            </div>
            
            <h1 className="hero-title">
              Discover Your Life's Path Through 
              <span className="accent-text"> Ancient Wisdom</span>
            </h1>
            
            <p className="hero-description">
              Experience the profound insights of Vedic astrology with our expert Jyotish gurus. 
              Get personalized readings, predictions, and guidance for your life's most important decisions.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Expert Gurus</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Available</span>
              </div>
            </div>
            
            <div className="hero-actions">
              <button className="btn-primary-custom hero-btn">
                Get Free Reading
              </button>
              <button className="btn-outline-custom hero-btn">
                <FaPlay className="play-icon" />
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className="hero-right" data-aos="fade-left" data-aos-delay="200">
            <div className="hero-card">
              <div className="card-header">
                <h3>Today's Prediction</h3>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
              </div>
              
              <div className="prediction-content">
                <p>"A favorable day for new beginnings. Jupiter's alignment brings opportunities in career and relationships."</p>
                
                <div className="guru-info">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
                    alt="Guru"
                    className="guru-avatar"
                  />
                  <div>
                    <h5>Pandit Raj Kumar</h5>
                    <span>Expert Astrologer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -2;
        }

        .hero-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, 
            rgba(26, 26, 26, 0.8) 0%, 
            rgba(26, 26, 26, 0.6) 50%, 
            rgba(212, 175, 55, 0.1) 100%);
          z-index: -1;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          padding: 100px 0;
        }

        .hero-left {
          position: relative;
        }

        .hero-icons {
          position: absolute;
          top: -50px;
          right: -20px;
          width: 200px;
          height: 200px;
        }

        .floating-icon {
          position: absolute;
          font-size: 2rem;
          color: var(--accent-gold);
          opacity: 0.6;
          animation: float 6s ease-in-out infinite;
        }

        .icon-1 {
          top: 0;
          left: 0;
          animation-delay: 0s;
        }

        .icon-2 {
          top: 50px;
          right: 0;
          animation-delay: 2s;
        }

        .icon-3 {
          bottom: 0;
          left: 50px;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          color: var(--white);
          margin-bottom: 20px;
        }

        .accent-text {
          color: var(--accent-gold);
        }

        .hero-description {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin-bottom: 40px;
          max-width: 500px;
        }

        .hero-stats {
          display: flex;
          gap: 40px;
          margin-bottom: 40px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent-gold);
        }

        .stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .hero-btn {
          padding: 15px 30px;
          font-size: 1rem;
        }

        .play-icon {
          margin-right: 8px;
        }

        .hero-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid var(--medium-gray);
        }

        .card-header h3 {
          margin: 0;
          color: var(--primary-black);
          font-weight: 600;
        }

        .stars {
          display: flex;
          gap: 2px;
        }

        .star {
          color: var(--accent-gold);
          font-size: 0.9rem;
        }

        .prediction-content p {
          font-style: italic;
          color: var(--primary-gray);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .guru-info {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .guru-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }

        .guru-info h5 {
          margin: 0;
          font-size: 1rem;
          color: var(--primary-black);
        }

        .guru-info span {
          font-size: 0.85rem;
          color: var(--primary-gray);
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
            padding: 80px 0;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-stats {
            justify-content: center;
            gap: 30px;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .hero-btn {
            width: 200px;
          }

          .hero-icons {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Mainimage;
