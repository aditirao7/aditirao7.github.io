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
      <Script>
        {`
          var _paq = (window._paq = window._paq || []);
          /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
          _paq.push(["trackPageView"]);
          _paq.push(["enableLinkTracking"]);
          (function () {
            var u = "https://aditirao7.matomo.cloud/";
            _paq.push(["setTrackerUrl", u + "matomo.php"]);
            _paq.push(["setSiteId", "1"]);
            var d = document,
              g = d.createElement("script"),
              s = d.getElementsByTagName("script")[0];
            g.async = true;
            g.src = "//cdn.matomo.cloud/aditirao7.matomo.cloud/matomo.js";
            s.parentNode.insertBefore(g, s);
          })();
        `}
      </Script>
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
