import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
  FaArrowRight,
  FaHeart,
} from 'react-icons/fa';
import { GiLotus } from 'react-icons/gi';

const Footer = () => {
  const services = [
    'Vedic Astrology',
    'Numerology',
    'Palm Reading',
    'Tarot Reading',
    'Horoscope Analysis',
    'Gemology',
    'Vastu Shastra',
    'Spiritual Guidance',
  ];

  const quickLinks = [
    'About Us',
    'Our Gurus',
    'How It Works',
    'Pricing',
    'Blog',
    'FAQ',
    'Contact Us',
    'Privacy Policy',
  ];

  const contact = {
    phone: '+91 98765 43210',
    email: 'info@jyotishguru.com',
    address: '123 Spiritual Street, Varanasi, Uttar Pradesh 221001, India',
  };

  return (
    <footer className="footer-section">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="container-custom">
          <div className="newsletter-content" data-aos="fade-up">
            <div className="newsletter-text">
              <h3>Stay Connected with Ancient Wisdom</h3>
              <p>Get weekly insights, predictions, and spiritual guidance directly in your inbox</p>
            </div>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button className="subscribe-btn">
                <span>Subscribe</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="main-footer">
        <div className="container-custom">
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-column" data-aos="fade-up" data-aos-delay="100">
              <div className="footer-logo">
                <GiLotus className="logo-icon" />
                <span className="logo-text">JyotishGuru</span>
              </div>
              <p className="footer-description">
                Your trusted companion for spiritual guidance and astrological insights.
                Connect with verified expert gurus and discover your life's path through ancient wisdom.
              </p>

              <div className="social-links">
                <a href="#" className="social-link facebook"><FaFacebookF /></a>
                <a href="#" className="social-link twitter"><FaTwitter /></a>
                <a href="#" className="social-link instagram"><FaInstagram /></a>
                <a href="#" className="social-link youtube"><FaYoutube /></a>
                <a href="#" className="social-link linkedin"><FaLinkedin /></a>
              </div>
            </div>

            {/* Services */}
            <div className="footer-column" data-aos="fade-up" data-aos-delay="200">
              <h4 className="footer-title">Our Services</h4>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#">{service}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer-column" data-aos="fade-up" data-aos-delay="300">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-column" data-aos="fade-up" data-aos-delay="400">
              <h4 className="footer-title">Get in Touch</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span>{contact.phone}</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>{contact.email}</span>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>{contact.address}</span>
                </div>
              </div>

              <div className="contact-buttons">
                <a href="#" className="contact-btn whatsapp">
                  <FaWhatsapp />
                  WhatsApp
                </a>
                <a href="#" className="contact-btn telegram">
                  <FaTelegram />
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bottom-footer">
        <div className="container-custom">
          <div className="bottom-content">
            <div className="copyright">
              <p>© 2024 JyotishGuru. All rights reserved. Made with <FaHeart className="heart-icon" /> for spiritual seekers.</p>
            </div>
            <div className="footer-bottom-links">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Support</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-section {
          background: var(--primary-black);
          color: var(--white);
        }

        .newsletter-section {
          background: var(--secondary-black);
          padding: 60px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .newsletter-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .newsletter-text h3 {
          font-size: 1.8rem;
          font-weight: 600;
          margin: 0 0 8px 0;
          color: var(--white);
        }

        .newsletter-text p {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        .newsletter-form {
          display: flex;
          gap: 15px;
          min-width: 400px;
        }

        .newsletter-form input {
          flex: 1;
          padding: 15px 20px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.1);
          color: var(--white);
          font-size: 0.95rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .newsletter-form input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .newsletter-form input:focus {
          border-color: var(--accent-gold);
          background: rgba(255, 255, 255, 0.15);
        }

        .subscribe-btn {
          background: var(--accent-gold);
          color: var(--white);
          border: none;
          padding: 15px 25px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .subscribe-btn:hover {
          background: #b8941f;
          transform: translateY(-2px);
        }

        .main-footer {
          padding: 80px 0 40px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
        }

        .footer-column h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: var(--white);
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .logo-icon {
          font-size: 2.5rem;
          color: var(--accent-gold);
        }

        .logo-text {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--white);
        }

        .footer-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 25px;
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .social-link:hover {
          transform: translateY(-3px);
          border-color: var(--accent-gold);
          background: var(--accent-gold);
        }

        .footer-links {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 10px;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .footer-links a:hover {
          color: var(--accent-gold);
          transform: translateX(5px);
        }

        .contact-info {
          margin-bottom: 25px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 15px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .contact-icon {
          color: var(--accent-gold);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .contact-buttons {
          display: flex;
          gap: 10px;
        }

        .contact-btn {
          background: rgba(255, 255, 255, 0.1);
          color: var(--white);
          padding: 10px 15px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .contact-btn:hover {
          background: var(--accent-gold);
          border-color: var(--accent-gold);
          transform: translateY(-2px);
        }

        .bottom-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 25px 0;
        }

        .bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .heart-icon {
          color: #ff4757;
          margin: 0 3px;
          animation: heartbeat 2s infinite;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .footer-bottom-links {
          display: flex;
          gap: 25px;
        }

        .footer-bottom-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-bottom-links a:hover {
          color: var(--accent-gold);
        }

        @media (max-width: 768px) {
          .newsletter-content {
            flex-direction: column;
            text-align: center;
          }

          .newsletter-form {
            min-width: auto;
            width: 100%;
            max-width: 400px;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .bottom-content {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }

          .footer-bottom-links {
            flex-wrap: wrap;
            justify-content: center;
          }

          .contact-buttons {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
