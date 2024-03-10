import React, { useState } from 'react';
import './styles.css';

const Home = () => {

  const [webSectionExpanded, setWebSectionExpanded] = useState(false);
  const [appSectionExpanded, setAppSectionExpanded] = useState(false);
  const [moreSectionExpanded, setMoreThanCodeExpand] = useState(false);


  const toggleWebSection = () => {
    setWebSectionExpanded(!webSectionExpanded);
  };

  const toggleAppSection = () => {
    setAppSectionExpanded(!appSectionExpanded); 
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
                <h3>Full-Stack Development utilizing React and AWS</h3>

                <div className="page-row">
                  <a href="https://www.acaciaelectric.com" target="_blank" rel="noopener noreferrer">
                    <img src="/portfolio/images/acacia.png" alt="Acacia" className="page-image" />
                  </a>
                  <a href="https://gustavo-gon.github.io/portfolio" target="_blank" rel="noopener noreferrer">
                    <img src="/portfolio/images/portfolio.png" alt="Portfolio" className="page-image" />
                  </a>

                </div>
  
              </>
              )}
          </div>


          <div className={`web ${appSectionExpanded ? 'expanded' : ''}`} id="web-section" onClick={toggleAppSection}>
            <h2>App Development</h2>
            {appSectionExpanded && (
              <>
                <h3>E-Commerces App in Development for Capstone </h3>

              </>
              )}
          </div>

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
