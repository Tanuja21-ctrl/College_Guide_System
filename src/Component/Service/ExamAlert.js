import { Table, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const examData = [
  { id: 1, exam: "JEE Main", date: "2025-04-15", applyLink: "#" },
  { id: 2, exam: "NEET", date: "2025-05-22", applyLink: "#" },
  { id: 3, exam: "CAT", date: "2025-06-10", applyLink: "#" },
];

const ExamAlert = () => {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Exam Alerts</h2>
      <Table striped bordered hover responsive>
        <thead className="bg-primary text-white">
          <tr>
            <th>Sr. No.</th>
            <th>Exam Name</th>
            <th>Exam Date</th>
            <th>Apply Now</th>
          </tr>
        </thead>
        <tbody>
          {examData.map((exam, index) => (
            <tr key={exam.id}>
              <td>{index + 1}</td>
              <td>{exam.exam}</td>
              <td>{exam.date}</td>
              <td>
                <Button variant="success" href={exam.applyLink} target="_blank">
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

export default ExamAlert;
