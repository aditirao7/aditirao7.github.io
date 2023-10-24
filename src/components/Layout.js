import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export const NavItem = (props) => {
  return (
    <div className="relative transition duration-300 hover:scale-110 p-1">
      <a className="navItem hidden sm:block" href={props.href}>
        {props.content}
      </a>
      <a className="navItem block sm:hidden" href={props.href}>
        <props.icon size={25} />
      </a>
    </div>
  );
};

export const Grid = (props) => {
  return (
    <div className="flex w-full flex-col justify-between gap-12 md:flex-row max-w-6xl">
      <div className={`grid ` + props.grid}>{props.children}</div>
    </div>
  );
};

export const Photo = (props) => {
  return (
    <div className="flex items-center justify-center md:order-start md:flex-grow md:justify-start">
      <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
        <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-700 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
        <img
          src={props.picture}
          className={`absolute z-10 h-[280px] w-[240px] border-8 max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px] ${props.bg}`}
          style={{ objectFit: "cover" }}
          alt="Aditi Rao"
        />
      </div>
    </div>
  );
};

export const ProjectCard = (props) => {
  return (
    <a href={props.link} rel="noreferrer" target="_blank">
      <div className="relative w-64 h-64 text-gray-300 bg-zinc-900 rounded-xl flex flex-col border border-gray-500 border-opacity-10 hover:bg-zinc-800 gap-1 group p-2">
        <div
          className="absolute top-5 right-5
                  transition duration-300 
                  opacity-0 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:opacity-100"
        >
          <ArrowUpRight size={25}></ArrowUpRight>
        </div>
        <div>
          <p className="text-2xl text-center font-bold pt-8">{props.title}</p>
          <p className="text-gray-400 text-sm text-center mt-2">
            {props.description}
          </p>
        </div>
        <img
          className={
            `m-auto group-hover:-translate-y-1 ` +
            props.round +
            ` ` +
            props.animate
          }
          src={props.pic}
          width={props.size}
          height={props.size}
          alt={props.title}
        />
      </div>
    </a>
  );
};

export const Section = (props) => {
  return (
    <section
      id={props.id}
      className={
        `text-gray-300 flex w-full bg-gray px-8 ` +
        props.padding +
        ` ` +
        props.bg
      }
    >
      <div
        className={`flex flex-col mx-auto flex-w-full max-w-6xl ` + props.gap}
      >
        {props.children}
      </div>
    </section>
  );
};

export const SkillCard = (props) => {
  return (
    <a rel="noreferrer" href={props.src} target="_blank">
      <div className="relative md:w-28 md:h-28 w-32 h-32 text-gray-300 bg-zinc-900 rounded-xl flex flex-col border border-gray-500 border-opacity-10 hover:bg-zinc-800 gap-1 group p-2">
        <div
          className="absolute top-5 right-5
                transition duration-300 
                opacity-0 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:opacity-100"
        >
          <ArrowUpRight size={15}></ArrowUpRight>
        </div>
        <img
          className="mx-auto my-8 md:my-5
                  transition duration-300 group-hover:-translate-y-1"
          src={props.logo}
          width="45"
          height="45"
          alt={props.skill}
        />
        <div
          className="absolute bottom-2 py-0.5 px-2 rounded-full border-1 text-opacity-0 border border-gray-500 border-opacity-10 rounded-xl"
          style={{ fontSize: 10 }}
        >
          {props.skill}
        </div>
      </div>
    </a>
  );
};

export const Title = (props) => {
  return (
    <div className="flex  self-center bg-gray-700 rounded-xl py-1 px-5 ">
      <p className="text-gray-300 font-medium text-sm text-normal">
        {props.content}
      </p>
    </div>
  );
};

export const WorkCard = (props) => {
  return (
    <div className="bg-gray-800 rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-4xl flex-col justify-between gap-8 p-8 md:flex-row md:gap-8 lg:gap-2 text-gray-300">
      <div className="justify-center text-center md:w-1/4 flex flex-row md:flex-col gap-4">
        <a rel="noreferrer" target="_blank" href={props.link}>
          <img
            className="transition duration-300 hover:-translate-y-2"
            src={props.logo}
            width={150}
            height={150}
            alt={props.company}
          ></img>
        </a>
      </div>

      <div className="flex flex-col gap-4 max-md:order-3 md:w-3/4">
        <span className="font-semibold md:font-bold text-xl italic">
          {props.title}
        </span>
        <span className="font-semibold">{props.date}</span>
        <ul className="list-disc">{props.children}</ul>
      </div>
    </div>
  );
};

export const BlogCard = (props) => {
  return (
    <a rel="noreferrer" target="_blank" href={props.link}>
      <div className="blog-card text-gray-300 justify-between bg-gray-900 rounded-xl flex flex-col border border-gray-500 border-opacity-10 transition duration-300 hover:-translate-y-1 gap-4 p-2 h-full">
        <img
          src={props.img}
          width={260}
          height={240}
          alt={props.title}
          className="rounded-xl p-1 self-center"
        />
        <div className="font-bold text-lg px-2 self-center text-center">
          {props.title}
        </div>
        <div className="self-center">
          <p className=" italic text-sm px-2 py-2 text-center">
            {props.date.toLocaleString("default", { month: "long" }) +
              " " +
              props.date.getDate() +
              ", " +
              props.date.getFullYear()}
          </p>
          <div className="flex flex-row gap-2 px-2 py-1">
            {props.tags.map((obj, index) => (
              <div
                key={`tag-` + index}
                className="flex bg-[#1B1E34] rounded-md py-1 px-5"
              >
                <p className="text-[#4B6BFB] font-medium text-sm text-normal">
                  {obj}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export function useScroll() {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 80);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return scrolled;
}
