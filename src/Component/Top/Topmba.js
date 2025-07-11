import React, { useState } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
import './Top.css';

const mbaColleges = [
  {
    name: 'Symbiosis Institute of Business Management (SIBM)',
    category: 'Management Studies',
    // type: 'Private University',
    location: 'Pune, Maharashtra',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUB_Ze285CwukLhv6fuQpMcIqFdYQYDCizNQ&s',
  },
  {
    name: 'Jamnalal Bajaj Institute of Management Studies (JBIMS)',
    category: 'MBA & Management',
    // type: 'Government Institute',
    location: 'Mumbai, Maharashtra',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQXB3fGFsh89YadzWiDCXrPu2afXPZFeG_Tw&s',
  },
  {
    name: 'Narsee Monjee Institute of Management Studies (NMIMS)',
    category: 'MBA & Business Management',
    // type: 'Deemed University',
    location: 'Mumbai, Maharashtra',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqs7qDUVHVrBz1bVf7d0WD8MMYbnwoGNfwJA&s',
  },
  {
    name: 'Balaji Institute of Modern Management (BIMM)',
    category: 'MBA & Business Administration',
    // type: 'Private Institute',
    location: 'Pune, Maharashtra',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRuSjCMmDFXMl1vWtuf3X1t0Y-5reeXvxH7w&s',
  },
  {
    name: 'Institute of Management Technology (IMT)',
    category: 'Management & Business Studies',
    // type: 'Private Institute',
    location: 'Navi Mumbai, Maharashtra',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-iTGirENjCvMJFALyVjVszHpscLmYCIC6DA&s',
  },
  {
    name: 'MIT School of Business (MITSOB)',
    category: 'Business Administration',
    // type: 'Private Autonomous Institute',
    location: 'Pune, Maharashtra',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZMYHgPeC_9swhNs4siAifJ7e6a_AbRxDQDQ&s',
  },
  {
    name: 'Chetana’s Institute of Management and Research',
    category: 'Management & Business Administration',
    // type: 'Private Institute',
    location: 'Mumbai, Maharashtra',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQplsynshiHdsohyT9OrYeVJOPcclu8wKPw&s',
  },
  {
    name: 'FLAME University',
    category: 'MBA & Leadership',
    // type: 'Private University',
    location: 'Pune, Maharashtra',
    image: 'https://images.shiksha.com/mediadata/images/1638526866phpMJ8Zlt.jpeg',
  },
];

const Topmba = () => {
  const [showMore, setShowMore] = useState(false);

  const initialColleges = mbaColleges.slice(0, 4);
  const moreColleges = mbaColleges.slice(4);

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">Top MBA Colleges in Pune & Mumbai</h4>
        {!showMore && (
          <button
            className="btn btn-outline-warning btn-sm"
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
                style={{ height: '160px', objectFit: 'cover', backgroundColor: '#E3F2FD' }}
              />
              <Card.Body>
                <Card.Title className="fs-6 fw-bold mb-1">{college.name}</Card.Title>
                <Card.Text className="text-muted mb-1" style={{ fontSize: '0.85rem' }}>
                  {college.category}
                </Card.Text>
                <Card.Text className="text-muted mb-1" style={{ fontSize: '0.85rem' }}>
                  {/* <FaBuilding className="me-2 text-secondary" /> */}
                  {college.type}
                </Card.Text>
                <Card.Text className="text-muted mb-3" style={{ fontSize: '0.85rem' }}>
                  <FaMapMarkerAlt className="me-2 text-secondary" />
                  {college.location}
                </Card.Text>
                <Button variant="warning" size="sm" className="w-50 d-flex justify-content-center">
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}

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
                    {/* <FaBuilding className="me-2 text-secondary" /> */}
                    {college.type}
                  </Card.Text>
                  <Card.Text className="text-muted mb-3" style={{ fontSize: '0.85rem' }}>
                    <FaMapMarkerAlt className="me-2 text-secondary" />
                    {college.location}
                  </Card.Text>
                  <div className="centered-btn">
                    <Button variant="warning" size="sm" className="rounded-view-btn">
                      View Details
                    </Button>
                  </div>


                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Topmba;
