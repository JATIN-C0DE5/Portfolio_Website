import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane, FaUser, FaCommentAlt, FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Use EmailJS to send the form
    emailjs.send('service_mxcqyad', 'template_a5ugkbo', formData, '5AKhKQYiJgToUmavf')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitting(false);
        setSubmitStatus('success');
        
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }, (error) => {
        console.log('FAILED...', error);
        setIsSubmitting(false);
        setSubmitStatus('error');
        
        // Clear error message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      });
  };
  
  return (
    <div id="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>I'd love to hear from you! Whether you've a question or just want to say hi.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>jatinamanyadav@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+91 ---</p>
              </div>
            </div>
            
            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/jatin-c0de5/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/JATIN-C0DE5" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <FaGithub />
                </a>
                <a href="https://www.instagram.com/ja1in.yadav" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send Me a Message</h2>
              
              <div className="form-group">
                <label htmlFor="name">
                  <FaUser /> <span>Your Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">
                  <FaEnvelope /> <span>Your Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="abcd@example.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">
                  <FaCommentAlt /> <span>Your Message</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello, I'd like to talk about..."
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="spinner"></span>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  <p>Thank you! Your message has been sent successfully.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="error-message">
                  <p>Oops! Something went wrong. Please try again later.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
