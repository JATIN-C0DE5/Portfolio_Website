import React, { useState } from 'react';
import NAS from '../Images/NAS.png';
import CovidManager from '../Images/Covid_Manager.png';
import EntityExtracter from '../Images/EntityExtracter.png';
import UniVerse from '../Images/UniVerse.png';
import Portfolio from '../Images/Portfolio.png';
import { FaGithub, FaYoutube, FaGlobe } from 'react-icons/fa';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 'pro1_UniVerse',
      title: 'UniVerse',
      image: UniVerse,
      description: [
        'One-stop platform for college students to manage daily campus activities',
        'Solved issues like laundry booking and event management',
        'Integrated RazorPay API for seamless online payments',
      ],
      technologies: ['JavaScript', 'MongoDB', 'Express.js', 'React.js', 'Node.js','Razor Pay API'],
      github: 'https://github.com/JATIN-C0DE5/Uni-Verse',
      youtube: 'https://youtube.com',
      website: 'https://www.google.com'
    },
    {
      id: 'pro2_NAS',
      title: 'NAS using Raspberry Pi',
      image: NAS,
      description: [
        'Personal cloud storage solution using Raspberry Pi and Linux',
        'Enabled remote access via Cloudflare Tunnel and CasaOS',
        'Focused on privacy, data security, and cost-efficiency',
        'Hands-on learning of networking, tunneling, and VPNs'
      ],
      technologies: ['Linux', 'Raspberry Pi', 'Cloudﬂare Tunnel', 'Casa OS', 'Firewall','VPNs'],
      github: 'https://github.com/JATIN-C0DE5/NAS',
      youtube: 'https://youtube.com',
      website: '#'
    },
    {
      id: 'pro3_EntityExtracter',
      title: 'Entity Extracter',
      image: EntityExtracter,
      description: [
        'Extracts metadata like weight, voltage from product label images',
        'Uses Pytesseract for OCR and BART and T5 model for entity extraction',
        'Built with React, Vite, and CSS for a clean, responsive frontend',
        'Interactive interface displaying extracted data for user validation and export'
      ],
      technologies: ['BERT', 'T5', 'PyTorch', 'Adam Optimizer', 'React.js', 'Express.js', 'Pytesseract'],
      github: 'https://github.com/JATIN-C0DE5/Entity_Extractor',
      youtube: 'https://youtube.com',
      website: '#'
    },
    {
      id: 'pro4_Portfolio',
      title: 'Portfolio Website',
      image: Portfolio,
      description: [
        'Responsive portfolio to showcase projects, skills, and achievements',
        'Supports dark/light themes and adapts to all screen sizes',
        'Includes interactive project cards with GitHub/YouTube links',
        'Integrated EmailJS for direct contact via email from the website'
      ],
      technologies: ['React.js', 'Vite', 'CSS','Javascript','EmailJS'],
      github: 'https://github.com/JATIN-C0DE5/Portfolio_Website',
      youtube: 'https://youtube.com',
      website: '#'
    },
    {
      id: 'pro6_Covid',
      title: 'Covid Manager',
      image: CovidManager,
      description: [
        'Command-line tool to manage and track COVID-19 patient data',
        'Displays top 10 affected countries and safety guidelines interactively',
        'Offers features like patient registration, quarantine tracking, and global stats',
      ],
      technologies: ['Python', 'SQL connecter', 'Pandas'],
      github: 'https://github.com/JATIN-C0DE5/Covid_Manager',
      youtube: 'https://youtube.com',
      website: '#'
    },
  ];

  function redirectToProject(url) {
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  }

  // Handle both hover on desktop and touch on mobile
  const handleProjectInteraction = (projectId) => {
    if (window.innerWidth <= 768) {
      // Toggle for mobile (touch)
      setActiveProject(activeProject === projectId ? null : projectId);
    } else {
      // Set on hover for desktop
      setActiveProject(projectId);
    }
  };

  // Clear active project on mouse leave (desktop only)
  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setActiveProject(null);
    }
  };

  return (
    <div id="project-section" className="project">
      <div className="project-header">
        <h1>Projects</h1>
        <p>A showcase of my technical skills and creative problem-solving</p>
      </div>
      
      <div className="project-grid">
        {projects.map((project, index) => (
          <div 
            className="project-item" 
            key={project.id}
            onMouseEnter={() => handleProjectInteraction(project.id)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleProjectInteraction(project.id)}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} />
              <div className={`project-overlay ${activeProject === project.id ? 'active' : ''}`}>
                <div className="project-description">
                  <ul className="description-points">
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <button 
                    className="view-project-btn youtube-btn"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering card click
                      redirectToProject(project.youtube);
                    }}
                  >
                    <FaYoutube /> Watch Demo
                  </button>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              {project.website && project.website !== '#' && (
              <button 
                className="pill-button live-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  redirectToProject(project.website);
                }}
                aria-label="Visit live website"
              >
                <FaGlobe /> LIVE
              </button>
              )}
            </div>
            <div className="project-tech-display">
              <div className="tech-pills">
                {project.technologies.slice(0, 10).map((tech, i) => (
                  <span key={i} className="tech-pill">{tech}</span>
                ))}
                {project.technologies.length > 10 && 
                  <span className="tech-pill more-pill">+{project.technologies.length - 10}</span>
                }
              </div>
              <button 
                className="pill-button code-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  redirectToProject(project.github);
                }}
                aria-label="View code on GitHub"
              >
                <FaGithub /> Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;