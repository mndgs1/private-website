import React from "react";

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}
const H3 = ({ children, ...rest }: H1Props) => {
    return (
        <h3
            className={`text-lg md:text-xl lg:text-3xl font-black ${rest.className}`}
            {...rest}>
            {children}
        </h3>
    );
};

export default H3;
