import React from 'react';
import './styles/styles.css'; // Assuming your CSS file is in the 'styles' folder
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faNewspaper, faEnvelopeOpen, faDownload, faMapMarkerAlt, faEnvelope, faUserGraduate, faGlobeAfrica, faAdjust } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import heroImage from './img/hero.jpg'; // Import your images
import port1 from './img/port1.jpg';
import port2 from './img/port2.jpg';
import port3 from './img/port3.jpg';
import port4 from './img/port4.jpg';
import port5 from './img/port5.jpg';
import port6 from './img/port6.jpg';
import port7 from './img/port7.jpg';
import blog1 from './img/blog1.jpg';
import blog2 from './img/blog2.jpg';
import blog3 from './img/blog3.jpg';

function App() {
  return (
    <div className="main-content">
      <header className="container header active" id="home">
        <div className="header-content">
          <div className="left-header">
            <div className="h-shape"></div>
            <div className="image">
              <img src={heroImage} alt="Profile" />
            </div>
          </div>
          <div className="right-header">
            <h1 className="name">
              Hi, I'm <span>Indrajit Barman</span>
              A Web Developer.
            </h1>
            <p>
              I'm a Web Developer, I love to create beautiful and functional websites.
              My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do.
            </p>
            <div className="btn-con">
              <a href="/path/to/your/cv.pdf" className="main-btn" download="Indrajit_Barman_CV.pdf">
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
        <section className="container about" id="about">
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
                <a href="/path/to/your/cv.pdf" className="main-btn" download="Indrajit_Barman_CV.pdf">
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
                  <p className="large-text">650+</p>
                  <p className="small-text">Projects <br /> Completed</p>
                </div>
              </div>
              {/* ... (Other about items) ... */}
            </div>
          </div>
          {/* ... (About Stats, Timeline) ... */}
        </section>
        <section className="container" id="portfolio">
          <div className="main-title">
            <h2>My <span>Portfolio</span><span className="bg-text">My Work</span></h2>
          </div>
          <p className="port-text">
            Here is some of my work that I've done in various programming languages.
          </p>
          <div className="portfolios">
            <div className="portfolio-item">
              <div className="image">
                <img src={port1} alt="" />
              </div>
              <div className="hover-items">
                <h3>Project Source</h3>
                <div className="icons">
                  <a href="https://github.com/indrajit002" className="icon">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  {/* ... (Other icons) ... */}
                </div>
              </div>
            </div>
            {/* ... (Other portfolio items) ... */}
          </div>
        </section>
        <section className="container" id="blogs">
          <div className="blogs-content">
            <div className="main-title">
              <h2>My <span>Blogs</span><span className="bg-text">My Blogs</span></h2>
            </div>
            <div className="blogs">
              <div className="blog">
                <img src={port6} alt="" />
                <div className="blog-text">
                  <h4>How to Create Your Own Website</h4>
                  <p></p>
                </div>
              </div>
              {/* ... (Other blog items) ... */}
            </div>
          </div>
        </section>
        <section className="container contact" id="contact">
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
                  {/* ... (Other contact items) ... */}
                </div>
                <div className="contact-icons">
                  <div className="contact-icon">
                    <a href="www.facebook.com" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    {/* ... (Other social icons) ... */}
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
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

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

  {/* Success / Error Redirects (optional) */}
  <input type="hidden" name="redirect" value="https://yourdomain.com/thank-you" />

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
        <div className="control active-btn" data-id="home">
          <FontAwesomeIcon icon={faHome} />
        </div>
        <div className="control" data-id="about">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="control" data-id="portfolio">
          <FontAwesomeIcon icon={faBriefcase} />
        </div>
        <div className="control" data-id="blogs">
          <FontAwesomeIcon icon={faNewspaper} />
        </div>
        <div className="control" data-id="contact">
          <FontAwesomeIcon icon={faEnvelopeOpen} />
        </div>
      </div>
      <div className="theme-btn">
        <FontAwesomeIcon icon={faAdjust} />
      </div>
    </div>
  );
}

export default App;
