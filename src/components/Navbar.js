import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Import the CSS file

function Navbar() {
  const [open, setOpen] = useState(false); // State to toggle the navbar on mobile

  // Toggle function for the navbar on mobile
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Nguyễn Trần Tiến Anh</h1>
      <button 
        className="navbar-toggle" 
        onClick={handleToggle} // Toggle the state
        aria-label="Toggle Navigation"
      >
        &#9776; {/* Hamburger icon */}
      </button>

      <div className={`navbar-collapse ${open ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/" className="link">Trang chủ</Link></li>
          <li><Link to="/rent" className="link">Thuê xe</Link></li>
          <li><Link to="/inventory" className="link">Kho xe</Link></li>
          <li><Link to="/rental-history" className="link">Lịch sử thuê xe</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
