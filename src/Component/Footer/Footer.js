import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-top">
          {/* Logo & About */}
          <Col md={3} className="footer-about">
            <h5 className="footer-logo">College Guide</h5>
            <p>
              Your trusted source for college information, admission alerts, and course guidance. Find the best colleges in Maharashtra.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={3}>
            <h5>QUICK LINKS</h5>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Colleges</a></li>
              <li><a href="#">Admissions</a></li>
              <li><a href="#">Course Guidance</a></li>
            </ul>
          </Col>

          {/* Resources */}
          <Col md={3}>
            <h5>RESOURCES</h5>
            <ul className="footer-links">
              <li><a href="#">Scholarships</a></li>
              <li><a href="#">Entrance Exams</a></li>
              <li><a href="#">Student Reviews</a></li>
              <li><a href="#">Career Advice</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={3}>
            <h5>CONTACT US</h5>
            <p>Address: Pune, Maharashtra, India</p>
            <p>Phone: +91 98765 43210</p>
            <p>Email: support@collegeguide.com</p>
            <div className="social-icons">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
              <FaYoutube />
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2025 College Guide | All rights reserved</p>
        </div>

        {/* Scroll to Top Button */}
        <div className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <FaArrowUp />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
