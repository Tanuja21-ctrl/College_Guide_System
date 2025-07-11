// control.js (React Component for CRUD)
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, Modal, Table, Form, Row, Col } from "react-bootstrap";

const Control = () => {
  const [colleges, setColleges] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    collegename: "",
    location: "",
    type: "",
    rating: 0,
    image: "",
    department: [],
    description: ""
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchColleges();
  }, []);

  const fetchColleges = async () => {
    try {
      const res = await axios.get("http://localhost:8000/getdata/college");
      setColleges(res.data);
    } catch (err) {
      console.error("Failed to fetch colleges", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this college?")) {
        try {
            const response = await axios.delete(`http://localhost:5000/college/${id}`);
            if (response.status === 200) {
                alert("College deleted successfully");
                fetchColleges(); // Refresh the list
            }
        } catch (error) {
            console.error("Delete error:", error);
            alert("Failed to delete college");
        }
    }
};


  const handleShowAdd = () => {
    setFormData({
      collegename: "",
      location: "",
      type: "",
      rating: 0,
      image: "",
      department: [],
      description: ""
    });
    setEditMode(false);
    setShowModal(true);
  };

  const handleEdit = (college) => {
    setFormData({
      collegename: college.collegename,
      location: college.location,
      type: college.type,
      rating: college.rating,
      image: college.image,
      department: college.department.join(", "),
      description: college.description
    });
    setEditingId(college._id);
    setEditMode(true);
    setShowModal(true);
  };

  const handleSave = async () => {
    try {
      const data = {
        ...formData,
        department: formData.department.split(",").map(d => d.trim())
      };

      if (editMode) {
        await axios.put("http://localhost:8000/updatedata", {
          filter: { _id: editingId },
          updatedData: data
        });
      } else {
        await axios.post("http://localhost:8000/postdata", [data]);
      }

      setShowModal(false);
      fetchColleges();
    } catch (err) {
      console.error("Failed to save college", err);
    }
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center my-4">
        <h3>Colleges</h3>
        <Button onClick={handleShowAdd}>Add College</Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>College Name</th>
            <th>Location</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {colleges.map((college, idx) => (
            <tr key={college._id}>
              <td>{idx + 1}</td>
              <td>{college.collegename}</td>
              <td>{college.location}</td>
              <td>{college.type}</td>
              <td>
                <Button variant="primary" size="sm" onClick={() => handleEdit(college)}>Edit</Button>{" "}
                <Button variant="destructive" onClick={() => handleDelete(college._id)}>
                  Delete
                </Button>

              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? "Edit College" : "Add College"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm="3">Name</Form.Label>
              <Col sm="9">
                <Form.Control type="text" value={formData.collegename} onChange={(e) => setFormData({ ...formData, collegename: e.target.value })} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mt-2">
              <Form.Label column sm="3">Location</Form.Label>
              <Col sm="9">
                <Form.Control type="text" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mt-2">
              <Form.Label column sm="3">Type</Form.Label>
              <Col sm="9">
                <Form.Control type="text" value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mt-2">
              <Form.Label column sm="3">Rating</Form.Label>
              <Col sm="9">
                <Form.Control type="number" value={formData.rating} onChange={(e) => setFormData({ ...formData, rating: e.target.value })} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mt-2">
              <Form.Label column sm="3">Image URL</Form.Label>
              <Col sm="9">
                <Form.Control type="text" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mt-2">
              <Form.Label column sm="3">Departments</Form.Label>
              <Col sm="9">
                <Form.Control type="text" placeholder="Comma-separated" value={formData.department} onChange={(e) => setFormData({ ...formData, department: e.target.value })} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mt-2">
              <Form.Label column sm="3">Description</Form.Label>
              <Col sm="9">
                <Form.Control as="textarea" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="success" onClick={handleSave}>Save</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Control;