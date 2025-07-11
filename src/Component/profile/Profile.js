import React, { useState } from "react";
import { Container, Row, Col, Card, ListGroup, Button, Form, InputGroup, ProgressBar } from "react-bootstrap";
import { 
  FaUser, FaUniversity, FaCheckCircle, FaClock, FaCog, 
  FaEye, FaSignOutAlt, FaEdit, FaEnvelope, FaVenusMars, FaMapMarkerAlt, FaGraduationCap 
} from "react-icons/fa";
import "./Profile.css";

const YourProfile = () => (
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

const Profile = () => {
  const [activeSection, setActiveSection] = useState("YourProfile");
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <Container fluid className="profile-container">
      <Row>
        {/* Sidebar */}
        <Col md={3} className="sidebar p-3">
          <div className="profile-section text-center">
            <label htmlFor="profile-upload" className="profile-label">
              <img 
                src={profileImage || "https://via.placeholder.com/100"} 
                alt="Profile" 
                className="profile-icon"
              />
              <input
                type="file"
                id="profile-upload"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <Button variant="light" className="edit-btn">
                <FaEdit />
              </Button>
            </label>
            <h5 className="mt-2">Tanuja Bhosale</h5>
            <p className="text-muted">tanujabhosale985@gmail.com</p>
          </div>
          <ListGroup variant="flush" className="sidebar-menu">
            <ListGroup.Item action onClick={() => setActiveSection("YourProfile")}>
              <FaUser /> Your Profile
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => setActiveSection("AppliedColleges")}>
              <FaUniversity /> Applied Colleges
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => setActiveSection("Reviews")}>
              <FaCheckCircle /> Your Reviews
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => setActiveSection("CAF")}>
              <FaUniversity /> Applied CAF
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => setActiveSection("PendingApplications")}>
              <FaClock /> Pending Applications
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => setActiveSection("Settings")}>
              <FaCog /> Account Settings
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => setActiveSection("ProfileViews")}>
              <FaEye /> Profile Views
            </ListGroup.Item>
            <ListGroup.Item action className="logout">
              <FaSignOutAlt /> Logout
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Content Section */}
        <Col md={9} className="content p-4">
          {activeSection === "YourProfile" && <YourProfile />}
          {activeSection === "AppliedColleges" && <Card className="section-card"><h4>Applied Colleges</h4></Card>}
          {activeSection === "Reviews" && <Card className="section-card"><h4>Your Reviews</h4></Card>}
          {activeSection === "CAF" && <Card className="section-card"><h4>Applied CAF</h4></Card>}
          {activeSection === "PendingApplications" && <Card className="section-card"><h4>Pending Applications</h4></Card>}
          {activeSection === "Settings" && <Card className="section-card"><h4>Account Settings</h4></Card>}
          {activeSection === "ProfileViews" && <Card className="section-card"><h4>Profile Views</h4></Card>}
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
