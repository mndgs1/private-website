import React from "react";

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}
const H2 = ({ children, ...rest }: H1Props) => {
    return (
        <h2
            className={`text-2xl md:text-3xl lg:text-5xl font-black ${rest.className}`}
            {...rest}>
            {children}
        </h2>
    );
};

export default H2;
