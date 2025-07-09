// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar"; // Make sure you're importing AppNavbar now
import About from "./components/About"; // Import the About component
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Navbar /> {/* Render the Navbar component */}
      {/* This header can serve as a "Hero" section. We can refine it later. */}
      <header className="App-header">
        <h1 className="display-3 fw-bold">Portfolio</h1>{" "}
        {/* Using Bootstrap classes here */}
        <p className="lead">
          Motivated and detail-oriented IT professional | Cybersecurity
          Enthusiast
        </p>
      </header>
      <About /> {/* Render the About component here */}
      <Projects/> {/* Other sections will go below About */}
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
