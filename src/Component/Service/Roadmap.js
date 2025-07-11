import React from "react";
import "./Roadmap.css"; // Import CSS for styling

const roadmapData = {
  title: "Career Roadmap",
  children: [
    {
      title: "Engineering 🛠️",
      link: "https://roadmap.sh/",
      children: [
        { title: "10+2 with PCM" },
        { title: "JEE / CET" },
        { title: "B.Tech / B.E" },
      ],
    },
    {
      title: "Medical 🏥",
      link: "https://ascopubs.org/doi/10.1200/GO-24-00466",
      children: [
        { title: "10+2 with PCB" },
        { title: "NEET Exam" },
        { title: "MBBS / BDS" },
      ],
    },
    {
      title: "MBA 📈",
      link: "https://roadmap.sh/r/mba-self-taught",
      children: [
        { title: "Bachelor's Degree" },
        { title: "CAT / GMAT" },
        { title: "MBA Degree" },
      ],
    },
  ],
};

const RoadmapNode = ({ title, link, children }) => {
  return (
    <div className="roadmap-node">
      {/* ✅ Now using <a> tag to ensure links open properly */}
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="node-box clickable"
        >
          {title}
        </a>
      ) : (
        <div className="node-box">{title}</div>
      )}

      {children?.length > 0 && <div className="line"></div>}
      <div className="roadmap-children">
        {children?.map((child, index) => (
          <RoadmapNode key={index} title={child.title} link={child.link} />
        ))}
      </div>
    </div>
  );
};

const RoadmapChart = () => {
  return (
    <div className="roadmap-container">
      <h2 className="roadmap-title">Career Roadmap</h2>
      <RoadmapNode title={roadmapData.title} children={roadmapData.children} />
    </div>
  );
};

export default RoadmapChart;
