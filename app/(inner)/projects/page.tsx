import React from "react";

import { Tabs } from "@/components/Tabs";

let tabsArray = [
    {
        id: "tabAll",
        label: "All",
        content: (
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
        ),
    },
    {
        id: "tabSchool",
        label: "School",
        content: <div className="bg-white h-12 w-12" />,
    },
    {
        id: "tabPersonal",
        label: "Private",
        content: (
            <div>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
            </div>
        ),
    },
    {
        id: "tabClient",
        label: "Client",
        content: <div>asdasdasdasdasdas</div>,
    },
];

const ProjectsObjects = [
    {
        title: "Project 1",
        description: "Description 1",
        stack: ["React", "TypeScript", "TailwindCSS"],
        links: [
            {
                title: "GitHub",
                link: "https://github.com",
            },
            {
                title: "Live",
                link: "https://github.com",
            },
        ],
        images: [
            {
                src: "https://via.placeholder.com/150",
                alt: "Project 1",
            },
        ],
    },
    {
        title: "Project 2",
        description: "Description 2",
        stack: ["React", "TypeScript", "TailwindCSS"],
        links: [
            {
                title: "GitHub",
                link: "https://github.com",
            },
            {
                title: "Live",
                link: "https://github.com",
            },
        ],
        images: [
            {
                src: "https://via.placeholder.com/150",
                alt: "Project 2",
            },
        ],
    },
];

const ProjectTypes = ["All", "School", "Personal", "Client"];

const Projects = () => {
    return (
        <article>
            <Tabs tabs={tabsArray} />

            {/* Fancy button */}
            <div className="relative inline-block group m-1">
                <div className="absolute h-[1px] bg-red-500 w-0 z-10  group-hover:w-full transition-all duration-300"></div>
                <div className="absolute h-[1px] w-0 bottom-0 right-0 bg-red-500 z-10 group-hover:w-full transition-all duration-300"></div>
                <div className="absolute w-[1px] h-0 left-0 bottom-0 bg-red-500 z-10 group-hover:h-full transition-all duration-300"></div>
                <div className="absolute w-[1px] h-0 right-0 top-0 bg-red-500 z-10 group-hover:h-full transition-all duration-300"></div>
                <p className="p-2 clear-start border border-border">Button</p>
            </div>
        </article>
    );
};

export default Projects;
