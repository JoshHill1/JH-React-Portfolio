import { Link, NavLink } from 'react-router-dom';
import './nav.css'; // Import the stylesheet

function Nav() {
  return (
    <div className="navbar-container">
      <h1><Link to="/" className="JHill">J Hill</Link></h1>
      <nav className="navbar">
        <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </div>
  );
}

export default Nav;
