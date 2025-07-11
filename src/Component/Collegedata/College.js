import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Row, Card, Button, Spinner, Container, Alert, Badge, Modal, Form } from "react-bootstrap";
import { FaMapMarkerAlt, FaStar, FaUniversity, FaLaptopCode, FaWifi, FaBook, FaBuilding, FaUtensils } from "react-icons/fa"; // ✅ Using React Icons
import axios from "axios";
import "./College.css"; // ✅ Import CSS for styling

const CollegeCard = ({ college }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    course: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowModal(false);
    }, 2000);
  };

  return (
    <>
      <Card className="college-card shadow-lg rounded-3 border p-3 w-100">
        <Card.Img variant="top" src={college.image} alt={college.collegename} className="rounded-lg college-img" />
        <Card.Body>
          <Card.Title className="fw-bold">{college.collegename}</Card.Title>
          <Card.Text className="text-muted">
            <FaMapMarkerAlt className="text-primary me-1" /> {college.location}
          </Card.Text>
          <Card.Text className="text-muted">
            <FaStar className="text-warning me-1" /> {college.rating} / 5
          </Card.Text>

          <div className="mb-2">
            {college.department?.map((dept, index) => (
              <Badge key={index} bg="secondary" className="me-1">{dept}</Badge>
            ))}
          </div>

          <Card.Text>
            <strong>Placements:</strong>
            <ul className="list-unstyled mt-1">
              <li>🏆 Highest: {college.packages?.highest}</li>
              <li>📊 Average: {college.packages?.average}</li>
              <li>🎯 Lowest: {college.packages?.lowest}</li>
            </ul>
          </Card.Text>

          <Card.Text>
            <strong>Admission Process:</strong>
            <ul className="list-unstyled mt-1">
              <li>📅 Application: {college.admission_process?.application_start_date} - {college.admission_process?.application_end_date}</li>
              <li>📝 Entrance: {college.admission_process?.entrance_exams?.join(", ") || "N/A"}</li>
              <li>🎯 Selection: {college.admission_process?.selection_criteria}</li>
            </ul>
          </Card.Text>

          <Card.Text>
            <strong>Facilities:</strong>
            <ul className="list-unstyled mt-1">
              {college.facilities?.hostel_available && <li><FaBuilding className="text-success me-1" /> Hostel</li>}
              {college.facilities?.library && <li><FaBook className="text-info me-1" /> Library</li>}
              {college.facilities?.sports_complex && <li><FaUniversity className="text-danger me-1" /> Sports Complex</li>}
              {college.facilities?.wifi_campus && <li><FaWifi className="text-primary me-1" /> WiFi Campus</li>}
              {college.facilities?.cafeteria && <li><FaUtensils className="text-warning me-1" /> Cafeteria</li>}
            </ul>
          </Card.Text>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <Button variant="outline-primary" onClick={() => window.open(college.contact?.website, "_blank")}>
              Visit Website
            </Button>
            <Button variant="success" onClick={() => setShowModal(true)}>
              Enquire Now
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enquiry Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {submitted ? (
            <Alert variant="success">Form successfully submitted!</Alert>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone No</Form.Label>
                <Form.Control type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email ID</Form.Label>
                <Form.Control type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Course</Form.Label>
                <Form.Control type="text" required value={formData.course} onChange={(e) => setFormData({ ...formData, course: e.target.value })} />
              </Form.Group>

              <Button variant="primary" type="submit">Submit</Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

const College = () => {
  const { collegeId } = useParams();
  const [colleges, setColleges] = useState([]);
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setLoading(true);

    if (collegeId) {
      axios.get(`http://localhost:8000/getdata/college/${collegeId}`)
        .then(response => {
          if (response.data && response.data._id) {
            setCollege(response.data);
          } else {
            setError("College not found");
            setCollege(null);
          }
        })
        .catch(() => {
          setError("College not found");
          setCollege(null);
        })
        .finally(() => setLoading(false));
    } else {
      axios.get("http://localhost:8000/getdata/college")
        .then(response => {
          if (Array.isArray(response.data)) {
            setColleges(response.data);
          } else {
            setError("Invalid data format received");
          }
        })
        .catch(() => {
          setError("Failed to load colleges");
        })
        .finally(() => setLoading(false));
    }
  }, [collegeId]);

  return (
    <Container className="my-4">
      {loading && <Spinner animation="border" variant="primary" className="d-block mx-auto my-5" />}
      {error && <Alert variant="danger">{error}</Alert>}
      <Row className="g-4">
        {college ? <CollegeCard college={college} /> : colleges.map(college => <CollegeCard key={college._id} college={college} />)}
      </Row>
    </Container>
  );
};

export default College;
