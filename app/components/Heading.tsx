interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    hLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    noStdStyles?: boolean;
}

const Heading = ({ hLevel, noStdStyles, children, ...rest }: HeadingProps) => {
    const Heading = hLevel;

    const classes = {
        h1: "text-4xl font-bold",
        h2: "text-3xl font-bold",
        h3: "text-2xl font-bold",
        h4: "text-xl font-bold",
        h5: "text-lg font-bold",
        h6: "text-base font-bold",
    };

    return (
        <Heading
            className={`${noStdStyles ? "" : classes[hLevel]} ${
                rest.className ? rest.className : ""
            }`}>
            {children}
        </Heading>
    );
};

export default Heading;
