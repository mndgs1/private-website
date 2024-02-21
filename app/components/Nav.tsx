"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Links = [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

interface NavProps {
    listClasses?: string;
    linkClasses?: string;
}

const Nav = ({ listClasses, linkClasses }: NavProps) => {
    const pathname = usePathname();

    return (
        <nav>
            <ul className={`flex gap-2 md:gap-3 ${listClasses}`}>
                {Links.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                        <Link
                            href={href}
                            className={`text-sm md:text-base text-zinc-400 hover:text-zinc-50 transition-all pb-1 ${linkClasses} ${
                                pathname === href ? "border-b" : ""
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
