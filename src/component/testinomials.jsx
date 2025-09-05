import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testinomials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      text: 'Pandit Raj Kumar ji\'s guidance changed my life completely. His predictions about my career were incredibly accurate, and the remedies he suggested worked like magic. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b890?w=100&h=100&fit=crop&crop=face',
      service: 'Career Guidance',
      date: '2 weeks ago',
    },
    {
      id: 2,
      name: 'Rajesh Patel',
      location: 'Delhi, NCR',
      rating: 5,
      text: 'Amazing experience with Guru Vikash Pandit for palmistry. He accurately predicted my business success and marriage timing. His knowledge of ancient Indian astrology is profound.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      service: 'Palm Reading',
      date: '1 month ago',
    },
    {
      id: 3,
      name: 'Anita Gupta',
      location: 'Pune, Maharashtra',
      rating: 5,
      text: 'Mata Saraswati Devi\'s horoscope analysis was spot on. She helped me understand my life\'s purpose and gave me clarity about my relationships. Truly blessed to have consulted her.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      service: 'Horoscope Analysis',
      date: '3 weeks ago',
    },
  ];

  return (
    <section className="testimonials-section section-padding bg-white">
      <div className="container-custom">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Discover how our expert guidance has transformed lives and brought clarity to thousands of people
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay={100 + (index * 100)}
            >
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>

              <div className="testimonial-content">
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>

                <p className="testimonial-text">
                  "{testimonial.text}"
                </p>

                <div className="service-tag">
                  {testimonial.service}
                </div>
              </div>

              <div className="client-info">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="client-image"
                />
                <div className="client-details">
                  <h4 className="client-name">{testimonial.name}</h4>
                  <p className="client-location">{testimonial.location}</p>
                  <span className="testimonial-date">{testimonial.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-stats" data-aos="fade-up" data-aos-delay="800">
          <div className="stat-item">
            <span className="stat-number">10,000+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.9/5</span>
            <span className="stat-label">Average Rating</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">95%</span>
            <span className="stat-label">Satisfied Customers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Expert Gurus</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .testimonial-card {
          background: var(--white);
          border: 2px solid var(--light-gray);
          border-radius: 20px;
          padding: 30px;
          position: relative;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px var(--shadow-medium);
          border-color: var(--accent-gold);
        }

        .quote-icon {
          position: absolute;
          top: 20px;
          right: 25px;
          font-size: 2rem;
          color: var(--light-gray);
          opacity: 0.5;
        }

        .testimonial-content {
          margin-bottom: 25px;
        }

        .rating {
          display: flex;
          gap: 3px;
          margin-bottom: 15px;
        }

        .star {
          color: var(--accent-gold);
          font-size: 0.9rem;
        }

        .testimonial-text {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--primary-black);
          margin: 0 0 20px 0;
          font-style: italic;
        }

        .service-tag {
          display: inline-block;
          background: var(--primary-black);
          color: var(--white);
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .client-info {
          display: flex;
          align-items: center;
          gap: 15px;
          padding-top: 20px;
          border-top: 1px solid var(--medium-gray);
        }

        .client-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--accent-gold);
        }

        .client-details {
          flex: 1;
        }

        .client-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--primary-black);
          margin: 0 0 3px 0;
        }

        .client-location {
          font-size: 0.85rem;
          color: var(--primary-gray);
          margin: 0 0 3px 0;
        }

        .testimonial-date {
          font-size: 0.75rem;
          color: var(--primary-gray);
          font-style: italic;
        }

        .testimonials-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          background: var(--light-gray);
          padding: 40px;
          border-radius: 20px;
          text-align: center;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary-black);
          line-height: 1;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--primary-gray);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .testimonial-card {
            padding: 25px;
          }

          .testimonials-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            padding: 30px;
          }

          .stat-number {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .testimonials-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Testinomials;
