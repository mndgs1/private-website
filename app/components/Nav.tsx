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
                    <li key={`${href}${label}`} className="group">
                        <Link
                            href={href}
                            className={`text-sm md:text-base text-zinc-400 group-hover:text-zinc-50 transition-all ${linkClasses} flex flex-col items-center ${
                                pathname === href
                                    ? " text-zinc-50 transition-all"
                                    : ""
                            }`}>
                            {label}
                            <div
                                className={` bg-zinc-50 group-hover:w-full h-[1px] transition-all duration-300 ${
                                    pathname === href ? "w-full" : "w-0"
                                }`}></div>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
