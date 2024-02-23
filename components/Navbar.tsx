"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Links = [
    { href: "/projects", label: "Projects" },
    // { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

interface NavProps {
    listClasses?: string;
    linkClasses?: string;
}

const Navbar = ({ listClasses }: NavProps) => {
    const pathname = usePathname();

    return (
        <nav>
            <ul className={`flex gap-2 md:gap-3 ${listClasses}`}>
                {Links.map(({ href, label }) => (
                    <NavLink
                        href={href}
                        label={label}
                        pathname={pathname}
                        key={label}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;

interface NavLinkProps {
    href: string;
    label: string;
    pathname: string;
}

const NavLink = ({ href, label, pathname }: NavLinkProps) => {
    return (
        <li className="group">
            <Link
                href={href}
                className={`md:text-base font-medium dark:font-normal group-hover:text-foreground transition-all flex flex-col items-center ${
                    pathname === href
                        ? "text-foreground dark:text-foreground"
                        : "text-dimmed dark:text-dimmed"
                }`}>
                {label}
                <div
                    className={`bg-dimmed dark:bg-foreground group-hover:w-full h-[2px] dark:h-[1px] transition-all duration-300 ${
                        pathname === href ? "w-full" : "w-0"
                    }`}></div>
            </Link>
        </li>
    );
};
