import React from "react";
import { FaGlobe, FaDatabase, FaTools, FaCode, FaShieldAlt, FaBrain, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

function Skills() {
  const skillsData = [
    { 
      title: "Web Dev", 
      content: "HTML, CSS, React.js, Node.js, Express.js", 
      icon: <FaGlobe className="skill-icon" />,
      color: "#4CAF50"
    },
    { 
      title: "Database", 
      content: "MongoDB, MySQL", 
      icon: <FaDatabase className="skill-icon" />,
      color: "#FF9800"
    },
    { 
      title: "CyberSec Tools", 
      content: "Metasploit, Nmap, WireShark, Metasploit", 
      icon: <FaShieldAlt className="skill-icon" />,
      color: "#9C27B0"
    },
    { 
      title: "Languages", 
      content: "C++, Python, C, Javascript, Java", 
      icon: <FaCode className="skill-icon" />,
      color: "#9C27B0"
    },
    { 
      title: "Concepts", 
      content: "Data Structures & Algorithms, OOPS, DBMS, Operating System", 
      icon: <FaBrain className="skill-icon" />,
      color: "#2196F3"
    },
    { 
      title: "Tools", 
      content: "Git, GitHub, Bash, V S Code, Visual Paradigm", 
      icon: <FaTools className="skill-icon" />,
      color: "#E91E63"
    },
  ];

  const certificationsData = [
    {
      title: "Certified Ethical Hacker (CEH) ------------- Certif no.: ECC2568173940",
      provider: "EC-Council",
      color: "#4776E6",
      verificationLink: "https://aspen.eccouncil.org/Verify"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      provider: "Google",
      color: "#61DAFB",
      verificationLink: "https://www.coursera.org/account/accomplishments/verify/YM35R84NHKYA"
    },
    {
      title: "Hands-on Introduction to Linux Commands and Shell Scripting",
      provider: "IBM",
      color: "#8E54E9",
      verificationLink: "https://www.coursera.org/account/accomplishments/verify/AVZZ7UWFRWTY"
    },
    // {
    //   title: "Introduction to Computers and Operating Systems and Security",
    //   provider: "Microsoft",
    //   color: "#FF9900",
    //   verificationLink: "https://www.coursera.org/account/accomplishments/verify/AFH6MFQ2YK9B"
    // },
    {
      title: "Data Structures",
      provider: "University of California San Diego",
      color: "#FF9900",
      verificationLink: "https://www.coursera.org/account/accomplishments/verify/RYDDRNPC7895"
    },
    {
      title: "Algorithmic Toolbox",
      provider: "University of California San Diego",
      color: "#1BA0D7",
      verificationLink: "https://www.coursera.org/account/accomplishments/verify/P5HRWPGQFGZS"
    }
  ];

  // Function to handle certification verification
  const handleVerification = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="skills-section">
      {/* Skills Section */}
      <div className="section-header">
          <h1>Skills</h1>
          <div className="section-underline"></div>
      </div>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item" style={{"--skill-color": skill.color}}>
            <div className="skill-icon-container">
              {skill.icon}
            </div>
            <div className="skill-content">
              <h3>{skill.title}</h3>
              <div className="skill-tags">
                {skill.content.split(", ").map((tag, i) => (
                  <span key={i} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="section-header">
          <h1>Certifications</h1>
          <div className="section-underline"></div>
      </div>
      <div className="certifications-container">
        {certificationsData.map((certification, index) => (
          <div key={index} className="certification-bar" style={{"--cert-color": certification.color}}>
            <div className="certification-icon">
              <FaCertificate />
            </div>
            <div className="certification-details">
              <h3>{certification.title}</h3>
              <div className="certification-provider">
                <span>{certification.provider}</span>
              </div>
            </div>
            <button 
              className="verify-button"
              onClick={() => handleVerification(certification.verificationLink)}
            >
              Verify <FaExternalLinkAlt className="verify-icon" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;