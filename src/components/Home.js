import React from 'react';
import resume from '../Jatin_Resume_1403_Dates.pdf';
import mypic from '../Images/JPG.jpg';
import { FaLinkedin, FaGithub, FaDownload, FaCode, } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Home() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-left">
          <div className="profile-card">
            <div className="profile-image-container">
              <img src={mypic} alt="Jatin Yadav" />
            </div>
            <h1>Jatin Yadav</h1>
            <h2>Code & Create</h2>
            
            <div className="social-links">
              <a href="https://www.linkedin.com/in/jatin-c0de5/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                <FaLinkedin />
              </a>
              <a href="https://github.com/JATIN-C0DE5" target="_blank" rel="noopener noreferrer" className="social-icon github">
                <FaGithub />
              </a>
              <a href="https://x.com/j18yadav" target="_blank" rel="noopener noreferrer" className="social-icon x">
                <FaXTwitter/>
              </a>
              <a href="https://codolio.com/profile/jatin-c0de5" target="_blank" rel="noopener noreferrer" className="social-icon Code">
                <FaCode/>
              </a>
            </div>
            
            <a href={resume} download="Jatin_Resume_1403_Dates.pdf" className="download-button">
              <FaDownload /> Download Resume
            </a>
            <div class="education-container">
              {/* <h2 class="education-title">Education</h2> */}
              <div class="education-content">
                <div class="education-card">
                  <p class="school-info">Bennett University, Greater Noida</p>
                  <p class="degree-info">B. Tech CSE - CyberSecurity</p>
                  <p class="grade-info">CGPA = 8.56</p>
                </div>
                
                <div class="education-card">
                  <p class="school-info">St. Anthony's School, Fatehgarh Cantt.</p>
                  <p class="grade-info">Std. X = 92.8 %</p>
                  <p class="grade-info">Std. XII (PCM + CSE) = 95.0 %</p>
                </div>
              </div>
            </div>
            
      
            {/* <div className="recommendation-card">
              <div className="recommendation-header">
                <h4>Recommendation</h4>
                <div className="recommender-info">
                  <span className="recommender-name">Srikrupa HD</span>
                  <span className="recommender-title">Working at The Entrepreneurship Network</span>
                  <br></br>
                  <span className="recommender-title">Data Analyst | Data Scientist | Python | Web developer | Power BI | Mentor | Problem solver</span>
                  <span className="recommendation-date">August 12, 2024</span>
                </div>
              </div>
              <div className="recommendation-content">
                <p>"He showed full interest in his tasks, he followed instructions and had sufficient knowledge of his role. He was a good intern in the company"</p>
              </div>
            </div> */}
          </div>
        </div>
        
        <div className="hero-right">
          <div className="about-card">
            <div className="section-title">
              <h3>About Me</h3>
              <div className="title-underline"></div>
            </div>
            
            <div className="about-content">
              <p><span className="highlight">Hi, I'm Jatin Yadav --</span></p>
              <p>A cybersecurity enthusiast, full-stack developer, and design-driven techie currently pursuing B.Tech in Computer Science at Bennett University.</p>
              <p>I've led design and content teams at IEEE WIE and Spark E-Cell, organizing 15+ large-scale events, and worked on projects ranging from Entity Extractor, Network Scanner to custom NAS setups. My technical toolkit includes React, Node, Python, MongoDB, Nmap, and more — and I'm currently diving deeper into Advanced DSA, and Big Data Security</p>
              <p>Outside academics, I enjoy exploring the intersection of technology and real-world impact. I have a track record of consistently excelling in competitions and research — earning multiple accolades including four Junior Scientist titles.  If it's bold, creative, and tech-driven — I'm probably building it.</p>
              <p>I'm seeking opportunities for a <span className="highlight">designer role / developer role / cyberSec. role</span>.</p>
            </div>
            
            <div className="achievements-section">
              <div className="section-title">
                <h3>My Achievements</h3>
                <div className="title-underline"></div>
              </div>
              
              <div className="achievements-list">
                <ul>
                  <li><span className="highlight">CEH (Certified Ethical Hacker)</span> certified by EC council.</li>
                  <li><span className="highlight">Winner</span> of UNICEF Chabi Yan (National Level Ideathon).</li>
                  <li><span className="highlight">4-time Junior Scientist</span> awardee.</li>
                  <li>Won at least <span className="highlight">one competition every year</span> from KG to 12th grade.</li>
                  <li><span className="highlight">Runner’s Up</span> of FishHunt CTF - INFUTURUM</li>
                  <li>Recovered money from <span className="highlight">online scams</span> during COVID-19 using <span className="highlight">Metasploit & Port Forwarding</span>.</li>
                </ul>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;