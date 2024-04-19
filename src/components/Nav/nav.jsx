import { Link, NavLink } from 'react-router-dom';
import './nav.css'; // Import the stylesheet
import NavNameSVG from './navNameSVG.jsx'

function Nav() {
  return (
    <div className="navbar-container">
      <Link to="/" className="JHill"><NavNameSVG /></Link>
      <nav className="navbar">
        <NavLink to="/" className="nav-link" activeclasscame="active">Home</NavLink>
        <NavLink to="/about" className="nav-link" activeclasscame="active">About</NavLink>
        <NavLink to="/projects" className="nav-link" activeclasscame="active">Projects</NavLink>
      </nav>
    </div>
  );
}

export default Nav;
