import React from 'react';

import "./home.css";
import ImAText from "../../components/ImAText/imatext.jsx"

import FeatProj from "../../components/FeaturedProject/featproj.jsx";
import projData from '../../data/projData.jsx';


function Home() {
  return (
    <div className="homep">
      <h1>Hi, I'm Josh</h1>
      <div id="flex-for-homep">
        <div className="right-of-homep">
          <h2 id="DigitalCreator">
            A Digital Creator.
          </h2>
          <p>
            With a passion for web design, my interests also revolve around staying in the loop with trends involving Adobe Photoshop & Illustrator and following best practices for UX/UI. As a former gamer, I bring the same excitement and innovation to my work. I'm eager to explore new challenges and collaborate with teams who share my passion for making the digital world more beautiful and accessible.
          </p>
          <button>View All of My Work :&#41;</button>
        </div>
        <div className="left-of-homep">
          <div className="me-and-social-btns">
            <img
              src="https://via.placeholder.com/640x640"
              alt="A photo of me."
              style={{ width: "300px", height: "auto" }}
            />
            <div className="social-btns">
              <a target="_blank" href="https://www.linkedin.com/in/joshuahillaz0d/"><i class='bx bxl-linkedin'></i></a>
              <a target="_blank" href="https://github.com/JoshHill1"><i class='bx bxl-github'></i></a>
              <a target="_blank" href="https://www.instagram.com/josh_hil1/"><i class='bx bxl-instagram-alt'></i></a>
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
