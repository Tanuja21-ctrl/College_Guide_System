import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navb = () => {
  return (
    <Navbar expand="lg" className="bg-white shadow-sm py-3 px-4" sticky="top">  {/* ✅ Sticky Navbar */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="w-100">
      
        <div className="d-flex align-items-center me-auto">
          <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135698.png"
              alt="logo"
              width="30"
              height="30"
              className="me-2"
            />
            <span className="text-dark">EDUSTEP</span>
          </Navbar.Brand>
        </div>

        <Nav className="mx-auto gap-4">
          <Nav.Link as={Link} to='/' className="text-success fw-semibold">Home</Nav.Link>
          <Nav.Link as={Link} to='/aboutus' className="text-dark fw-semibold">About</Nav.Link>
          <Nav.Link as={Link} to='/service' className="text-dark fw-semibold">Services</Nav.Link>
          <Nav.Link as={Link} to='/faq' className="text-dark fw-semibold">FAQ</Nav.Link>
        </Nav>

        <div className="d-flex align-items-center gap-3">
          <Form className="d-flex me-2">
            <FormControl
              type="search"
              placeholder="Search College..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark" value="">Search</Button>
          </Form>

          <Button
            variant="warning"
            className="fw-semibold px-4 py-2 rounded-pill text-white"
            as={Link} to='/login'
          >
            Login/Register
          </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navb;
