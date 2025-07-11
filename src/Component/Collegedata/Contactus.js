import React from "react";
import "./Contactus.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contactus = () => {
  return (
    <div className="contact-container">
      {/* Contact Section Wrapper */}
      <div className="contact-grid">
        {/* Contact Form Section */}
        <div className="contact-form">
          <h2 className="form-title">Get in Touch</h2>
          <form className="form">
            <input 
              type="text" 
              placeholder="Full Name" 
              required 
              className="input-field" 
            />
            <input 
              type="email" 
              placeholder="Email" 
              required 
              className="input-field" 
            />
            <input 
              type="text" 
              placeholder="Phone Number" 
              required 
              className="input-field" 
            />
            <textarea 
              placeholder="Your Query" 
              rows="4" 
              required 
              className="textarea-field"
            ></textarea>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="contact-info">
          <h2 className="info-title">Contact Information</h2>
          <p className="info-description">
            Have any questions regarding <strong>colleges, courses, or admissions?</strong> 
            Reach out to us!
          </p>

          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <span>Mumbai, Maharashtra, India</span>
          </div>

          <div className="info-item">
            <FaPhone className="icon" />
            <span>+91 98765 43210</span>
          </div>

          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>info@collegeguide.com</span>
          </div>

          {/* Google Map Embed */}
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4180313034464!2d72.82650931490147!3d19.136750987060167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7e8f2df3f47%3A0x5cf5b7b2e4494c93!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1614253025698!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: "0", borderRadius: "10px", marginTop: "10px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
