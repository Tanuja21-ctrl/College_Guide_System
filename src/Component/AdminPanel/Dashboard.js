import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUniversity, FaUserGraduate, FaBook, FaClipboardList, FaBell } from "react-icons/fa";

const Dashboard = () => {
  return (
    <Container fluid className="dashboard-container">
      <h3 className="mb-4">Admin Dashboard</h3>
      <Row className="g-4">
        <Col md={4}>
          <Card className="dashboard-card shadow">
            <Card.Body className="d-flex align-items-center">
              <FaUniversity className="dashboard-icon text-primary me-3" />
              <div>
                <h5>Colleges</h5>
                <h3>10</h3> {/* Static for now */}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="dashboard-card shadow">
            <Card.Body className="d-flex align-items-center">
              <FaUserGraduate className="dashboard-icon text-success me-3" />
              <div>
                <h5>Students</h5>
                <h3>250</h3> {/* Static for now */}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="dashboard-card shadow">
            <Card.Body className="d-flex align-items-center">
              <FaBook className="dashboard-icon text-warning me-3" />
              <div>
                <h5>Courses</h5>
                <h3>35</h3> {/* Static for now */}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
