import React from "react";
import { useParams } from "react-router-dom";
import { Container, Card, ListGroup, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CollegeDetails.css";

const collegeData = [
  {
    id: "coep-pune",
    name: "College of Engineering Pune (COEP)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgo26QMBi91KwFEbAnMEPtKQ4nmpXQO6TBDw&s",
    location: "Pune, Maharashtra",
    ranking: "#1 in Maharashtra for Engineering",
    courses: ["B.Tech", "M.Tech", "Ph.D", "MBA"],
    placements: "Highest Package: ₹39 LPA | Average: ₹10 LPA",
    about: "COEP Pune is one of the oldest engineering colleges in India, offering top-class education with industry-driven curriculum and research facilities. It has strong industry connections and provides exposure to innovation and research.",
    reviews: "Rated 4.8/5 by students for academics, faculty, and placements.",
    website: "https://www.coep.org.in",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9413628683145!2d73.85452447528534!3d18.52898468256983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0651e85a7eb%3A0x8101c65a2db5fa78!2sCollege%20Of%20Engineering%2C%20Pune!5e0!3m2!1sen!2sin!4v1709881726718!5m2!1sen!2sin"
  }
];

const CollegeDetails = () => {
  const { collegeId } = useParams();
  const college = collegeData.find((c) => c.id === collegeId);

  if (!college) {
    return <h2 className="text-center mt-5">College Not Found</h2>;
  }

  return (
    <Container className="college-details-container my-5">
      <Row className="g-4">
        <Col md={6}>
          <Card className="shadow college-card-custom border-0">
            <Card.Img variant="top" src={college.image} className="college-img-custom rounded" />
            <Card.Body>
              <Card.Title className="text-primary fs-3">{college.name}</Card.Title>
              <Card.Text className="text-muted">{college.about}</Card.Text>
              <ListGroup variant="flush" className="mt-3">
                <ListGroup.Item><strong>📍 Location:</strong> {college.location}</ListGroup.Item>
                <ListGroup.Item><strong>🏆 Ranking:</strong> {college.ranking}</ListGroup.Item>
                <ListGroup.Item><strong>🎓 Courses:</strong> {college.courses.join(", ")}</ListGroup.Item>
                <ListGroup.Item><strong>💼 Placements:</strong> {college.placements}</ListGroup.Item>
                <ListGroup.Item><strong>⭐ Reviews:</strong> {college.reviews}</ListGroup.Item>
              </ListGroup>
              <div className="d-flex justify-content-between mt-4">
                <Button variant="success" onClick={() => window.open(college.website, "_blank")}>
                  Apply Now
                </Button>
                <Link to="/" className="btn btn-outline-secondary">← Back to Home</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <div className="map-section">
            <h4 className="mb-3 fw-bold text-dark">📌 College Location</h4>
            <iframe
              src={college.mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: "0", borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              title={`${college.name} Location Map`}
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CollegeDetails;
