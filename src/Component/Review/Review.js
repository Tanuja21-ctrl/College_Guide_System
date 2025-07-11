import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "./Review.css";

const Review = () => {
  const reviews = [
    {
      name: "Adam Smith",
      role: "User of EducationGuide",
      text: "The EducationGuide website helped me a lot in selecting the best college. I found everything in one place!",
      rating: 4,
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Maria Wilson",
      role: "Student Explorer",
      text: "Easy to navigate, well-designed, and highly informative platform. Loved the user experience!",
      rating: 4,
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <div className="review-section">
      <Container className="text-center py-5">
        <h2 className="section-title">What our student say</h2>
        <p className="section-description">
          Hear from the people who benefited from our EducationGuide platform.
        </p>

        <Row className="justify-content-center mt-4 py-4">
          {reviews.map((review, index) => (
            <Col key={index} md={6} lg={5} className="mb-4">
              <Card className="review-card">
                <div className="review-img-wrapper">
                  <img src={review.img} alt={review.name} className="review-img" />
                </div>
                <Card.Body>
                  <Card.Title className="review-name">{review.name}</Card.Title>
                  <Card.Subtitle className="review-role mb-2">{review.role}</Card.Subtitle>
                  <Card.Text className="review-text">{review.text}</Card.Text>
                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < review.rating ? "star-filled" : "star-empty"}
                      />
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Button variant="outline-secondary" className="mt-4">
          View all Testimonials
        </Button>
      </Container>
    </div>
  );
};

export default Review;
