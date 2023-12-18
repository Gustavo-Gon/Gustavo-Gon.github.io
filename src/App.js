import React, { useState } from 'react';
import './styles.css';

const Home = () => {

  const [webSectionExpanded, setWebSectionExpanded] = useState(false);
  const [plSectionExpanded, setPlSectionExpanded] = useState(false);
  const [appsSectionExpanded, setAppsSectionExpanded] = useState(false);

  const toggleWebSection = () => {
    setWebSectionExpanded(!webSectionExpanded);
  };

  const togglePlSection = () => {
    setPlSectionExpanded(!plSectionExpanded);
  };

  const toggleAppsSection = () => {
    setAppsSectionExpanded(!appsSectionExpanded);
  };

  return (
    <div className="over">
      <div className="large-bg" id="home">
        <div className="bg-text">
          <Header />
        </div>
        <img src="/portfolio/images/mountain.jpeg" alt="Background" />
      </div>

      <div className="navbar">
        <a href="#home">Home</a>
        <a href="#about-me">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="about-me-section" id="about-me">
          <div className="profile-card">
            <div className="profile-pic">
              <img src="/portfolio/images/Gus1.jpg" alt="Your Name" />
              </div>
                <div className="about-text">
                <h2>About Me</h2>
                <p>
                I'm a dedicated Computer Science student from Bellevue College with a passion for software and mobile application development. My academic journey is coupled with hands-on experience, having collaborated on Agile teams to create innovative Android/iOS applications. Beyond the classroom and development environment, I've honed my skills in customer-centric roles, blending technical expertise with effective communication. Always eager to embrace new challenges, I'm driven by a relentless pursuit of technological excellence and continuous learning.
                </p>
              </div>
            </div>
      </div>

      <div className="projects-section" id="projects">
        <h1 className="myPro">My Projects</h1>
        <div className="icons">
          <img src='/portfolio/images/c-.png' alt='C++'></img>
          <img src='/portfolio/images/java.png' alt='Java'></img>
          <img src='/portfolio/images/python.png' alt='Python'></img>
          <img src='/portfolio/logo192.png' alt='React'></img>
          <img src='/portfolio/images/css-3.png' alt='HTML'></img>
          <img src='/portfolio/images/html-5.png' alt='CSS'></img>
          <img src='/portfolio/images/js.png' alt='JavaScript'></img>
          <img src='/portfolio/images/php.png' alt='PHP'></img>
        </div>

        <div className="projects-container" id="projects">
          <div className={`web ${webSectionExpanded ? 'expanded' : ''}`} id="web-section" onClick={toggleWebSection}>
            <h2>Web Frameworks</h2>
            {webSectionExpanded && (
              <>
                <p>View my projects utilizing AWS, React, and databases. </p>


              </>
              )}
          </div>
          <div className={`pl ${plSectionExpanded ? 'expanded' : ''}`} id="pl-section" onClick={togglePlSection}>
            <h2>Computer Vision</h2>
            {plSectionExpanded && (
              <>
                <p>Facial Recognition using C++ and openCV.</p>
                <img src="/portfolio/images/FaceReg.png" alt="face" className="face" />

              </>
              )}
          </div>
          <div className={`apps ${appsSectionExpanded ? 'expanded' : ''}`} id="apps-section" onClick={toggleAppsSection}>
            <h2>App development</h2>
            {appsSectionExpanded && (
              <>
                <p>App development using Xcode and Android Studio.</p>
                <video src="/portfolio/images/AppVid.mp4" alt="app" className="project-video" autoPlay></video>


              </>
              )}
          </div>
        </div>

  
      </div>

      <div className="contact-section" id="contact">

        <h2>Contact Me</h2>
        <p>Feel free to get in touch with me through the following means:</p>
        <div className="social-icons-container">
          <a href="https://github.com/Gustavo-Gon" target="_blank" className="social-icon">
          <img src="/portfolio/images/githublogo.png" alt='github' className='social-icon'></img>
        </a>

        <a href="https://www.linkedin.com/in/gustavo-gonzalez-218148296/" target="_blank" className="social-icon">
        <img src="/portfolio/images/inlogo.png" alt='linkedin' className='social-icon'></img>
        </a>
      </div>

      </div>


    </div>
  );
};

const Header = () => (
  <header>
    <h1>Gustavo Gonzalez</h1>
    <p>Software Engineer | Web/Mobile Developer</p>
  </header>
);

export default Home;
