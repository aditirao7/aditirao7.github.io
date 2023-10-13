import * as React from "react";
import { projectsData } from "../../data.js";
import { Section, Title, Grid, ProjectCard } from "./Layout.js";

const Projects = () => {
  return (
    <Section
      id="projects"
      padding="py-9 md:py-20 2xl:py-20"
      gap="gap-12"
      bg="bg-gray-950"
    >
      <Title content="Projects"></Title>
      <Grid grid="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 gap-y-4 ">
        {projectsData.map((obj) => (
          <ProjectCard
            link={obj.href}
            pic={obj.picture}
            title={obj.title}
            description={obj.description}
            round={obj.round}
            size={obj.size}
            animate={obj.animate}
          ></ProjectCard>
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;
