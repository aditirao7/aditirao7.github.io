import * as React from "react";
import { MapPin } from "lucide-react";
import { Photo, Section } from "./Layout";
import { introData } from "../../data.js";

const Intro = () => {
  return (
    <Section
      id="hero"
      padding="py-9 md:py-20 2xl:py-20"
      gap="gap-12 md:flex-row"
      bg="bg-gray-950"
    >
      <Photo picture={introData.picture} bg="border-gray-950"></Photo>
      <div className="text-gray-300 flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
        <div id="content" className="flex flex-col gap-2">
          <div className="hello text-gray-50 text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px]">
            {introData.hello}
            <span className="inline-block animate-waving-hand px-5">👋🏽</span>
          </div>
          <span id="headline">{introData.headline}</span>
        </div>
        <div className="flex flex-col gap-2 ">
          <div id="location" className="flex gap-2">
            <MapPin />
            <p>{introData.location}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
              </span>
            </div>
            <div id="available">{introData.status}</div>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          {introData.socials.map((obj, index) => (
            <a
              className="relative transition duration-300 hover:scale-125"
              href={obj.href}
              target="_blank"
              rel="noreferrer"
              key={`social-` + index}
            >
              <obj.Icon color="white" size={20} />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Intro;
