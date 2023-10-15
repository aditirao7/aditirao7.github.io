import * as React from "react";
import { Section, Photo, Title } from "./Layout";
import { aboutData } from "../../data";

const About = () => {
  return (
    <Section
      id="about"
      padding="py-9 md:py-20 2xl:py-20"
      gap="gap-12"
      bg="bg-gray-900"
    >
      <Title content="About Me"></Title>
      <div className="flex w-full flex-col justify-between gap-12 md:flex-row max-w-6xl">
        <Photo picture={aboutData.picture} bg="border-gray-900"></Photo>
        <div className="text-gray-300 flex max-w-5xl flex-col gap-6">
          <p className="text-2xl font-bold">{aboutData.headline}</p>
          {aboutData.content.map((obj, index) => (
            <p key={`about-` + index}>{obj}</p>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
