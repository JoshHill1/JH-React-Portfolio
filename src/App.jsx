// Where the styling is
import "./App.css";

// connects pages after installing react-router-dom
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// imported page components
import Nav from './components/Nav/nav';

//imported pages
import Home from "./pages/Home/home"; // Updated path with lowercase filename
import About from "./pages/About/about"; // Updated path with lowercase filename
import Projects from "./pages/Projects/projects"; // Updated path with lowercase filename
import Contact from "./pages/Contact/contact"; // Updated path with lowercase filename

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
