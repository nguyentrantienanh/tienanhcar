import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h2>TienAnhCar</h2>
          <p>
            Email: <a href="mailto:nttanh0412@gmail.com">nttanh0412@gmail.com</a><br />
            Phone: <a href="tel:0972364028">0972364028</a>
          </p>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <ul>
            <li><Link to="/" className="link">Trang chủ</Link></li>
            <li><Link to="/rent" className="link">Thuê xe</Link></li>
            <li><Link to="/inventory" className="link">Kho xe</Link></li>
            <li><Link to="/rental-history" className="link">Lịch sử thuê xe</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <p>&copy; 2024 Nguyễn Trần Tiến Anh. TienAnhCar.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
