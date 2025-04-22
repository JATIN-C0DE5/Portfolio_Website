import React from 'react';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaTools, FaBuilding, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

function Experience() {
  return (
    <div id="experience-section">
      <div className="section-container">
        <div className="section-header">
          <h1>Tech Experience</h1>
          <div className="section-underline"></div>
        </div>
        
        <div className="experience-grid">
          <div className="experience-card">
            <div className="card-header">
              <div className="icon-container">
                <FaBriefcase />
              </div>
              <h3>Freelancer</h3>
            </div>
            <div className="card-body">
              <div className="company-info">
                <div className="company">
                  <FaBuilding /> <span>Remote</span>
                </div>
                <div className="duration">
                  <FaCalendarAlt /> <span>2022 - July 2024</span>
                </div>
              </div>
              <p>
                Developed 2 Python and mySql based Projects.<br/>
                Also developed 2 Portfolio Websites and a Business Website .
              </p>
              <div className="tech-container">
                <div className="tech-label"><FaTools /> Technologies:</div>
                <div className="tech-pills">
                  <span>Python</span>
                  <span>MySQL</span>
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>JavaScript</span>
                  <span>CSS</span>
                  <span>HTML</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="experience-card">
            <div className="card-header">
              <div className="icon-container">
                <FaBriefcase />
              </div>
              <h3>Been part of Hacktivist Group</h3>
            </div>
            <div className="card-body">
              <div className="company-info">
                <div className="company">
                  <FaBuilding /> <span>Remote</span>
                </div>
                <div className="duration">
                  <FaCalendarAlt /> <span>2022 - 2023</span>
                </div>
              </div>
              <p>
              Helped people recover money lost to scams (in thousands)<br/>
              Created payloads and maintained Backdoor access via port forwarding.
              </p>
              <div className="tech-container">
                <div className="tech-label"><FaTools /> Technologies:</div>
                <div className="tech-pills">
                  <span>Metasploit</span>
                  <span>Ngrok</span>
                  <span>Payload Binding</span>
                  <span>steganography</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Leadership Roles Section */}
        <div className="section-header leadership-header">
          <h1>Leadership Roles</h1>
          <div className="section-underline"></div>
        </div>
        
        <div className="leadership-grid">
          <div className="leadership-card">
            <div className="card-header">
              <div className="icon-container leadership">
                <FaUsers />
              </div>
              <h3>Design Head</h3>
            </div>
            <div className="card-body">
              <div className="company-info">
                <div className="company">
                  <FaBuilding /> <span>IEEE-WIE , Bennett University</span>
                </div>
                <div className="duration">
                  <FaCalendarAlt /> <span>Sep 2023 – Jun 2024</span>
                </div>
              </div>
              <p>
                Played a key role in the completion of 10+ tech and cultural events.<br/>
                Also, under my leadership Design Team was declared as the Best Team of the chapter. 
              </p>
              <div className="tech-container">
                <div className="tech-label"><FaTools /> Skills:</div>
                <div className="tech-pills">
                  <span>Leadership</span>
                  <span>Creative Thinking</span>
                  <span>Team Work</span>
                  <span>Team Management</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="leadership-card">
            <div className="card-header">
              <div className="icon-container leadership">
                <FaUsers />
              </div>
              <h3>Content, Social Media Head</h3>
            </div>
            <div className="card-body">
              <div className="company-info">
                <div className="company">
                  <FaBuilding /> <span>Spark E-cell, Bennett University</span>
                </div>
                <div className="duration">
                  <FaCalendarAlt /> <span>Jan 2024 – Dec 2024</span>
                </div>
              </div>
              <p>
                Provided Content and also harvested Social Media Engagement that helped in the completion of 7 entrepreneurship events with each having 500+ participation from various colleges
              </p>
              <div className="tech-container">
                <div className="tech-label"><FaTools /> Skills:</div>
                <div className="tech-pills">
                  <span>Critical Thinking</span>
                  <span>Adaptability</span>
                  <span>Leadership</span>
                  <span>Time Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section-header education-header">
          <h1>Education</h1>
          <div className="section-underline"></div>
        </div>
        
        <div className="education-grid">
          <div className="education-card">
            <div className="card-header">
              <div className="icon-container education">
                <FaGraduationCap />
              </div>
              <h3>B.Tech in Computer Science and Engineering</h3>
            </div>
            <div className="card-body">
              <div className="institution-info">
                <div className="institution">
                  <FaBuilding /> <span>Bennett University</span>
                </div>
                <div className="duration">
                  <FaCalendarAlt /> <span>2022 - 2026</span>
                </div>
                <div className="location">
                  <FaMapMarkerAlt /> <span>Greater Noida, India</span>
                </div>
              </div>
              <p>Currently pursuing B.Tech in Computer science with Cybersecurity as Specialization. Current CGPA = <b>8.56</b></p>
            </div>
          </div>
          
          <div className="education-card">
            <div className="card-header">
              <div className="icon-container education">
                <FaGraduationCap />
              </div>
              <h3>Higher Secondary Education</h3>
            </div>
            <div className="card-body">
              <div className="institution-info">
                <div className="institution">
                  <FaBuilding /> <span>St. Anthony's Senior Secondary School</span>
                </div>
                <div className="duration">
                  <FaCalendarAlt /> <span>2007 - 2021</span>
                </div>
              </div>
              <div className="achievements">
                <p>• Completed Class XII in 2022 with <b>95% marks</b></p>
                <p>• Completed Class X in 2020 with <b>92.8% marks</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;