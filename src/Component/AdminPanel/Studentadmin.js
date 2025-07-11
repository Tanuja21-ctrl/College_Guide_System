import React from "react";
import { Container, Table, Button } from "react-bootstrap";

const Students = () => {
  return (
    <Container>
      <h3 className="mb-4">Students</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Email</th>
            <th>College</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Amit Sharma</td>
            <td>amit.sharma@gmail.com</td>
            <td>MIT Pune</td>
            <td>
              <Button variant="primary" size="sm">Edit</Button>{" "}
              <Button variant="danger" size="sm">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Students;
