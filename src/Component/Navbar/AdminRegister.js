import React, { useState } from "react";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import { FaUser, FaEnvelope, FaLock, FaUniversity, FaPhone } from "react-icons/fa";
import axios from "axios";

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    collegeName: "",
    adminName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/api/admin/register", formData);
      setSuccess(response.data.message || "Registration successful!");
      setFormData({ collegeName: "", adminName: "", email: "", phone: "", password: "", confirmPassword: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="shadow-lg p-4 rounded w-100" style={{ maxWidth: "500px" }}>
        <h3 className="text-center fw-bold mb-3">College Admin Registration</h3>

        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label><FaUniversity className="me-1 text-primary" /> College Name</Form.Label>
            <Form.Control
              type="text"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><FaUser className="me-1 text-success" /> Admin Name</Form.Label>
            <Form.Control
              type="text"
              name="adminName"
              value={formData.adminName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><FaEnvelope className="me-1 text-danger" /> Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><FaPhone className="me-1 text-info" /> Phone Number</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><FaLock className="me-1 text-warning" /> Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><FaLock className="me-1 text-warning" /> Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </Button>
        </Form>

        <p className="text-center mt-3">
          Already have an account? <a href="/admin/login">Login</a>
        </p>
      </Card>
    </Container>
  );
};

export default AdminRegister;
