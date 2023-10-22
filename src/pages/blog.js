import * as React from "react";
import Navigation from "../components/Navigation";
import "../css/output.css";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import { Script } from "gatsby";

const BlogPage = () => {
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
      <Blog></Blog>
      <Footer></Footer>
    </main>
  );
};

export default BlogPage;
