import React from "react";

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

const H1 = ({ children, className, ...rest }: H1Props) => {
    return (
        <h1
            {...rest}
            className={`${className} text-4xl md:text-5xl lg:text-6xl font-black `}>
            {children}
        </h1>
    );
};

export default H1;
