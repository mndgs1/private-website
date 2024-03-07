import React from "react";
import { Metadata } from "next";

import projects from "@/app/api/projects";
import ProjectCard from "./components/ProjectCard";

export const metadata: Metadata = {
    title: "Projects | MB",
    description:
        "Mindaugas Bankauskas - Front-End Developer webpage. My projects.",
};

const Projects = () => {
    return (
        <article className="">
            {projects.map((project) => (
                <ProjectCard {...project} key={project.title}></ProjectCard>
            ))}
        </article>
    );
};

export default Projects;
