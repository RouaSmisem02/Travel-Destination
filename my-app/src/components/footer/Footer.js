import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>Follow us on social media!</p>
      <div className="social-links">
        <a href="https://www.facebook.com/yourpage"><i className="fab fa-facebook"></i></a>
        <a href="https://www.instagram.com/yourpage"><i className="fab fa-instagram"></i></a>
        <a href="https://twitter.com/yourpage"><i className="fab fa-twitter"></i></a>
        <a href="https://www.linkedin.com/company/yourpage"><i className="fab fa-linkedin"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
