import { useState } from "react";
import "./index.css";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Experiance from "./components/experiance/Experiance";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Header from "./components/header/Header";
import Navbar from "./components/Navbar/Navbar";
import { AboutMe } from "./components/about/About";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <AboutMe />
      <Skills />
      {/* <Experiance /> */}
      <Projects />
      {/* <Services /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
