import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Caresol = () => {
  return (
    <div
      style={{
        position: 'relative',
        backgroundImage: 'url(https://images.jdmagicbox.com/quickquotes/listicle/listicle_1684326293714_dks6g_1040x500.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5rem 0',
        overflow: 'hidden',
        color: 'white',
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // blackish blur effect
          zIndex: 1,
        }}
      ></div>

     
      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 3 }}>
        <Container>
          <Row className="align-items-center">
            {/* Left Content */}
            <Col md={7}>
              <h6 className="text-warning mb-2">Distance Education With Fun Learning</h6>
              <h2 className="fw-bold mb-3">
                <span style={{ color: 'white' }}>Discover Best Colleges</span>{' '}
                <span style={{ color: 'yellow' }}>For The Best Learning</span>
              </h2>
              <p>Explore top colleges offering quality education and placements. Let's guide your future!</p>
              {/* <Button variant="light" className="text-dark fw-bold mt-3">Read More</Button> */}
            </Col>

            {/* Right Side Form */}
            <Col md={5} className='p-2'>
              <div
                style={{
                  background: '#fff',
                  padding: '2rem',
                  borderRadius: '12px',
                  boxShadow: '0 0 15px rgba(0,0,0,0.3)',
                }}
              >
                 <h5 className="text-center text-dark fw-bold mb-1">Search Colleges</h5>
                
                <Form>
                  <Form.Group className="mb-1">
                    <Form.Label>College Location</Form.Label>
                    <Form.Select>
                      <option> Select Location </option>
                      <option>Pune</option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Hyderabad</option>
                      <option>Bangalore</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-1">
                    <Form.Label>Select Course</Form.Label>
                    <Form.Select>
                      <option> Select Course </option>
                      <option>MCA</option>
                      <option>MBA</option>
                      <option>BTech</option>
                      <option>BSc</option>
                      <option>BA</option>
                    </Form.Select>
                  </Form.Group>

                  <div className="d-grid mt-3">
                    <Button variant="warning" type="submit" className='w-50'>Search Now</Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Caresol;
