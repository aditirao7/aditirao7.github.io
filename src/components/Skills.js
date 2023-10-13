import * as React from "react";
import { skillsData } from "../../data.js";
import { SkillCard, Section, Title, Grid } from "./Layout";

const About = () => {
  return (
    <Section
      id="skills"
      padding="py-9 md:py-20 2xl:py-20"
      gap="gap-12"
      bg="bg-gray-950"
    >
      <Title content="Skills"></Title>
      <Grid grid="grid-cols-2 gap-4 gap-y-4 sm:grid-cols-3 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        {skillsData.map((obj) => (
          <SkillCard
            logo={obj.logo}
            skill={obj.title}
            src={obj.href}
          ></SkillCard>
        ))}
      </Grid>
    </Section>
  );
};

export default About;
