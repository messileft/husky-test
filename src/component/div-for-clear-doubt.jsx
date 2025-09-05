import React, { useState } from 'react';
import { FaSearch, FaFilter, FaChevronDown } from 'react-icons/fa';

const ClearDoubt = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');
  const [selectedGrade, setSelectedGrade] = useState('All Grades');
  const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);
  const [showGradeDropdown, setShowGradeDropdown] = useState(false);

  const subjects = [
    'All Subjects', 'Vedic Astrology', 'Numerology', 'Palm Reading', 
    'Tarot Reading', 'Vastu Shastra', 'Gemology', 'Face Reading',
  ];

  const grades = [
    'All Grades', 'Beginner', 'Intermediate', 'Advanced', 'Expert',
  ];

  return (
    <section className="clear-doubt-section section-padding bg-white">
      <div className="container-custom">
        <div className="search-header" data-aos="fade-up">
          <h2 className="search-title">Clear Your Doubt - Connect to Guru</h2>
          <p className="search-subtitle">
            Find the perfect astrologer for your questions and get instant guidance
          </p>
        </div>

        <div className="search-container" data-aos="fade-up" data-aos-delay="200">
          <div className="search-box">
            <div className="search-input-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Ask your question or search for guidance..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="filters-wrapper">
              {/* Subject Filter */}
              <div className="filter-dropdown">
                <button 
                  className="filter-btn"
                  onClick={() => {
                    setShowSubjectDropdown(!showSubjectDropdown);
                    setShowGradeDropdown(false);
                  }}
                >
                  <FaFilter className="filter-icon" />
                  {selectedSubject}
                  <FaChevronDown className="chevron-icon" />
                </button>
                
                {showSubjectDropdown && (
                  <div className="dropdown-menu">
                    {subjects.map((subject) => (
                      <div
                        key={subject}
                        className={`dropdown-item ${selectedSubject === subject ? 'active' : ''}`}
                        onClick={() => {
                          setSelectedSubject(subject);
                          setShowSubjectDropdown(false);
                        }}
                      >
                        {subject}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Grade Filter */}
              <div className="filter-dropdown">
                <button 
                  className="filter-btn"
                  onClick={() => {
                    setShowGradeDropdown(!showGradeDropdown);
                    setShowSubjectDropdown(false);
                  }}
                >
                  <FaFilter className="filter-icon" />
                  {selectedGrade}
                  <FaChevronDown className="chevron-icon" />
                </button>
                
                {showGradeDropdown && (
                  <div className="dropdown-menu">
                    {grades.map((grade) => (
                      <div
                        key={grade}
                        className={`dropdown-item ${selectedGrade === grade ? 'active' : ''}`}
                        onClick={() => {
                          setSelectedGrade(grade);
                          setShowGradeDropdown(false);
                        }}
                      >
                        {grade}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button className="search-button">
              <FaSearch />
              Search
            </button>
          </div>
        </div>

        <div className="quick-suggestions" data-aos="fade-up" data-aos-delay="400">
          <span className="suggestions-label">Popular Questions:</span>
          <div className="suggestions-tags">
            <span className="suggestion-tag">Career Guidance</span>
            <span className="suggestion-tag">Marriage Compatibility</span>
            <span className="suggestion-tag">Health Predictions</span>
            <span className="suggestion-tag">Business Success</span>
            <span className="suggestion-tag">Lucky Numbers</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .clear-doubt-section {
          position: relative;
          border-bottom: 1px solid var(--medium-gray);
        }

        .search-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .search-title {
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--primary-black);
          margin-bottom: 15px;
        }

        .search-subtitle {
          font-size: 1.1rem;
          color: var(--primary-gray);
          max-width: 600px;
          margin: 0 auto;
        }

        .search-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 15px;
          background: var(--white);
          border: 2px solid var(--medium-gray);
          border-radius: 15px;
          padding: 10px;
          box-shadow: 0 8px 30px var(--shadow-light);
          transition: all 0.3s ease;
        }

        .search-box:focus-within {
          border-color: var(--primary-black);
          box-shadow: 0 12px 40px var(--shadow-medium);
        }

        .search-input-wrapper {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 15px;
          color: var(--primary-gray);
          font-size: 1.1rem;
        }

        .search-input {
          width: 100%;
          padding: 15px 15px 15px 45px;
          border: none;
          outline: none;
          font-size: 1rem;
          color: var(--primary-black);
          background: transparent;
        }

        .search-input::placeholder {
          color: var(--primary-gray);
        }

        .filters-wrapper {
          display: flex;
          gap: 10px;
        }

        .filter-dropdown {
          position: relative;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: var(--light-gray);
          border: none;
          border-radius: 10px;
          color: var(--primary-black);
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .filter-btn:hover {
          background: var(--medium-gray);
        }

        .filter-icon {
          font-size: 0.8rem;
        }

        .chevron-icon {
          font-size: 0.7rem;
          transition: transform 0.3s ease;
        }

        .filter-btn:hover .chevron-icon {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--white);
          border: 1px solid var(--medium-gray);
          border-radius: 10px;
          box-shadow: 0 8px 25px var(--shadow-light);
          z-index: 1000;
          overflow: hidden;
          margin-top: 5px;
        }

        .dropdown-item {
          padding: 12px 20px;
          cursor: pointer;
          transition: background 0.2s ease;
          font-size: 0.9rem;
        }

        .dropdown-item:hover {
          background: var(--light-gray);
        }

        .dropdown-item.active {
          background: var(--primary-black);
          color: var(--white);
        }

        .search-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 15px 25px;
          background: var(--primary-black);
          color: var(--white);
          border: none;
          border-radius: 10px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .search-button:hover {
          background: var(--secondary-black);
          transform: translateY(-2px);
        }

        .quick-suggestions {
          margin-top: 30px;
          text-align: center;
        }

        .suggestions-label {
          font-weight: 500;
          color: var(--primary-gray);
          margin-right: 15px;
        }

        .suggestions-tags {
          display: inline-flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }

        .suggestion-tag {
          padding: 8px 16px;
          background: var(--light-gray);
          color: var(--primary-black);
          border-radius: 20px;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .suggestion-tag:hover {
          background: var(--primary-black);
          color: var(--white);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .search-box {
            flex-direction: column;
            gap: 15px;
          }

          .search-input-wrapper {
            width: 100%;
          }

          .filters-wrapper {
            width: 100%;
            justify-content: space-between;
          }

          .filter-btn {
            flex: 1;
            justify-content: center;
          }

          .search-button {
            width: 100%;
            justify-content: center;
          }

          .suggestions-tags {
            margin-top: 15px;
          }

          .suggestions-label {
            display: block;
            margin-bottom: 15px;
            margin-right: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default ClearDoubt;
