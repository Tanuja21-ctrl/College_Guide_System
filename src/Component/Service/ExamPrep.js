import React from "react";
import "./ExamPrep.css"; // Import CSS file

const examSections = [
  { 
    id: 1, 
    title: "MOCK TESTS", 
    icon: "📖", 
    description: "Practice with our latest mock tests to boost your exam preparation.",
    link: "https://prepinsta.com/"
  },
  { 
    id: 2, 
    title: "STUDY MATERIAL", 
    icon: "📚", 
    description: "Access high-quality study materials for various competitive exams.",
    link: "https://www.studocu.com/in"
  },
  { 
    id: 3, 
    title: "EXAM TIPS", 
    icon: "🎯", 
    description: "Get expert tips and strategies to crack your exams with confidence.",
    link: "https://www.topuniversities.com/student-info/health-and-support/exam-preparation-ten-study-tips"
  },
  { 
    id: 4, 
    title: "PREVIOUS PAPERS", 
    icon: "📄", 
    description: "Solve previous year question papers to understand exam patterns.",
    link: "https://bodheeprep.com/cat-question-paper-previous-years-pdf"
  },
];

const ExamPrep = () => {
  return (
    <div className="exam-prep-container">
      <h2 className="exam-prep-title">Exam Preparation</h2>
      <div className="exam-prep-grid">
        {examSections.map((section) => (
          <div key={section.id} className="exam-card">
            <div className="exam-icon">{section.icon}</div>
            <h3 className="exam-title">{section.title}</h3>
            <p className="exam-description">{section.description}</p>
            <button 
              className="exam-button" 
              onClick={() => window.open(section.link, "_blank")}  // ✅ Opens link in new tab
            >
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamPrep;
