import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Row, Col, Container, Spinner, Alert } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

const Top = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios
      .get("http://localhost:8000/getdata/college")
      .then((response) => {
        if (Array.isArray(response.data)) {
          const puneColleges = response.data.filter(college => 
            college.location?.toLowerCase().includes("pune")
          );
          setColleges(puneColleges);
        } else {
          setError("Invalid data format received");
        }
      })
      .catch((error) => {
        setError(error.message || "Failed to load data");
      })
      .finally(() => setLoading(false));
  }, []);

  const initialColleges = colleges.slice(0, 4);

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">Top Colleges in Pune</h4>
        {!showMore && colleges.length > 4 && (
          <button className="btn btn-outline-warning btn-sm" onClick={() => setShowMore(true)}>
            Explore more →
          </button>
        )}
      </div>

      {loading && <Spinner animation="border" variant="warning" className="d-block mx-auto" />}
      {error && <Alert variant="danger">{error}</Alert>}

      <Row className="g-3">
        {(showMore ? colleges : initialColleges).map((college) => (
          <Col xs={12} sm={6} md={4} lg={3} key={college?.id || Math.random()}>
            <Card className="shadow-sm">
              <Card.Img
                variant="top"
                src={college.image}
                alt={college.collegename}
                style={{ height: "160px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="fs-6 fw-bold mb-1" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {college.collegename}
                </Card.Title>
                <Card.Text className="text-muted mb-1" style={{ fontSize: "0.85rem" }}>
                  {college.category}
                </Card.Text>
                <Card.Text className="text-muted mb-3" style={{ fontSize: "0.85rem" }}>
                  <FaMapMarkerAlt className="me-2 text-secondary" />
                  {college.location}
                </Card.Text>
                <Button
  variant="warning"
  size="sm"
  className="w-50"
  onClick={() => college?._id && navigate(`/college/${college._id}`)}

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

export default Top;
