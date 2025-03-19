import { projects } from "@/data";
import React from "react";
import { Card } from "./ui/Card";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        Uma pequena seleção de <span className="text-purple">projetos</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center py-4 gap-x-8 gap-y-8 mt-10">
        {projects.map(
          ({ id, title, des, img, iconLists, linkGithub, linkDeploy }) => (
            <div
              key={id}
              className="h-full flex items-center justify-center w-[620px]"
            >
              <Card
                title={title}
                des={des}
                img={img}
                iconLists={iconLists}
                linkGithub={linkGithub}
                linkDeploy={linkDeploy}
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
