import React from "react";
import { Nav } from "react-bootstrap";
import {
  FaTachometerAlt,
  FaUniversity,
  FaUserGraduate,
  FaBook,
  FaClipboardList,
  FaBell,
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ setActiveSection }) => {
  return (
    <div className="sidebar">
      <h4 className="sidebar-title">Admin Panel</h4>
      <Nav className="flex-column">
        <Nav.Link className="nav-link1" onClick={() => setActiveSection("Dashboard")}>
          <FaTachometerAlt className="me-2 nav-link1" /> Dashboard
        </Nav.Link>
        <Nav.Link  className="nav-link1" onClick={() => setActiveSection("Colleges")}>
          <FaUniversity className="me-2 nav-link1" /> Colleges
        </Nav.Link>
        <Nav.Link  className="nav-link1" onClick={() => setActiveSection("Students")}>
          <FaUserGraduate className="me-2 nav-link1" /> Students
        </Nav.Link>
        <Nav.Link  className="nav-link1" onClick={() => setActiveSection("Courses")}>
          <FaBook className="me-2 nav-link1" /> Courses
        </Nav.Link>
        <Nav.Link  className="nav-link1" onClick={() => setActiveSection("Admissions")}>
          <FaClipboardList className="me-2 nav-link1" /> Admissions
        </Nav.Link>
        <Nav.Link   className="nav-link1" onClick={() => setActiveSection("Exam Alerts")}>
          <FaBell className="me-2 nav-link1" /> Exam Alerts
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
