import { Table, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const admissionData = [
  { id: 1, college: "ABC University", startDate: "2025-04-10", applyLink: "#" },
  { id: 2, college: "XYZ College", startDate: "2025-05-15", applyLink: "#" },
  { id: 3, college: "LMN Institute", startDate: "2025-06-20", applyLink: "#" },
];

const AdmissionAlert = () => {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Admission Alerts</h2>
      <Table striped bordered hover responsive>
        <thead className="bg-primary text-white">
          <tr>
            <th>Sr. No.</th>
            <th>College Name</th>
            <th>Admission Starting Date</th>
            <th>Apply Now</th>
          </tr>
        </thead>
        <tbody>
          {admissionData.map((college, index) => (
            <tr key={college.id}>
              <td>{index + 1}</td>
              <td>{college.college}</td>
              <td>{college.startDate}</td>
              <td>
                <Button variant="success" href={college.applyLink} target="_blank">
                  Apply Now
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdmissionAlert;