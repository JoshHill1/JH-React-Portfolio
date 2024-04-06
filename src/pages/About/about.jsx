import "./about.css";
import JoshBodyPhoto from "../../assets/aboutContent/JoshBodyPhoto.png"
import OnlyOneInBuilding from "../../assets/aboutContent/OnlyOneInBuilding.mov"
import MaskedUp from "../../assets/aboutContent/MaskedUp.png"
import MaskedUp1 from "../../assets/aboutContent/MaskedUp1.png"
import COVIDTest from "../../assets/aboutContent/COVIDTest.png"
import WebAuthFinal from "../../assets/aboutContent/WebAuthFinal.png"
import ASU_Bootcamp_CERT_JH from "../../assets/aboutContent/ASU_Coding_Bootcamp_CERT_Joshua_Hill.png"


function About() {
  return (
    <div className="aboutp">
      <section className="aboutp-intro">
        <div className="aboutp-intro-text">
          <h1>Allow me introduce myself.</h1>
          <p>My name is Joshua Hill.</p>
          <p>My journey into design began with a childhood immersed in video games, where I would always be pushing for excellence to get to the next level in a more strategic way. Along with that, I grew a keen eye for detail.</p>
        </div>
        <img src={JoshBodyPhoto} alt="An image of me" />
      </section>
      <div className="flex-about">
        <div id="some-pics-vid">
          <img src={COVIDTest} alt="Me at a covid test for school" />
          <video autoPlay loop muted playsInline>
            <source src={OnlyOneInBuilding} type="video/mp4"/>
          </video>
          <img src={MaskedUp} alt="Me on campus wearing an ASU COVID mask" />
          <img src={MaskedUp1} alt="Me on campus wearing an ASU COVID mask" />
        </div>
        <p>Entering Arizona State University, undecided on what I really wanted to pursue, I knew that technology was what I was drawn towards. After my first year, although I grew basic skills in exploring different Adobe apps and playing with the basics of Blender, I knew the major I was in was not the right fit for me.</p>
      </div>
      <div className="flex-about">
        <p>Transitioning to Graphic Information Technology expanded my mind with a simple web authoring course. That single class of learninng basic HTML and CSS sparked curiosity about the vast potential of web development.</p>
        <a href="https://www.public.asu.edu/~jjhill12/GIT215/Final/index.html" target="_blank"><img src={WebAuthFinal} alt="My Final project in web authoring class" /></a>
      </div>
      <div className="flex-about">
      <img src={ASU_Bootcamp_CERT_JH} alt="Joshua Hill Coding Bootcalp Certificate" />
      <p>After my third year, a yearning for deeper knowledge led me to take a gap year dedicated to deepening my understanding of web creation. The first six months were transformative, taking a comprehensive full-stack web development bootcamp that laid the foundation for building intricate full-stack applications.</p>
      </div>

    </div>
  );
}

export default About;