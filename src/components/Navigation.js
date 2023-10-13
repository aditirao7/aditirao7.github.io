import * as React from "react";
import Resume from "../files/Aditi_Rao_Resume.pdf";

import { NavItem, useScroll } from "./Layout";
import { navData } from "../../data";

const Navigation = () => {
  var scrolled = useScroll(80);

  return (
    <div
      className={
        `text-gray-300 sticky top-0 z-30 w-full bg-gray ` +
        (scrolled ? ` backdrop-blur-xl md:border-gray-100` : `bg-gray-950`)
      }
    >
      <div className="relative flex mx-auto justify-between max-w-xl p-5">
        {navData.map((obj) => (
          <NavItem
            href={obj.href}
            content={obj.content}
            icon={obj.icon}
          ></NavItem>
        ))}
        <div className="relative p-1">|</div>
        <div className="relative transition duration-300 hover:scale-110 bg-gray-50 text-gray-900 px-5 py-1 justify-center align-center rounded-xl">
          <a target="_blank" href={Resume}>
            View CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
