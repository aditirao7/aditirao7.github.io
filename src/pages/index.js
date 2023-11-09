import * as React from "react";
import Navigation from "../components/Navigation";
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Project";
import { projectsData } from "../../data.js";
import "../css/output.css";
import { Script } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <Script>
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "jf08r7ngtd");
        `}
      </Script>
      <Navigation></Navigation>
      <Intro></Intro>
      <About></About>
      <Skills></Skills>
      <Work></Work>
      <Projects data={projectsData}></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
};

export default IndexPage;
