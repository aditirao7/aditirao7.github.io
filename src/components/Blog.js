import * as React from "react";
import { BlogCard, Grid } from "./Layout.js";
import { useState, useEffect } from "react";
import Loading from "../images/loading.gif";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?		    rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40aditirao725"
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (data.status === "ok") {
          setBlogs([...data.items]);
          setIsLoaded(true);
        }
      });
  }, []);

  return (
    <div
      id="blog"
      className="px-9 sm:px-9 md:px-28 lg:px-36 2xl:px-48 py-9 sm:py-16 md:py-20 bg-gray-900"
    >
      <div className="blog-title flex items-center justify-center pb-10 text-gray-50 text-2xl sm:text-3xl font-semibold md:font-bold md:text-4xl lg:text-5xl">
        <span>📚 Techtangles and Tangents</span>
      </div>
      {isLoaded ? (
        <Grid grid="mx-auto md:mx-0 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
          {blogs.map((obj, index) => (
            <BlogCard
              img={obj.thumbnail}
              title={obj.title}
              link={obj.link}
              tags={obj.categories}
              date={new Date(obj.pubDate)}
              key={"blog-" + index}
            ></BlogCard>
          ))}
        </Grid>
      ) : (
        <div className="text-center pt-8">
          <img className="m-auto" src={Loading} />
          <figcaption className="text-gray-50 font-bold text-sm">
            LOADING...
          </figcaption>
        </div>
      )}
    </div>
  );
};

export default Blog;
