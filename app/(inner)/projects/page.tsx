import React from "react";

import AnimatedButton from "@/components/FancyButton";
import H2 from "@/components/text/H2";

const ProjectsArray = [
    {
        title: "Holidaze",
        description: "This is a description of project 1",
        stack: ["React", "TypeScript", "TailwindCSS"],
    },
    {
        title: "Project 2",
        description: "This is a description of project 2",
        stack: ["React", "TypeScript", "TailwindCSS"],
    },
    {
        title: "Project 3",
        description: "This is a description of project 3",
        stack: ["React", "TypeScript", "TailwindCSS"],
    },
];

const Projects = () => {
    return (
        <article>
            {ProjectsArray.map((project, index) => (
                <div key={index}>
                    <H2>{project.title}</H2>
                    <p>{project.description}</p>
                    {project.stack && (
                        <ul>
                            {project.stack.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                    <AnimatedButton>Demo</AnimatedButton>
                </div>
            ))}
        </article>
    );
};

export default Projects;
