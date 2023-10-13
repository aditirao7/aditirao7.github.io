import * as React from "react";
import { workData } from "../../data.js";
import { WorkCard, Section, Title } from "./Layout.js";

const Work = () => {
  return (
    <Section
      id="work"
      padding="py-9 md:py-20 2xl:py-20"
      gap="gap-8"
      bg="bg-gray-900"
    >
      <Title content="Work Experience"></Title>
      {workData.map((obj) => (
        <WorkCard
          title={obj.title}
          logo={obj.logo}
          date={obj.duration}
          link={obj.href}
        >
          {obj.points.map((pt) => (
            <li>{pt}</li>
          ))}
        </WorkCard>
      ))}
    </Section>
  );
};

export default Work;
