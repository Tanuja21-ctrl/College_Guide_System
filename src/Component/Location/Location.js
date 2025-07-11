import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './PluginsAndLocations.css';

const plugins = [
  { name: 'Elementor', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Elementor_Logo.svg' },
  { name: 'Contact Form7', image: 'https://seeklogo.com/images/C/contact-form-7-logo-5086FE6F56-seeklogo.com.png' },
  { name: 'WP Rocket', image: 'https://www.wp-rocket.me/wp-content/themes/wp-rocket/assets/images/logo/wp-rocket.svg' },
  { name: 'WPML', image: 'https://cdn.shortpixel.ai/spai/q_glossy+w_1024+to_webp/https://www.elegantthemes.com/blog/wp-content/uploads/2018/10/wpml-featured-image.png' },
  { name: 'Yoast SEO', image: 'https://yoast.com/app/uploads/2021/09/yoast-logo.svg' },
];

const locations = [
  'Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Kolhapur', 'Amravati', 'Solapur'
];

const Locations = () => {
  return (
    <Container className="my-5 text-center">
      <h2 className="fw-bold mb-2">Compatible With Popular Plugins</h2>
      <p className="text-muted mb-4">
        EduSphere WordPress Theme Is Compatible With The Most Popular WP Plugins.
      </p>
      <Row className="justify-content-center g-4">
        {plugins.map((plugin, idx) => (
          <Col xs={6} md={2} key={idx}>
            <Card className="plugin-card border-0 shadow-sm">
              <Card.Img variant="top" src={plugin.image} alt={plugin.name} className="plugin-img mx-auto mt-3" />
              <Card.Body className="pt-1">
                <Card.Text className="fw-medium small text-dark">{plugin.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h3 className="fw-bold mt-5 mb-3">Top College Locations</h3>
      <Row className="justify-content-center g-3">
        {locations.map((loc, index) => (
          <Col xs={6} sm={4} md={3} lg={2} key={index}>
            <Card className="location-card border-0 shadow-sm p-3">
              <Card.Text className="fw-medium text-secondary mb-0">📍 {loc}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Locations;
