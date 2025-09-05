import React from 'react';
import './GuideToOurFeature.css'; // We'll create this CSS file

const GuideToOurFeature = () => {
  // Simulate data from API
  const gurus = [
    {
      id: 1,
      name: 'Pandit Rajesh Sharma',
      title: 'Vedic Astrology Master',
      expertise: ['Career Guidance', 'Marriage Compatibility', 'Muhurta'],
      rating: 5,
      experience: '25+ Years',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
    },
    {
      id: 2,
      name: 'Acharya Priya Patel',
      title: 'Nadi Jyotish Specialist',
      expertise: ['Life Predictions', 'Remedial Solutions', 'Health Astrology'],
      rating: 4.5,
      experience: '18+ Years',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
    },
    {
      id: 3,
      name: 'Dr. Vikram Joshi',
      title: 'Jyotish PhD & Researcher',
      expertise: ['Horoscope Analysis', 'Vastu Consultation', 'Planetary Remedies'],
      rating: 5,
      experience: '30+ Years',
      image: 'https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
    },
    {
      id: 4,
      name: 'Shrimati Meera Devi',
      title: 'Palmistry & Numerology Expert',
      expertise: ['Numerology', 'Palm Reading', 'Relationship Guidance'],
      rating: 5,
      experience: '22+ Years',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
    },
    {
      id: 5,
      name: 'Pandit Arun Deshpande',
      title: 'Kundli & Dasha Specialist',
      expertise: ['Birth Chart Analysis', 'Dasha Predictions', 'Financial Astrology'],
      rating: 4.5,
      experience: '20+ Years',
      image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
    },
  ];

  // Create duplicate cards for seamless infinite scrolling
  const guruCards = [...gurus, ...gurus];

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }
    
    return stars;
  };

  return (
    <div className="guide-container">
      <div className="vedic-symbol symbol-1">☥</div>
      <div className="vedic-symbol symbol-2">ॐ</div>
      
     
      
      <div className="carousel-container">
        <h2 className="carousel-title">Our Most Celebrated Gurus</h2>
        <div className="carousel">
          {guruCards.map((guru, index) => (
            <div className="guru-card" key={`${guru.id}-${index}`}>
              <div className="guru-image">
                <img src={guru.image} alt={guru.name} />
              </div>
              <h3 className="guru-name">{guru.name}</h3>
              <p className="guru-title">{guru.title}</p>
              <div className="expertise-container">
                {guru.expertise.map((skill, idx) => (
                  <span className="expertise-tag" key={idx}>{skill}</span>
                ))}
              </div>
              <div className="guru-rating">
                {renderStars(guru.rating)}
              </div>
              <div className="guru-experience">
                <i className="fas fa-gem"></i> {guru.experience} of Experience
              </div>
              <button className="consult-btn">Book Consultation</button>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default GuideToOurFeature;