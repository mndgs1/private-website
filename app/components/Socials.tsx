import React from "react";
import Github from "./Icons/Github";
import LinkedIn from "./Icons/LinkedIn";
import Link from "next/link";
import Email from "./Icons/Email";

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
    // {
    //     icon: <Email />,
    //     href: "mailto:mindaugasbankauskas@gmail.com",
    //     label: "Email",
    // },
];

const Socials = () => {
    return (
        <ul className="flex">
            {socialLinks.map(({ icon, href, label }) => (
                <li key={href} className="w-12 h-12">
                    <Link
                        href={href}
                        aria-label={label}
                        className="fill-zinc-400 hover:fill-zinc-50 w-full h-full inline-block p-2 transition-all">
                        {icon}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Socials;
