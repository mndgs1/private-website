"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Links = [
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/projects", label: "Projects" },
];

interface NavProps {
    listClasses?: string;
    linkClasses?: string;
}

const Nav = ({ listClasses, linkClasses }: NavProps) => {
    const pathname = usePathname();

    return (
        <nav>
            <ul className={`flex gap-2 ${listClasses}`}>
                {Links.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                        <Link
                            href={href}
                            className={`${linkClasses} ${
                                pathname === href ? "underline" : ""
                            }`}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
