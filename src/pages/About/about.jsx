import "./about.css";
import "../../index.css";
import JoshBodyPhoto from "../../assets/aboutContent/JoshBodyPhoto1.png"
import OnlyOneInBuilding from "../../assets/aboutContent/OnlyOneInBuilding.mov"
import WebAuthFinal from "../../assets/aboutContent/WebAuthFinal.png"
import ASU_Bootcamp_CERT_JH from "../../assets/aboutContent/ASU_Coding_Bootcamp_CERT_Joshua_Hill.png"
// import Skills from "../../components/Skills/skills.jsx"

function About() {
  return (
    <div className="aboutp">
      <section className="aboutp-intro">
        <div className="aboutp-intro-text">
          <h1>Allow me introduce myself.</h1>
          <p>My name is Joshua Hill.</p>
          <p>I am a product designer, with a <span className="highlighted">focus on building full-stack applications</span> and helping <span className="highlighted">convey meaningful and impactful designs</span> to users. I like to build structured wireframes and <span className="highlighted">linking elements together</span> for a better user experience <span className="highlighted">&#40;UX&#41;</span>. I also <span className="highlighted">enjoy working with the interface &#40;UI&#41;</span> of applications and making them more visually pleasing to <span className="highlighted">leave lasting impressions</span> for the user. 
          <br />
          <br />Whether I'm <span className="highlighted">playing with pencils</span> and paint, <span className="highlighted">generating graphics</span> through my expressive imagination, or <span className="highlighted">structuring website building blocks</span>, I like to learn different technologies and <span className="highlighted">further my design skills.</span> 
          <br />
          <br /><span className="highlighted">I enjoy video games</span>, allowing my mind to be <span className="highlighted">immersed in a different setting</span> while playing, as it is something I gravitated to in my childhood and plays a factor in <span className="highlighted">where I get my creativity</span> and <span className="highlighted">problem solving skills</span>. Similarly, <span className="highlighted">I enjoy long bike rides</span> and continue practicing <span className="highlighted">martial arts</span>. I also spend time learning a new language &#40;currently studying Japanese&#41;, reading a book, and catching up on YouTube videos.</p>
        </div>
        <img src={JoshBodyPhoto} alt="An image of me" />
      </section>
      <div className="quote-text">
        <p>"I want people to know me for my attention to detail. I like to look at the little things and turn it into something bigger than it is when someone views the page. I want to work with a team that is passionate about making appealing design experiences or applications that use industry standard technology and best practices to make an idea come to life!"</p>
      </div>
      {/* <Skills /> */}
    </div>
  );
}

export default About;