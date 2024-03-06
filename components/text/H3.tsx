import React from "react";

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}
const H3 = ({ children, className, ...rest }: H1Props) => {
    return (
        <h3
            {...rest}
            className={` ${className} text-xl md:text-2xl font-black`}>
            {children}
        </h3>
    );
};

export default H3;
