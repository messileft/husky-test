import { FaUser } from 'react-icons/fa';
import { GiLotus } from 'react-icons/gi';

const Navbar = () => {
  return (
    <nav className="navbar-custom">
      <div className="container-custom">
        <div className="navbar-content">
          {/* Left: Logo */}
          <div className="navbar-brand">
            <GiLotus className="logo-icon" />
            <span className="brand-text">JyotishGuru</span>
          </div>

          {/* Center: Title */}
          <div className="navbar-center">
            <h5 className="navbar-title">
              Clear Your Doubt - Connect to Guru
            </h5>
          </div>

          {/* Right: Search, Login + User */}
          <div className="navbar-actions">

            <button className="btn-primary-custom">Login</button>
            <div className="user-avatar">
              <FaUser />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .navbar-custom {
          background: var(--white);
          box-shadow: 0 2px 20px var(--shadow-light);
          padding: 15px 0;
          position: sticky;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid var(--medium-gray);
        }

        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-icon {
          font-size: 2rem;
          color: var(--accent-gold);
        }

        .brand-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-black);
          font-family: 'Poppins', sans-serif;
        }

        .navbar-center {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .navbar-title {
          margin: 0;
          font-weight: 500;
          color: var(--primary-black);
          font-size: 1.1rem;
          text-align: center;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .search-icon {
          color: var(--primary-gray);
          font-size: 1.2rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .search-icon:hover {
          color: var(--primary-black);
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--light-gray);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-gray);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .user-avatar:hover {
          background: var(--medium-gray);
          color: var(--primary-black);
        }

        @media (max-width: 768px) {
          .navbar-title {
            display: none;
          }
          
          .navbar-actions {
            gap: 15px;
          }
          
          .brand-text {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 480px) {
          .search-icon {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
