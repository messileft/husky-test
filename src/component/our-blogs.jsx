import React from 'react';
import { FaCalendarAlt, FaUser, FaArrowRight, FaEye, FaHeart } from 'react-icons/fa';

const Ourblogs = () => {
  const blogs = [
    {
      id: 1,
      title: 'Understanding Your Birth Chart: A Complete Guide to Vedic Astrology',
      excerpt: 'Learn how to read and interpret your birth chart according to ancient Vedic principles. Discover the secrets hidden in planetary positions and their impact on your life.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop',
      author: 'Pandit Raj Kumar Shastri',
      date: 'March 15, 2024',
      category: 'Vedic Astrology',
      readTime: '8 min read',
      views: 2340,
      likes: 156,
    },
    {
      id: 2,
      title: 'The Power of Gemstones in Jyotish: How to Choose the Right Stone',
      excerpt: 'Explore the ancient science of gemology in Indian astrology. Learn which gemstones can enhance your planetary strengths and neutralize negative influences.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=250&fit=crop',
      author: 'Guru Mahesh Tripathi',
      date: 'March 12, 2024',
      category: 'Gemology',
      readTime: '6 min read',
      views: 1890,
      likes: 134,
    },
    {
      id: 3,
      title: 'Numerology Secrets: Finding Your Life Path Number',
      excerpt: 'Discover the hidden meanings behind numbers in your life. Calculate your life path number and understand how numerology can guide your important decisions.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop',
      author: 'Acharya Priya Sharma',
      date: 'March 10, 2024',
      category: 'Numerology',
      readTime: '5 min read',
      views: 1567,
      likes: 98,
    },
  ];

  return (
    <section className="blogs-section section-padding bg-light-gray">
      <div className="container-custom">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Our Jyotish Insights</h2>
          <p className="section-subtitle">
            Stay updated with the latest wisdom, tips, and insights from our expert astrologers
          </p>
        </div>

        <div className="blogs-grid">
          {blogs.map((blog, index) => (
            <article 
              key={blog.id}
              className="blog-card"
              data-aos="fade-up"
              data-aos-delay={100 + (index * 100)}
            >
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
                <div className="blog-category">{blog.category}</div>
              </div>

              <div className="blog-content">
                <div className="blog-meta">
                  <div className="meta-item">
                    <FaUser />
                    <span>{blog.author}</span>
                  </div>
                  <div className="meta-item">
                    <FaCalendarAlt />
                    <span>{blog.date}</span>
                  </div>
                </div>

                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>

                <div className="blog-stats">
                  <div className="stats-left">
                    <span className="read-time">{blog.readTime}</span>
                    <div className="engagement">
                      <span className="views">
                        <FaEye /> {blog.views}
                      </span>
                      <span className="likes">
                        <FaHeart /> {blog.likes}
                      </span>
                    </div>
                  </div>
                  
                  <button className="read-more-btn">
                    Read More
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="blogs-cta" data-aos="fade-up" data-aos-delay="800">
          <h3>Want to Learn More?</h3>
          <p>Subscribe to our newsletter for weekly Jyotish insights and exclusive content</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button className="btn-primary-custom">Subscribe</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .blogs-section {
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .blogs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .blog-card {
          background: var(--white);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 25px var(--shadow-light);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .blog-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px var(--shadow-medium);
          border-color: var(--accent-gold);
        }

        .blog-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .blog-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .blog-card:hover .blog-image img {
          transform: scale(1.05);
        }

        .blog-category {
          position: absolute;
          top: 15px;
          left: 15px;
          background: var(--primary-black);
          color: var(--white);
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .blog-content {
          padding: 25px;
        }

        .blog-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 15px;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--primary-gray);
        }

        .meta-item svg {
          font-size: 0.8rem;
        }

        .blog-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--primary-black);
          line-height: 1.4;
          margin: 0 0 12px 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blog-excerpt {
          font-size: 0.95rem;
          color: var(--primary-gray);
          line-height: 1.6;
          margin: 0 0 20px 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blog-stats {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 15px;
          border-top: 1px solid var(--medium-gray);
        }

        .stats-left {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .read-time {
          font-size: 0.8rem;
          color: var(--accent-gold);
          font-weight: 500;
        }

        .engagement {
          display: flex;
          gap: 15px;
        }

        .views, .likes {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8rem;
          color: var(--primary-gray);
        }

        .read-more-btn {
          background: var(--primary-black);
          color: var(--white);
          border: none;
          padding: 10px 20px;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .read-more-btn:hover {
          background: var(--secondary-black);
          transform: translateX(3px);
        }

        .blogs-cta {
          background: var(--white);
          padding: 40px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 8px 25px var(--shadow-light);
        }

        .blogs-cta h3 {
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--primary-black);
          margin: 0 0 10px 0;
        }

        .blogs-cta p {
          font-size: 1rem;
          color: var(--primary-gray);
          margin: 0 0 25px 0;
        }

        .newsletter-form {
          display: flex;
          max-width: 400px;
          margin: 0 auto;
          gap: 10px;
        }

        .newsletter-form input {
          flex: 1;
          padding: 12px 15px;
          border: 2px solid var(--medium-gray);
          border-radius: 10px;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .newsletter-form input:focus {
          border-color: var(--primary-black);
        }

        @media (max-width: 768px) {
          .blogs-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .blog-content {
            padding: 20px;
          }

          .blog-stats {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }

          .newsletter-form {
            flex-direction: column;
            max-width: 300px;
          }

          .blogs-cta {
            padding: 30px 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Ourblogs;
