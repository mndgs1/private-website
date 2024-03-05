import React from "react";

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}
const H3 = ({ children, className, ...rest }: H1Props) => {
    return (
        <h3
            {...rest}
            className={` ${className} text-lg md:text-xl lg:text-3xl font-black`}>
            {children}
        </h3>
    );
};

export default H3;
