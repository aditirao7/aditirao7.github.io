import * as React from "react";
import Navigation from "../components/Navigation";
import "../css/output.css";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const BlogPage = () => {
  return (
    <main>
      <Navigation></Navigation>
      <Blog></Blog>
      <Footer></Footer>
    </main>
  );
};

export default BlogPage;
