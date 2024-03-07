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
                <li key={label}>
                    <Iconwrap href={href} label={label}>
                        {icon}
                    </Iconwrap>
                </li>
            ))}
        </ul>
    );
};

export default Socials;

interface IconwrapProps extends React.HTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    href: string;
    wrapperClasses?: string;
    linkClasses?: string;
    label: string;
}

function Iconwrap({
    children,
    href,
    wrapperClasses = "w-12 h-12",
    linkClasses = "fill-dimmed dark:fill-dimmed dark:hover:fill-foreground hover:fill-foreground w-full h-full inline-block p-2 transition-all",
    label,
}: IconwrapProps) {
    return (
        <div className={wrapperClasses}>
            <Link
                href={href}
                className={linkClasses}
                aria-label={label}
                target="blank">
                {children}
            </Link>
        </div>
    );
}
