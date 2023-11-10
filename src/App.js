import React from 'react';
import './styles.css'; // Import your CSS file here
import IconList from './IconList';

const Home = () => (
  <div>
    {/* Large background photo */}
    <div className="large-bg" id="home">
      <div className="bg-text">
        <Header />
      </div>
      <img src="/images/mountain.jpeg" alt="Background" />
    </div>

    {/* Transparent navigation bar */}
    <div className="navbar">
      <a href="#home">Home</a>
      <a href="#about-me">About Me</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>

    {/* About Me Section */}
    <div className="about-me-section" id="about-me">
      <div className="profile-pic">
        <img src="/images/Gus1.jpg" alt="Your Name" />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I'm a dedicated Computer Science student from Bellevue College with a passion for software and mobile application development. My academic journey is coupled with hands-on experience, having collaborated on Agile teams to create innovative Android/iOS applications. Beyond the classroom and development environment, I've honed my skills in customer-centric roles, blending technical expertise with effective communication. Always eager to embrace new challenges, I'm driven by a relentless pursuit of technological excellence and continuous learning.
        </p>
      </div>

      <div className="resume-button-container">
        <button className="resume-button">View Resume</button>
      </div>

      {/* Resume Modal */}
      <div id="resumeModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeResumeModal}>&times;</span>
          <iframe src="/images/GusGonCSResume.pdf" width="100%" height="500px" title="Resume"></iframe>
          <a href="/images/GusGonCSResume.pdf" download className="download-link">Download Resume</a>
        </div>
      </div>
    </div>

    {/* Projects Section */}
    <div className="projects-section" id="projects">
      <h2>My Projects</h2>
      <IconList />


      {/* Sample project */}
      <div className="project project-reverse">
        <video className="project-video" autoPlay loop muted playsInline>
          <source src="images/AppVid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="project-description">
          <h3>MeCard - Personal Profile App</h3>
          <p>
            MeCard is a sleek iOS application designed to highlight professional profiles. Built using SwiftUI, it offers a user-friendly interface showcasing a profile picture and expandable sections detailing Introduction, Experience, and Additional Skills. The intuitive dropdown navigation allows users to seamlessly transition between the main views, ensuring that every aspect of a user's profile is easily accessible. With its modern design and smooth animations, MeCard serves as a digital business card, perfect for professionals seeking a polished, digital presence on iOS.
          </p>
        </div>
      </div>

      {/* Another Sample project */}
      <div className="project">
        <img src="images/FaceReg.png" alt="Another Personal App" />
        <div className="project-description">
          <h3>Real-Time Facial Recognition System</h3>
          <p>
            Overview: Developed a real-time facial recognition application using OpenCV in C++.<br />
            Key Features:<br />
            {/* Add project details here */}
          </p>
        </div>
      </div>

      {/* Add more project divs as needed */}
    </div>

    {/* Contact Section */}
    <div className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to get in touch with me through the following means:</p>

      {/* GitHub Icon */}
      <a href="https://github.com/Gustavo-Gon" target="_blank" className="social-icon">
        <i className="fab fa-github" />
      </a>

      {/* LinkedIn Icon */}
      <a href="https://www.linkedin.com/in/gustavo-gonzalez-218148296/" target="_blank" className="social-icon">
        <i className="fab fa-linkedin-in" />
      </a>

      {/* Email Icon */}
      <a href="javascript:void(0);" className="social-icon" id="email-icon">
        <i className="fas fa-envelope" />
      </a>

      {/* Hidden email container */}
      <div id="email-display" style={{ display: 'none' }}>
        gon.gustavo@outlook.com
      </div>
    </div>
  </div>
);

const Header = () => (
  <header>
    <h1>Gustavo Gonzalez</h1>
    <p>Software Engineer | Web/Mobile Developer</p>
  </header>
);

const closeResumeModal = () => {
  const resumeModal = document.getElementById('resumeModal');
  if (resumeModal) {
    resumeModal.style.display = 'none';
  }
};

const App = () => (
  <div>
    <Home />
  </div>
);

export default App;
