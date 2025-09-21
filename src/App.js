import React, { useState, useEffect, useCallback } from 'react';
import './styles.css'; // Using original CSS file for proper styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faNewspaper, faEnvelopeOpen, faDownload, faMapMarkerAlt, faAdjust, faPaperPlane, faEnvelope, faUserGraduate, faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGithub, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import heroImage from './img/hero.jpg'; // Import your images
import port1 from './img/port1.jpg';
import port2 from './img/port2.jpg';
import port3 from './img/port3.jpg';
import port4 from './img/port4.jpg';
import port5 from './img/port5.jpg';
import port6 from './img/port6.jpg';
import blog1 from './img/blog1.jpg';
import blog2 from './img/blog2.jpg';
import blog3 from './img/blog3.jpg';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  // Handle navigation
  const handleNavClick = useCallback((sectionId) => {
    setActiveSection(sectionId);
  }, []);

  // Handle theme toggle
  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  // Add theme class to body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`main-content ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className={`container header ${activeSection === 'home' ? 'active' : ''}`} id="home">
        <div className="header-content">
          <div className="left-header">
            <div className="h-shape"></div>
            <div className="image">
              <img src={heroImage} alt="Profile" />
            </div>
          </div>
          <div className="right-header">
            <h1 className="name">
              Hi, I'm <span>Indrajit </span>
              A Web Developer.
            </h1>
            <p>
              I'm a Web Developer, I love to create beautiful and functional websites.
              My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do.
            </p>
            <div className="btn-con">
              <a href="/Indrajit_Barman_Resume.pdf" className="main-btn" download="Indrajit_Barman_Resume.pdf">
                <span className="btn-text">Download CV</span>
                <span className="btn-icon">
                  <FontAwesomeIcon icon={faDownload} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className={`container about ${activeSection === 'about' ? 'active' : ''} ${isVisible.about ? 'animate-fadeInUp' : ''}`} id="about" data-animate>
          {/* ... (About Section - similar structure as HTML) ... */}
          <div className="main-title">
            <h2>About <span>me</span><span className="bg-text">my stats</span></h2>
          </div>
          <div className="about-container">
            <div className="left-about">
              <h4>Information About me</h4>
              <p>
                I am a currently studying B.tech in Computer Science Engineering in
                Aditya College of Engineering and Technology.
                My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do.
              </p>
              <div className="btn-con">
                <a href="/Indrajit_Barman_Resume.pdf" className="main-btn" download="Indrajit_Barman_Resume.pdf">
                  <span className="btn-text">Download CV</span>
                  <span className="btn-icon">
                    <FontAwesomeIcon icon={faDownload} />
                  </span>
                </a>
              </div>
            </div>
            <div className="right-about">
              <div className="about-item">
                <div className="abt-text">
                  <p className="large-text">50+</p>
                  <p className="small-text">Projects <br /> Completed</p>
                </div>
              </div>
              <div className="about-item">
                <div className="abt-text">
                  <p className="large-text">2+</p>
                  <p className="small-text">Years of <br /> Experience</p>
                </div>
              </div>
              <div className="about-item">
                <div className="abt-text">
                  <p className="large-text">20+</p>
                  <p className="small-text">Happy <br /> Clients</p>
                </div>
              </div>
              <div className="about-item">
                <div className="abt-text">
                  <p className="large-text">100+</p>
                  <p className="small-text">Cups of <br /> Coffee</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <h4 className="stat-title">My Skills</h4>
            <div className="progress-bars">
              <div className="progress-bar">
                <p className="prog-title">html5</p>
                <div className="progress-con">
                  <p className="prog-text">80%</p>
                  <div className="progress">
                    <span className="html"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">css3</p>
                <div className="progress-con">
                  <p className="prog-text">95%</p>
                  <div className="progress">
                    <span className="css"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">javascript</p>
                <div className="progress-con">
                  <p className="prog-text">75%</p>
                  <div className="progress">
                    <span className="js"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">ReactJS</p>
                <div className="progress-con">
                  <p className="prog-text">60%</p>
                  <div className="progress">
                    <span className="react"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">NodeJS</p>
                <div className="progress-con">
                  <p className="prog-text">87%</p>
                  <div className="progress">
                    <span className="node"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">Python</p>
                <div className="progress-con">
                  <p className="prog-text">70%</p>
                  <div className="progress">
                    <span className="python"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`container ${activeSection === 'portfolio' ? 'active' : ''} ${isVisible.portfolio ? 'animate-fadeInUp' : ''}`} id="portfolio" data-animate>
          <div className="main-title">
            <h2>My <span>Portfolio</span><span className="bg-text">My Work</span></h2>
          </div>
          <p className="port-text">
            Here is some of my work that I've done in various programming languages.
          </p>
          <div className="portfolios">
            <div className="portfolio-item">
              <div className="image">
                <img src={port1} alt="Portfolio Project 1" />
              </div>
              <div className="hover-items">
                <h3>E-Commerce Website</h3>
                <div className="icons">
                  <a href="https://github.com/indrajit002" className="icon" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img src={port2} alt="Portfolio Project 2" />
              </div>
              <div className="hover-items">
                <h3>React Portfolio</h3>
                <div className="icons">
                  <a href="https://github.com/indrajit002" className="icon" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img src={port3} alt="Portfolio Project 3" />
              </div>
              <div className="hover-items">
                <h3>Task Management App</h3>
                <div className="icons">
                  <a href="https://github.com/indrajit002" className="icon" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img src={port4} alt="Portfolio Project 4" />
              </div>
              <div className="hover-items">
                <h3>Weather App</h3>
                <div className="icons">
                  <a href="https://github.com/indrajit002" className="icon" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img src={port5} alt="Portfolio Project 5" />
              </div>
              <div className="hover-items">
                <h3>Blog Website</h3>
                <div className="icons">
                  <a href="https://github.com/indrajit002" className="icon" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img src={port6} alt="Portfolio Project 6" />
              </div>
              <div className="hover-items">
                <h3>Restaurant Website</h3>
                <div className="icons">
                  <a href="https://github.com/indrajit002" className="icon" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`container ${activeSection === 'blogs' ? 'active' : ''} ${isVisible.blogs ? 'animate-fadeInUp' : ''}`} id="blogs" data-animate>
          <div className="blogs-content">
            <div className="main-title">
              <h2>My <span>Blogs</span><span className="bg-text">My Blogs</span></h2>
            </div>
            <div className="blogs">
              <div className="blog">
                <img src={blog1} alt="Blog Post 1" />
                <div className="blog-text">
                  <h4>How to Create Your Own Website</h4>
                  <p>
                    Learn the fundamentals of web development and create your first website from scratch using HTML, CSS, and JavaScript.
                  </p>
                </div>
              </div>
              <div className="blog">
                <img src={blog2} alt="Blog Post 2" />
                <div className="blog-text">
                  <h4>React vs Vue: Which One to Choose?</h4>
                  <p>
                    A comprehensive comparison between React and Vue.js to help you decide which framework is best for your next project.
                  </p>
                </div>
              </div>
              <div className="blog">
                <img src={blog3} alt="Blog Post 3" />
                <div className="blog-text">
                  <h4>CSS Grid vs Flexbox: When to Use What</h4>
                  <p>
                    Understanding the differences between CSS Grid and Flexbox and when to use each layout method for optimal results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`container contact ${activeSection === 'contact' ? 'active' : ''} ${isVisible.contact ? 'animate-fadeInUp' : ''}`} id="contact" data-animate>
          <div className="contact-container">
            <div className="main-title">
              <h2>Contact <span>Me</span><span className="bg-text">Contact</span></h2>
            </div>
            <div className="contact-content-con">
              <div className="left-contact">
                <h4>Contact me here</h4>
                <p>
                  I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices.
                </p>
                <div className="contact-info">
                  <div className="contact-item">
                    <div className="icon">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      <span>Location</span>
                    </div>
                    <p>: Andhra Pradesh, India</p>
                  </div>
                  <div className="contact-item">
                    <div className="icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                      <span>Email</span>
                    </div>
                    <p>: indrajitbarman002@gmail.com</p>
                  </div>
                  <div className="contact-item">
                    <div className="icon">
                      <FontAwesomeIcon icon={faUserGraduate} />
                      <span>Education</span>
                    </div>
                    <p>: B.Tech Computer Science Engineering</p>
                  </div>
                  <div className="contact-item">
                    <div className="icon">
                      <FontAwesomeIcon icon={faGlobeAfrica} />
                      <span>Languages</span>
                    </div>
                    <p>: English, Hindi, Bengali</p>
                  </div>
                </div>
                <div className="contact-icons">
                  <div className="contact-icon">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://github.com/indrajit002" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="right-contact">
                <form
  className="contact-form"
  action="https://api.web3forms.com/submit"
  method="POST"
>
  {/* Required Access Key */}
  <input type="hidden" name="access_key" value="afc0dd23-7f3b-4618-b878-25493463e8db" />

  <div className="input-control i-c-2">
    <input type="text" name="name" required placeholder="YOUR NAME" />
    <input type="email" name="email" required placeholder="YOUR EMAIL" />
  </div>

  <div className="input-control">
    <input type="text" name="subject" required placeholder="ENTER SUBJECT" />
  </div>

  <div className="input-control">
    <textarea
      name="message"
      cols="15"
      rows="8"
      placeholder="Message Here..."
      required
    ></textarea>
  </div>

  {/* Form will show success message without redirect */}

  <div className="submit-btn">
    <button type="submit" className="main-btn">
      <span className="btn-text">Send Message</span>
      <span className="btn-icon">
        <FontAwesomeIcon icon={faPaperPlane} />
      </span>
    </button>
  </div>
</form>

              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="controls">
        <div 
          className={`control ${activeSection === 'home' ? 'active-btn' : ''}`} 
          data-id="home"
          onClick={() => handleNavClick('home')}
        >
          <FontAwesomeIcon icon={faHome} />
        </div>
        <div 
          className={`control ${activeSection === 'about' ? 'active-btn' : ''}`} 
          data-id="about"
          onClick={() => handleNavClick('about')}
        >
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div 
          className={`control ${activeSection === 'portfolio' ? 'active-btn' : ''}`} 
          data-id="portfolio"
          onClick={() => handleNavClick('portfolio')}
        >
          <FontAwesomeIcon icon={faBriefcase} />
        </div>
        <div 
          className={`control ${activeSection === 'blogs' ? 'active-btn' : ''}`} 
          data-id="blogs"
          onClick={() => handleNavClick('blogs')}
        >
          <FontAwesomeIcon icon={faNewspaper} />
        </div>
        <div 
          className={`control ${activeSection === 'contact' ? 'active-btn' : ''}`} 
          data-id="contact"
          onClick={() => handleNavClick('contact')}
        >
          <FontAwesomeIcon icon={faEnvelopeOpen} />
        </div>
      </div>
      <div className="theme-btn" onClick={toggleTheme}>
        <FontAwesomeIcon icon={faAdjust} />
      </div>
    </div>
  );
}

export default App;
