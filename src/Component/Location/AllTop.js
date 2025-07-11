import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './AllTop.css';

const topLocations = [
  { city: 'Pune', colleges: '50+ Colleges' },
  { city: 'Mumbai', colleges: '60+ Colleges' },
  { city: 'Nagpur', colleges: '25+ Colleges' },
  { city: 'Nashik', colleges: '20+ Colleges' },
  { city: 'Aurangabad', colleges: '30+ Colleges' },
  { city: 'Solapur', colleges: '18+ Colleges' },
  { city: 'Kolhapur', colleges: '22+ Colleges' },
  { city: 'Amravati', colleges: '15+ Colleges' },
];

const AllTop = () => {
  return (
    <Container className="my-5 text-center">
      <h4 className="text-primary fw-bold mb-4">Top College Locations</h4>
      <Row className="g-3 justify-content-center">
        {topLocations.map((loc, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <Card className="location-card p-3 shadow-sm">
              <div className="icon-box mb-2">
                <FaMapMarkerAlt className="location-icon" />
              </div>
              <h6 className="fw-semibold">{loc.city}</h6>
              <p className="text-muted mb-0">{loc.colleges}</p>
            </Card>
          </Col>
        ))}
      </Row>
      <p className="mt-4">
        We have more locations listed.{' '}
        <span className="browse-all-link">Browse all</span>
      </p>
    </Container>
  );
};

export default AllTop;
