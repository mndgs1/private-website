import React from "react";
import Link from "next/link";

interface CustomLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    className?: string;
    href: string;
    target?: string;
}

const CustomLink = ({ children, className, ...rest }: CustomLinkProps) => {
    return (
        <Link
            {...rest}
            className={`${className} text-dimmed  hover:text-foreground inline-flex items-center`}>
            {children}
        </Link>
    );
};

export default CustomLink;
