// Where the styling is
import "./App.css";

// connects pages after installing react-router-dom
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// imported page components
import Nav from './components/Nav/nav';
import Footer from "./components/Footer/footer";

//imported pages
import Home from "./pages/Home/home"; 
import About from "./pages/About/about"; 
import Projects from "./pages/Projects/projects"; 

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
