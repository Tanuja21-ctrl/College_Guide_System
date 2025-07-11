import React from "react";
import { Container, Row, Col, Form, Button, ProgressBar, InputGroup } from "react-bootstrap";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaVenusMars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const YourProfile = () => {
  return (
    <Container className="mt-4">
      <h3>Your Profile</h3>
      <ProgressBar now={20} className="mb-4" />

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>What Currently Describes You Best?</Form.Label>
            <InputGroup>
              <InputGroup.Text><FaUser /></InputGroup.Text>
              <Form.Control type="text" placeholder="Interested in Indian Colleges" />
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>What Describes You The Best?</Form.Label>
            <InputGroup>
              <InputGroup.Text><FaUser /></InputGroup.Text>
              <Form.Control type="text" placeholder="Looking for Admission (Aspirant)" />
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <InputGroup>
              <InputGroup.Text><FaUser /></InputGroup.Text>
              <Form.Control type="text" placeholder="Tanuja Bhosale" />
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <InputGroup.Text><FaEnvelope /></InputGroup.Text>
              <Form.Control type="email" placeholder="tanujabhosale985@gmail.com" />
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Mobile Number</Form.Label>
            <InputGroup>
              <InputGroup.Text>+91</InputGroup.Text>
              <Form.Control type="text" placeholder="9359409242" />
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>
            <InputGroup>
              <InputGroup.Text><FaVenusMars /></InputGroup.Text>
              <Form.Control type="text" placeholder="Female" />
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>City You Live In</Form.Label>
            <InputGroup>
              <InputGroup.Text><FaMapMarkerAlt /></InputGroup.Text>
              <Form.Control type="text" placeholder="Pune" />
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Course Interested</Form.Label>
            <InputGroup>
              <InputGroup.Text><FaGraduationCap /></InputGroup.Text>
              <Form.Control type="text" placeholder="MCA - Masters (Computer Applications)" />
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>

      <Button variant="warning" className="w-30 mt-3">Save and Next</Button>
    </Container>
  );
};

export default YourProfile;