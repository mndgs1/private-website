"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { variants } from "./animation/variants";

interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}
export const Tabs = ({ tabs }: { tabs: Tab[] }) => {
    const [selectedTab, setSelectedTab] = useState(tabs[0].id);
    return (
        <div className="">
            <ul className="flex gap-1 mb-2">
                {tabs.map((tab) => (
                    <li key={tab.id}>
                        <input
                            type="radio"
                            id={tab.id}
                            name="tab"
                            value={tab.id}
                            checked={selectedTab === tab.id}
                            className="hidden"
                            onChange={() => setSelectedTab(tab.id)}
                        />
                        <label htmlFor={tab.id}>{tab.label}</label>
                    </li>
                ))}
            </ul>
            {tabs.map((tab) => {
                if (tab.id === selectedTab) {
                    return <Tab key={tab.id}>{tab.content}</Tab>;
                }
            })}
        </div>
    );
};

export const Tab = ({ children }: { children: React.ReactNode }) => {
    return (
        <AnimatePresence>
            {React.Children.map(children, (child, index) => (
                <motion.div
                    key={index} // You should use a more stable key if possible
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
                    {child}
                </motion.div>
            ))}
        </AnimatePresence>
    );
};

// Dummy data for testing
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
