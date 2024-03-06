import React from "react";

import AnimatedButton from "@/components/FancyButton";
import H2 from "@/components/text/H2";
import H3 from "@/components/text/H3";

import Image from "next/image";
import Link from "next/link";
import projects from "@/app/api/projects";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import ProjectCard from "./components/ProjectCard";

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
