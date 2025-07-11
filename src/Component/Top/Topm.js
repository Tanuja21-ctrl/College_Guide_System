import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';  // ✅ Import useNavigate
import axios from 'axios';
import './Top.css';

const Topm = () => {
  const [colleges, setColleges] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();  // ✅ Initialize useNavigate()

  useEffect(() => {
    axios.get('http://localhost:8000/getdata/college')
      .then(response => {
        // Filter colleges to display only Mumbai MCA colleges
        const mumbaiColleges = response.data.filter(college =>
          college.location.includes('Mumbai')
        );
        setColleges(mumbaiColleges);
      })
      .catch(error => console.error('Error fetching colleges:', error));
  }, []);

  const initialColleges = colleges.slice(0, 4);
  const moreColleges = colleges.slice(4);

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">Top Colleges in Mumbai</h4>
        {!showMore && colleges.length > 4 && (
          <button
            className="btn btn-outline-warning btn-sm"
            onClick={() => setShowMore(true)}
          >
            Explore more →
          </button>
        )}
      </div>

      <Row className="g-3">
        {(showMore ? colleges : initialColleges).map((college) => (
          <Col xs={12} sm={6} md={4} lg={3} key={college?._id || Math.random()}>
            <Card className="shadow-sm">
              <Card.Img
                variant="top"
                src={college.image}
                alt={college.collegename}
                style={{ height: '160px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title className="fs-6 fw-bold mb-1" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {college.collegename}
                </Card.Title>
                <Card.Text className="text-muted mb-1" style={{ fontSize: '0.85rem' }}>
                  {college.category}
                </Card.Text>
                <Card.Text className="text-muted mb-3" style={{ fontSize: '0.85rem' }}>
                  <FaMapMarkerAlt className="me-2 text-secondary" />
                  {college.location}
                </Card.Text>
                <Button
                  variant="warning"
                  size="sm"
                  className="w-50"
                  onClick={() => college?._id && navigate(`/college/${college._id}`)}  // ✅ Navigate to details page
                >
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

export default Topm;
