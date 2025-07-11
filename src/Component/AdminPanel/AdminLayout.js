import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Collegeadmin from "./Collegeadmin";
import Studentadmin from "./Studentadmin";
// import Courses from "./Courses";
// import Admissions from "./Admissions";
// import ExamAlerts from "./ExamAlerts";

const AdminLayout = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");

  const renderSection = () => {
    switch (activeSection) {
      case "Dashboard":
        return <Dashboard />;
      case "Colleges":
        return <Collegeadmin />;
      case "Students":
        return <Studentadmin />;
    //   case "Courses":
    //     return <Courses />;
    //   case "Admissions":
    //     return <Admissions />;
    //   case "Exam Alerts":
    //     return <ExamAlerts />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={2} className="p-0">
          <Sidebar setActiveSection={setActiveSection} />
        </Col>

        {/* Main Content */}
        <Col md={10} className="p-4">{renderSection()}</Col>
      </Row>
    </Container>
  );
};

export default AdminLayout;
