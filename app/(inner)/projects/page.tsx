import React from "react";

import AnimatedButton from "@/components/FancyButton";
import H2 from "@/components/text/H2";
import H3 from "@/components/text/H3";

import ReactIcon from "@/components/Icons/React";
import TypeScript from "@/components/Icons/Typescript";
import Tailwind from "@/components/Icons/Tailwind";
import ReactRouter from "@/components/Icons/ReactRouter";
import ReactQuery from "@/components/Icons/ReactQuerry";
import Redux from "@/components/Icons/Redux";
import Image from "next/image";
import Link from "next/link";

const ProjectsArray = [
    {
        title: "Holidaze",
        description:
            "Holidaze is a fictional project created for my final exam in Noroff Front-end development course. The project is using Noroff API.",
        stack: [
            "React",
            "TypeScript",
            "TailwindCSS",
            "React Router",
            "React Query",
        ],
        image: "/static/images/Holidaze.png",
        links: {
            demo: "https://holidaze-mndgs1s-projects.vercel.app/",
            github: "https://github.com/mndgs1/Holidaze",
        },
    },
    {
        title: "weSell",
        description:
            "My first React project using Tailwind, Typescript, React & Redux.",
        stack: ["React", "TypeScript", "TailwindCSS", "Redux"],
        image: "/static/images/weSell.png",
        links: {
            demo: "https:///phenomenal-haupia-b7247b.netlify.app/",
            github: "https://github.com/mndgs1/jsframeworks-course-assignment",
        },
    },
    {
        title: "iTrade",
        description:
            "A fictional auction website using NOROFF Api. The code is written in plain javascript trying to emulate a framework. HTML, page builder scripts, components is all built with plain Javascript.",
        stack: ["Javascript", "TailwindCSS"],
        image: "/static/images/iTrade.png",
        links: {
            demo: "https://itrade-six.vercel.app/",
            github: "https://github.com/mndgs1/itrade",
        },
    },
];

const Projects = () => {
    return (
        <article className="flex flex-col gap-4">
            {ProjectsArray.map((project, index) => (
                <section key={index}>
                    <H2>{project.title}</H2>
                    <div className="md:grid md:grid-cols-2 gap-4">
                        <div className="md:order-last">
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-contain"
                                width={640}
                                height={470}
                            />
                        </div>
                        <div>
                            <p>{project.description}</p>
                            <H3>Stack</H3>
                            {project.stack && (
                                <ul>
                                    {project.stack.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            )}
                            <div className="flex gap-4">
                                <Link href={project.links.demo} target="blank">
                                    <AnimatedButton>Live Demo</AnimatedButton>
                                </Link>
                                <Link
                                    href={project.links.github}
                                    target="blank">
                                    <AnimatedButton>Github Repo</AnimatedButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </article>
    );
};

export default Projects;
