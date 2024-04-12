// Where the styling is
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";

// connects pages after installing react-router-dom
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// imported page components
import Nav from "./components/Nav/nav";
import Footer from "./components/Footer/footer";

//imported pages
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Projects from "./pages/Projects/projects";
import NotFound from "./pages/Error/notFound";

// maps out which project is being clicked on and then displays that specific project page
import ProjectDetails from "./pages/projectDetails/projdetails";

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
        
      },
      {
        // maps out which project is clicked on and changes the URL to the id of that project - defined in projectdetailcontainer.jsx and in projData.jsx
        path: "/projects/:id",
        element: <ProjectDetails />
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
