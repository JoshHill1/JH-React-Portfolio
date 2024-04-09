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

// for routing to different project pages
// in featured projects component
import FeatProj from "./components/FeaturedProject/featproj"
// in project cards component
import ProjectCards from "./components/ProjectCards/projectcards"
// Used to display boilerplate data
import ProjectDetails from "./pages/projectDetails/projdetails"
import ProjData from "./data/projData";


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<FeatProj ProjData={ProjData} />} />
        <Route path="/" element={<ProjectCards ProjData={ProjData} />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
