import React, { useState } from 'react';
import './styles.css';

const Home = () => {

  const [webSectionExpanded, setWebSectionExpanded] = useState(false);
  const [appSectionExpanded, setAppSectionExpanded] = useState(false);
  const [cyberSectionExpanded, setCyberSectionExpanded] = useState(false);
  const [boardSectionExpanded, setBoardSectionExpanded] = useState(false);
  const [moreSectionExpanded, setMoreThanCodeExpand] = useState(false);
 


  const toggleWebSection = () => {
    setWebSectionExpanded(!webSectionExpanded);
  };

  const toggleAppSection = () => {
    setAppSectionExpanded(!appSectionExpanded); 
  };

  const toggleCyberSection = () => {
    setCyberSectionExpanded(!cyberSectionExpanded);
  };

  const toggleBoardSection = () => {
    setBoardSectionExpanded(!boardSectionExpanded);
  };

  const toggleMoreSection = () => {
    setMoreThanCodeExpand(!moreSectionExpanded); 
  };


  return (
    <div className="over">
    <div className="header-bg">
      <img src="/portfolio/images/mountain.jpeg" alt="Background" className="mountain-image" />

      <img src="/portfolio/images/Gus2.jpeg" alt="Your Name" className="profile-image" />
    </div>

    <div className="title">
      <h1>Gustavo Gonzalez</h1>
      <h3>Software Developer</h3>

        <div className="image-row">
          <a href="https://github.com/Gustavo-Gon" target="_blank" rel="noopener noreferrer">
            <img src="/portfolio/images/githublogo.png" alt="Github" className="icon-image" />
          </a>
          <a href="https://www.linkedin.com/in/gustavo-gonzalez-218148296/" target="_blank" rel="noopener noreferrer">
            <img src="/portfolio/images/inlogo.png" alt="LinkedIn" className="icon-image" />
          </a>
          <a href="mailto:gon.gustavo@outlook.com">
            <img src="/portfolio/images/envelope.png" alt="Email" className="icon-image" />
          </a>
        </div>


    </div>


          <div className={`web ${webSectionExpanded ? 'expanded' : ''}`} id="web-section" onClick={toggleWebSection}>
            <h2>Web Frameworks</h2>
            {webSectionExpanded && (
              <>

                <div className="page-row">
                  <h3 className='cap'>Full Stack Development utilizing React and AWS</h3>
                  <a href="https://www.acaciaelectric.com" target="_blank" rel="noopener noreferrer">
                    <img src="/portfolio/images/acacia-site.png" alt="Acacia" className="page-image1" />
                  </a>
                  
                  <h3 className='cap'>MERN Stack Web App hosted on FireBase</h3>
                  <h6>***Local Backend Server Only At The Moment***</h6>
                  <a href="https://trailblazers-b46b2.web.app" target="_blank" rel="noopener noreferrer">
                    <img src="/portfolio/images/trailblazers.png" alt="MERN" className="page-image1" />
                  </a>

                  <h3 className='cap'>Static React App hosted on Github Pages</h3>
                  <a href="https://github.com/Gustavo-Gon/portfolio" target="_blank" rel="noopener noreferrer">
                    <img src="/portfolio/images/portfolio.png" alt="Portfolio" className="page-image2" />
                  </a>

                </div>  
  
              </>
              )}
          </div>


          <div className={`web ${appSectionExpanded ? 'expanded' : ''}`} id="web-section" onClick={toggleAppSection}>
            <h2>App Development</h2>
            {appSectionExpanded && (
              <>

                    <h3 className='cap'>Mock Social Media App Developed with SwiftUI</h3>
                    <div className="page-row1">
                      <img src="/portfolio/images/socialApp.png" alt="Social App" className="page-image3" />
                    </div>

                    <h3 className='cap'>Native Android E-Commerce App for Capstone Project </h3>
                    <div className="page-row1">
                      <img src="/portfolio/images/returnpal.png" alt="Service App" className="page-image3" />
                    </div>
              </>
              )}
          </div>

        {/*
          <div className={`web ${cyberSectionExpanded ? 'expand' : ''}`} id="web-selection" onClick={toggleCyberSection}>
            <h2>Cyber Security & Network</h2>
            {cyberSectionExpanded && (
              <>
                <h3>SQL Injection</h3>

                <h3>Network Monitoring</h3>
              
              
              </>
            )}
          </div>
          

          <div className={`web ${boardSectionExpanded ? 'expand' : ''}`} id="web-selection" onClick={toggleBoardSection}>
            <h2>Raspberry Pi & Arduino</h2>
            {boardSectionExpanded && (
              <>
              
              
              </>
            )}
          </div>

             */}

          <div className={`web ${moreSectionExpanded ? 'expanded' : ''}`} id="web-section" onClick={toggleMoreSection}>
            <h2><i>More Than Just Code</i></h2>
            {moreSectionExpanded && (
              <>
                <h3>Prototyping to Development </h3>
                <div className="image-row">
                  <a href="https://www.figma.com/@gustavogon" target="_blank" rel="noopener noreferrer">
                    <img src="/portfolio/images/figma.png" alt="Figma" className="icon-image" />
                  </a>
                  <a href="https://lightroom.adobe.com/u/gustavogonzalez68?_height=1080&_width=1920&_branch_match_id=1191568301653393751&_open_delay_ms=3000&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8lMzygpys%2FP1UssKNDLyczL1nf1qyjNrczxc3ZLso%2FPSAUpsDU0sDBQiy%2FPTCnJsDW0NDIAAOk5sy4%2FAAAA" target="_blank" rel="noopener noreferrer">
                    <img src="/portfolio/images/lightroom.png" alt="Lightroom" className="icon-image" />
                  </a>
                </div>

                <div className="prototyping-section">
                  <iframe 
                    style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} 
                    width="100%" 
                    height="400" 
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FElXmFJ6HqxbPr178QoaxAd%2FPortfolio%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-2%26viewport%3D38%252C364%252C0.49%26t%3D4L1YBvSmj1XFxIBE-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2%26mode%3Ddesign" 
                    allowFullScreen>
                  </iframe>
                </div>
              </>
              )}
          </div>
  
      </div> 
  );
};


export default Home;
