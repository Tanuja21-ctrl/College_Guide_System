import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Service/CarrierGuidance.css'

const CareerGuidance = () => {
    return (
        <Container className="mt-4 fade-in">
            <h2 className="text-center slide-in">Career Guidance Section</h2>
            <Row className="mt-4">
                <Col md={6}>
                    <Card className="p-3 shadow-sm zoom-in">
                        <Card.Body>
                            <Card.Title>Motivational Videos</Card.Title>
                            <div className="mb-3">
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/Z0vvuTq3fWg" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div>
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/ZXsQAXx_ao0" frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="p-3 shadow-sm zoom-in">
                        <Card.Body>
                            <Card.Title>Top Counsellors' Advice</Card.Title>
                            <div className="bg-light p-2 rounded mb-2 fade-in">
                                <strong>Dr. Sharma:</strong> "Stay consistent and keep upgrading your skills."
                            </div>
                            <div className="bg-light p-2 rounded mb-2 fade-in">
                                <strong>Prof. Mehta:</strong> "Networking is key. Always seek guidance and mentorship."
                            </div>
                            <div className="bg-light p-2 rounded fade-in">
                                <strong>Ms. Roy:</strong> "Hard work and patience will always pay off in your career."
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={12}>
                    <Card className="p-3 shadow-sm zoom-in">
                        <Card.Body>
                            <Card.Title>Additional Guidance</Card.Title>
                            <p className="fade-in">Explore different career paths, gain real-world experience through internships, and never stop learning. The key to success is adaptability.</p>
                            <p className="fade-in">Consider taking online courses, attending workshops, and engaging in networking events to expand your opportunities.</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CareerGuidance;
