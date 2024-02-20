import React from "react";
import Github from "./Icons/Github";
import LinkedIn from "./Icons/LinkedIn";
import Link from "next/link";

const socialLinks = [
    {
        icon: <Github />,
        href: "https://github.com/mndgs1",
        label: "Github",
    },
    {
        icon: <LinkedIn />,
        href: "https://www.linkedin.com/in/mindaugas-bankauskas/",
        label: "LinkedIn",
    },
];
const Socials = () => {
    return (
        <ul className="flex">
            {socialLinks.map(({ icon, href, label }) => (
                <li key={href} className="w-12 h-12">
                    <a
                        href={href}
                        aria-label={label}
                        className="fill-[#d4d4d4] hover:fill-[#e7e7e7] w-full h-full inline-block p-2 transition-all">
                        {icon}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Socials;
