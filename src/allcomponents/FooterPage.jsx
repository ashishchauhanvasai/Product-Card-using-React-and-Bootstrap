import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const FooterPage = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p><span>Team & Ashish R Chauhan : &nbsp;</span>
            We are a leading platform for bike rentals, helping people explore the city easily and affordably.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: ashishchauhanvasai@gmail.com</p>
          <p>Phone: +91 8446586191</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 User Profiles Testing Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterPage;
