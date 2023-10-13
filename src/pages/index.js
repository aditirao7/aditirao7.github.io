import * as React from "react";
import Navigation from "../components/Navigation";
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Project";
import "../css/output.css";

const IndexPage = () => {
  return (
    <main>
      <Navigation></Navigation>
      <Intro></Intro>
      <About></About>
      <Skills></Skills>
      <Work></Work>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
};

export default IndexPage;
