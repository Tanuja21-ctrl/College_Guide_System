import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission reload
    navigate("/Profile"); // Redirect to Profile.js page
  };

  return (
    <div className="login-wrapper">
      <Row className="login-container">
        <Col md={6} className="login-left">
          <div className="logo-title">
            <h5 className="logo-text">EDUSTEP</h5>
          </div>
          <div className="astro-section">
            <h3>Welcome aboard my friend</h3>
            <p>Just a couple of clicks and we start</p>
            <div className="dots">
              <span className="dot active"></span>
              <span className="dot"></span>
            </div>
          </div>
        </Col>

        <Col md={6} className="login-right">
          <div className="login-form-section">
            <h4 className="text-center mb-4">Welcome</h4>
            <Form onSubmit={handleLogin}> {/* Attach handleLogin to Form */}
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type="email" placeholder="Email" className="input-field" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Control type="password" placeholder="Password" className="input-field" required />
              </Form.Group>
              <div className="text-end mb-3">
                <a href="#" className="forgot-link">Forgot password?</a>
              </div>
              <Button type="submit" className="login-btn w-100">Log in</Button>
              <div className="separator my-3 text-center">Or</div>
              <div className="social-login d-flex gap-2 justify-content-center">
                <Button variant="outline-primary" className="google-btn">
                  <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" className="social-icon" /> Google
                </Button>
                <Button variant="outline-warning" className="gitlab-btn">
                  <Link to="/admin" className="admin-link">
                    <FaUser /> Admin Login
                  </Link>
                </Button>
              </div>
              <p className="mt-4 text-center">
                Have no account yet? <Link to="/register" className="register-link">Registration</Link>
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
