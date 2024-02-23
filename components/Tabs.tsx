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
