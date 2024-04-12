import React from 'react';

import "./home.css";
import "../../index.css";
import ImAText from "../../components/ImAText/imatext.jsx"
import JHeadshot from '../../assets/images/JHeadshot.png'
import FeatProj from "../../components/FeaturedProject/featproj.jsx";
import projData from '../../data/projData.jsx';

import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="homep">
      <h1 className='outfit-font'>Hi, I'm Josh</h1>
      <div id="flex-for-homep">
        <div className="left-of-homep">
          <h2 id="DigitalCreator">
            A Digital Creator.
          </h2>
          <p className='outfit-font'>
            With a passion for web design, my interests also revolve around staying in the loop with trends involving Adobe Photoshop & Illustrator and following best practices for UX/UI. As a former gamer, I bring the same excitement and innovation to my work. I'm eager to explore new challenges and collaborate with teams who share my passion for making the digital world more beautiful and accessible.
          </p>
          <Link to="/projects" className='my-work-btn'><button className='outfit-font-bold'>View My Work</button></Link>
        </div>
        <div className="right-of-homep">
          <div className="me-and-social-btns">
            <div className="me-cover">
              <Link to="/about">
                <img
                  className='me-cover-img'
                  src={JHeadshot}
                  alt="A headshot of what I look like."
                  />
              </Link>
              <div className="learn-more-text-in-headshot">
                <p>Learn More About Me :&#41;</p>
              </div>
            </div>
            <div className="social-btns">
              <a target="_blank" href="https://www.linkedin.com/in/joshuahillaz0d/"><i className='bx bxl-linkedin'></i></a>
              <a target="_blank" href="https://github.com/JoshHill1"><i className='bx bxl-github'></i></a>
              <a target="_blank" href="https://www.instagram.com/josh_hil1/"><i className='bx bxl-instagram-alt'></i></a>
            </div>
          </div>
          <div id="imatextflex">
            <p>I'm A&nbsp;</p>
            <ImAText />
          </div>
        </div>
      </div>
      <FeatProj projData={projData} />
    </div>
    
  );
}

export default Home;
