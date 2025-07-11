import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../Navbar/Admin.css';

const Admin = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form reload
    // You can add authentication logic here
    navigate("/adminlayout"); // Navigate to AdminLayout.js page
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="p-4 shadow bg-white rounded" style={{ width: "360px" }}>
        <h3 className="text-center mb-4">Admin Sign In</h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control type="email" placeholder="Email address" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>

          <Row className="mb-3">
            <Col xs={6} className="d-flex align-items-center">
              <Form.Check type="checkbox" label="Remember me" />
            </Col>
            <Col xs={6} className="text-end">
              <a href="#" style={{ fontSize: "0.9rem" }}>Forgot password?</a>
            </Col>
          </Row>

          <Button variant="primary" type="submit" className="w-100 fw-bold">
            SIGN IN
          </Button>

          <div className="text-center mt-3" style={{ fontSize: "0.9rem" }}>
            Not a member?  
            <Link to="/adminregister" className="fw-bold text-decoration-none ms-1">
              Register
            </Link>
            <p className="mt-2 mb-1">or sign up with:</p>
          </div>

          <div className="d-flex justify-content-center gap-3">
            <FaFacebookF style={{ cursor: "pointer" }} />
            <FaGoogle style={{ cursor: "pointer" }} />
            <FaTwitter style={{ cursor: "pointer" }} />
            <FaGithub style={{ cursor: "pointer" }} />
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Admin;
