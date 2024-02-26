import React from "react";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
}

const AnimatedButton = ({ type = "button", ...rest }: ButtonProps) => {
    return (
        <button
            className="relative inline-block group m-1 p-2 clear-start border border-border"
            type={type}
            {...rest}>
            <div className="absolute h-[1px] top-0 left-0 bg-dimmed w-0 z-10  group-hover:w-full transition-all duration-300"></div>
            <div className="absolute h-[1px] w-0 bottom-0 right-0 bg-dimmed z-10 group-hover:w-full transition-all duration-300"></div>
            <div className="absolute w-[1px] h-0 left-0 bottom-0 bg-dimmed z-10 group-hover:h-full transition-all duration-300"></div>
            <div className="absolute w-[1px] h-0 right-0 top-0 bg-dimmed z-10 group-hover:h-full transition-all duration-300 "></div>
            {rest.children}
        </button>
    );
};

export default AnimatedButton;
