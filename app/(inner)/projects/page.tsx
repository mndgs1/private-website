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
import projects from "@/app/api/projects";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";

const Projects = () => {
    return (
        <article className="">
            {projects.map((project, index) => (
                <Card key={index} className="mb-4 md:p-8">
                    <CardHeader>
                        <H2 className="">{project.title}</H2>
                    </CardHeader>
                    <CardContent className="lg:grid lg:grid-cols-2 lg:gap-8">
                        <p className="mb-8">{project.description}</p>
                        <div className="lg:row-span-5">
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-contain"
                                width={640}
                                height={470}
                            />
                        </div>
                        <div className="row-span-3">
                            <H3>Built with</H3>
                            {project.stacks && (
                                <ul className="flex flex-wrap gap-6">
                                    {project.stacks.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                target="blank">
                                                <item.logo.element
                                                    className={`w-12 h-12 hover:opacity-90
                                                `}
                                                    style={{
                                                        color: item.logo.color,
                                                    }}
                                                />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="flex gap-4">
                            <Link href={project.links.demo} target="blank">
                                <AnimatedButton>Live Demo</AnimatedButton>
                            </Link>
                            <Link href={project.links.github} target="blank">
                                <AnimatedButton>Github Repo</AnimatedButton>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </article>
    );
};

export default Projects;
