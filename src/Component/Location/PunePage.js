import React, { useState } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

const allColleges = [
  {
    name: 'MIT World Peace University',
    category: 'Engineering & Management',
    type: 'Private College',
    location: 'Pune, Maharashtra',
    image: 'https://images.indianexpress.com/2022/09/pune-university.jpg',
    
  },
  {
    name: 'Symbiosis Institute ',
    category: 'Engineering & Technology',
    type: 'Deemed University',
    location: 'Pune, Maharashtra',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHy_Pji7BnjF63yj-jjMV1Hctzu7FVsE-Q1A&s',
   
  },
  {
    name: 'Bharati Vidyapeeth University',
    category: 'Multidisciplinary Education',
    type: 'Deemed University',
    location: 'Pune, Maharashtra',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvdUvVQahE3DhFExCOLG2UZYj2zTxrN2YfLw&s',
    
  },
  {
    name: 'Fergusson College',
    category: 'Science & Arts',
    type: 'Autonomous College',
    location: 'Pune, Maharashtra',
    image: 'https://images.indianexpress.com/2023/09/01ah01-fergussan-college-amphi-theatre-4-logo.png',
    
  },
  {
    name: 'COEP Technological University',
    category: 'Engineering',
    type: 'Public University',
    location: 'Pune, Maharashtra',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhIja5uy8T4N0Cs7-LVOfQ7EK4U_qyVESJ2Q&s',
    
  },
  // More colleges
  {
    name: 'Dr. D.Y. Patil Institute ',
    category: 'Engineering & Tech',
    type: 'Private College',
    location: 'Pune, Maharashtra',
    image: 'https://engg.dypvp.edu.in/mechanical-engineering/images/engg-building.png',
    
  },
  {
    name: 'Indira College ',
    category: 'Engineering & Management',
    type: 'Private College',
    location: 'Pune, Maharashtra',
    image: 'https://icacs.ac.in/assets/images/igi.jpg',
   
  },
  {
    name: 'Vishwakarma Institute ',
    category: 'Engineering',
    type: 'Private College',
    location: 'Pune, Maharashtra',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5fVPbNVEC4SZIoz9wfQi2S13uasu_kpMH6Q&s',
    
  },
];

const PunePage = () => {
  const [showMore, setShowMore] = useState(false);

  const initialColleges = allColleges.slice(0, 4);
  const moreColleges = allColleges.slice(4);

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">Top Colleges in Pune</h4>
        {!showMore && (
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => setShowMore(true)}
          >
            Explore more →
          </button>
        )}
      </div>

      <Row className="g-3">
        {initialColleges.map((college, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <Card style={{ backgroundColor: college.bg, width: '100%' }}>
              <Card.Img
                variant="top"
                src={college.image}
                alt={college.name}
                style={{ height: '160px', objectFit: 'cover', backgroundColor:'#FCE4EC'}}
              />
              <Card.Body>
                <Card.Title className="fs-6 fw-bold mb-1">{college.name}</Card.Title>
                <Card.Text className="text-muted mb-1" style={{ fontSize: '0.85rem' }}>
                  {college.category}
                </Card.Text>
                <Card.Text className="text-muted mb-1" style={{ fontSize: '0.85rem' }}>
                  <FaBuilding className="me-2 text-secondary" />
                  {college.type}
                </Card.Text>
                <Card.Text className="text-muted mb-3" style={{ fontSize: '0.85rem' }}>
                  <FaMapMarkerAlt className="me-2 text-secondary" />
                  {college.location}
                </Card.Text>
                <Button variant="primary" size="sm" className="w-100">
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}

        {/* Show more colleges if button is clicked */}
        {showMore &&
          moreColleges.map((college, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index + 100}>
              <Card style={{ backgroundColor: college.bg, width: '100%' }}>
                <Card.Img
                  variant="top"
                  src={college.image}
                  alt={college.name}
                  style={{ height: '160px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title className="fs-6 fw-bold mb-1">{college.name}</Card.Title>
                  <Card.Text className="text-muted mb-1" style={{ fontSize: '0.85rem' }}>
                    {college.category}
                  </Card.Text>
                  <Card.Text className="text-muted mb-1" style={{ fontSize: '0.85rem' }}>
                    <FaBuilding className="me-2 text-secondary" />
                    {college.type}
                  </Card.Text>
                  <Card.Text className="text-muted mb-3" style={{ fontSize: '0.85rem' }}>
                    <FaMapMarkerAlt className="me-2 text-secondary" />
                    {college.location}
                  </Card.Text>
                  <Button variant="primary" size="sm" className="w-100">
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default PunePage;
