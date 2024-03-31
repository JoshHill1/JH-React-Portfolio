import { Link } from 'react-router-dom';
import './footer.css'

import FooterTransition from '../../assets/footerTransition/footerTransition.jsx';

function Footer() {
  return (
    <div className='whole-entire-footer'>
      <FooterTransition />

      <div className='whole-footer'>
      <section className="footer-text">
        <h2>NAVIGATION</h2>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/projects">PROJECTS</Link>
      </section>

      <section className="footer-text">
        <h2>CONTACT</h2>
        <p>California</p>
        <a href='https://www.linkedin.com/in/joshuahillaz0d/'>Connect on LinkedIn</a>
      </section>

      {/* <section className="footer-text">
        <h2>Follow Me On:</h2>

      </section> */}
      </div>

    </div>
  )
}

export default Footer;