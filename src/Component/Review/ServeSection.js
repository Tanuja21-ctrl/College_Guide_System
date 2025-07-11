// ServeSection.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ServeSection.css';

const ServeSection = () => {
  const stats = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
      count: "2000+",
      title: "Colleges"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3095/3095583.png",
      count: "500+",
      title: "Universities"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/727/727399.png",
      count: "7000+",
      title: "Students"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      count: "300+",
      title: "Users"
    }
  ];

  return (
    <div className="serve-section">
      <h4 className="text-center mb-4 serve-title">We Are Here To Guide You</h4>
      <Container>
        <Row className="justify-content-center">
          {stats.map((item, index) => (
            <Col key={index} xs={6} sm={6} md={3} className="mb-3">
              <Card className="text-center serve-card h-100">
                <Card.Img variant="top" src={item.icon} className="serve-icon mx-auto mt-3" />
                <Card.Body>
                  <Card.Title className="count-text small-text">{item.count}</Card.Title>
                  <Card.Text className="small-text">{item.title}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ServeSection;