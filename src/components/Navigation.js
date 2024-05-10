import * as React from "react";
import { NavItem, useScroll } from "./Layout";
import { navData } from "../../data";

const Navigation = () => {
  var scrolled = useScroll();

  return (
    <div
      className={
        `text-gray-300 sticky top-0 z-30 w-full bg-gray ` +
        (scrolled ? ` backdrop-blur-xl md:border-gray-100` : `bg-gray-950`)
      }
    >
      <div className="relative flex mx-auto justify-between max-w-xl p-5">
        {navData.map((obj, index) => (
          <NavItem
            href={obj.href}
            content={obj.content}
            icon={obj.icon}
            key={`contact-` + index}
          ></NavItem>
        ))}
        <div className="relative p-1">|</div>
        <div className="relative transition duration-300 hover:scale-110 bg-gray-50 text-gray-900 px-3 py-1 my-auto justify-center align-center rounded-md text-sm">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://bit.ly/4dCBYFt"
          >
            View CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
