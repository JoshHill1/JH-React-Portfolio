import { Link, NavLink } from 'react-router-dom';
import './nav.css'; // Import the stylesheet

function Nav() {
  return (
    <div className="navbar-container">
      <h1><Link to="/" className="JHill">J Hill</Link></h1>
      <nav className="navbar">
        <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
        <NavLink to="/projects" className="nav-link" activeClassName="active">Projects</NavLink>
        <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
      </nav>
    </div>
  );
}

export default Nav;
