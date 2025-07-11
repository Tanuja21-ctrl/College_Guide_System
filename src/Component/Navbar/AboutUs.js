import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaRocket, FaLightbulb, FaHeart } from "react-icons/fa";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-wrapper py-5">

      <Container>
        <div className="text-center mb-4">
          <h2 className="text-primary text-center mt-4">Your Future Starts Here</h2>
          <h5 className="text-danger fw-bold">WHO WE ARE</h5>
          <p className="about-subtext">
            Explore various colleges, compare courses, and make the right choice for your career.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          <Col md={4}>
            <Card className="about-card-custom text-center p-3">
              <div className="about-icon mb-3 text-danger">
                <FaRocket size={30} />
              </div>
              <h5 className="fw-semibold">Our Mission</h5>
              <p className="about-description">
                EduGuide aims to provide students with authentic and real-time college information,
                helping them make informed career choices.
              </p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="about-card-custom text-center p-3">
              <div className="about-icon mb-3 text-warning">
                <FaLightbulb size={30} />
              </div>
              <h5 className="fw-semibold">Our Vision</h5>
              <p className="about-description">
                To be the most trusted platform for college insights, guiding students towards
                successful careers and the best education opportunities.
              </p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="about-card-custom text-center p-3">
              <div className="about-icon mb-3 text-success">
                <FaHeart size={30} />
              </div>
              <h5 className="fw-semibold">Why Choose Us?</h5>
              <p className="about-description">
                Trusted by students across India, EduGuide ensures clarity, accuracy, and support
                in every educational step you take.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
