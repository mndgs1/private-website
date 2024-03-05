import React from "react";
import clsx from "clsx";

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}
const H2 = ({ children, className, ...rest }: H1Props) => {
    return (
        <h2
            {...rest}
            className={`${className} text-2xl md:text-3xl lg:text-5xl font-black`}>
            {children}
        </h2>
    );
};

export default H2;
