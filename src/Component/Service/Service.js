import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Service.css";
import CareerGuidance from "./CarrierGuidance";
import AdmissionAlert from "./AdemissionAlert";
import ExamAlert from "./ExamAlert"; 
import ExamPrep from "./ExamPrep"; 
import Roadmap from "./Roadmap"; 

const Service = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCareerGuidance, setShowCareerGuidance] = useState(false);
  const [showAdmissionAlert, setShowAdmissionAlert] = useState(false);
  const [showExamAlert, setShowExamAlert] = useState(false);
  const [showExamPrep, setShowExamPrep] = useState(false);
  const [showRoadmap, setShowRoadmap] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowCareerGuidance(category === "Guidance");
    setShowAdmissionAlert(category === "Admissions");
    setShowExamAlert(category === "Scholarships");
    setShowExamPrep(category === "Exams");
    setShowRoadmap(category === "Career");
  };

  return (
    <Container fluid className="text-center my-5 service-section">
      <h2 className="section-title">Our Services</h2>
      <div className="category-buttons d-flex flex-wrap justify-content-center mb-4">
        <Button variant="link" className={`category-btn ${selectedCategory === "Guidance" ? "active" : ""}`} onClick={() => handleCategoryClick("Guidance")}>COURSE GUIDANCE</Button>
        <Button variant="link" className={`category-btn ${selectedCategory === "Admissions" ? "active" : ""}`} onClick={() => handleCategoryClick("Admissions")}>ADMISSIONS ALERT</Button>
        <Button variant="link" className={`category-btn ${selectedCategory === "Scholarships" ? "active" : ""}`} onClick={() => handleCategoryClick("Scholarships")}>EXAM ALERT</Button>
        <Button variant="link" className={`category-btn ${selectedCategory === "Exams" ? "active" : ""}`} onClick={() => handleCategoryClick("Exams")}>EXAM PREP</Button>
        <Button variant="link" className={`category-btn ${selectedCategory === "Career" ? "active" : ""}`} onClick={() => handleCategoryClick("Career")}>ROADMAP</Button>
      </div>

      <Row className="justify-content-center">
        {showCareerGuidance && <Col xs={12} md={10}><CareerGuidance /></Col>}
        {showAdmissionAlert && <Col xs={12} md={10}><AdmissionAlert /></Col>}
        {showExamAlert && <Col xs={12} md={10}><ExamAlert /></Col>}
        {showExamPrep && <Col xs={12} md={10}><ExamPrep /></Col>}
        {showRoadmap && <Col xs={12} md={10}><Roadmap /></Col>}
      </Row>
    </Container>
  );
};

export default Service;