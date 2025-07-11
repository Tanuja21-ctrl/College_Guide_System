import React, { useState } from "react";
import { Accordion, Container, Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Faq.css";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "How can I choose the right college for my career goals?",
      answer:
        "Choosing the right college depends on factors like your field of interest, accreditation, faculty, placements, and location. Our expert counselors can help guide you based on your academic background and career aspirations.",
    },
    {
      question: "What are the admission requirements for different colleges?",
      answer:
        "Admission requirements vary by college and program. Most colleges consider academic scores, entrance exams, personal statements, and extracurricular activities. We provide detailed admission guidance for each institution.",
    },
    {
      question: "What financial aid or scholarships are available for students?",
      answer:
        "There are various scholarships, grants, and financial aid options available. We can help you explore merit-based scholarships, need-based financial aid, and government grants.",
    },
    {
      question: "Do I need to take entrance exams for college admission?",
      answer:
        "It depends on the college and the course. Some universities require entrance exams like the SAT, ACT, GRE, or GMAT, while others rely on academic performance and interviews.",
    },
    {
      question: "How can I prepare for college entrance exams?",
      answer:
        "Start by understanding the exam format and syllabus. Use official practice tests, enroll in preparation courses, and maintain a consistent study schedule. We offer exam preparation resources and coaching.",
    },
    {
      question: "Can I study abroad, and what are the requirements?",
      answer:
        "Yes, you can study abroad! Requirements vary based on the country and university, but typically include language proficiency tests (TOEFL, IELTS), academic qualifications, and a student visa.",
    },
    {
      question: "What are the best strategies for managing college applications?",
      answer:
        "Start early, research colleges, prepare necessary documents (transcripts, letters of recommendation, essays), and keep track of deadlines using a checklist or planner.",
    },
    {
      question: "How can I balance academics and extracurricular activities in college?",
      answer:
        "Create a structured schedule, prioritize tasks, set realistic goals, and seek support from mentors or academic advisors. Time management is key!",
    },
    {
      question: "What career services do colleges offer for students?",
      answer:
        "Colleges provide career counseling, resume workshops, interview preparation, internship opportunities, and job placement services. Utilize these resources to enhance your career prospects.",
    },
    {
      question: "How do I find student housing and accommodation?",
      answer:
        "Most colleges offer on-campus housing, but you can also explore off-campus options like shared apartments, hostels, and rental accommodations. Our team can help you find suitable student housing.",
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [answerIndex, setAnswerIndex] = useState(null);
  const [showAnswerModal, setShowAnswerModal] = useState(false);

  const handleAddFAQ = () => {
    if (newQuestion.trim() && newAnswer.trim()) {
      setFaqs([...faqs, { question: newQuestion, answer: newAnswer }]);
      setNewQuestion("");
      setNewAnswer("");
      setShowAddModal(false);
    }
  };

  const handleAnswerSubmit = () => {
    if (newAnswer.trim() && answerIndex !== null) {
      const updatedFaqs = [...faqs];
      updatedFaqs[answerIndex].answer = newAnswer;
      setFaqs(updatedFaqs);
      setNewAnswer("");
      setShowAnswerModal(false);
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold">Frequently Asked Questions</h2>
      <Button variant="primary" className="my-3" onClick={() => setShowAddModal(true)}>
        Add New Question
      </Button>
      <Accordion defaultActiveKey="0" className="mt-4">
        {faqs.map((faq, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>
              {faq.answer}
              <div className="mt-3">
                <Button
                  variant="outline-success"
                  size="sm"
                  onClick={() => {
                    setAnswerIndex(index);
                    setShowAnswerModal(true);
                  }}
                >
                  Answer This Question
                </Button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      {/* Modal for Adding a New Question */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Question</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your question"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Answer</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter the answer (optional)"
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddFAQ}>
            Add Question
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Answering an Existing Question */}
      <Modal show={showAnswerModal} onHide={() => setShowAnswerModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Answer Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Your Answer</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your answer"
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAnswerModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAnswerSubmit}>
            Submit Answer
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Faq;
