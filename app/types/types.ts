import { IconBaseProps } from "react-icons/lib";

interface Project {
    id: number;
    title: string;
    description: string[];
    status: string;
    grade: string;
    image: string;
    stacks: Stack[];
    links: {
        demo: string;
        github: string;
    };
}

interface Stack {
    name: string;
    href: string;
    logo: {
        element: React.ComponentType<IconBaseProps>;
        color: string;
    };
}

export type { Project, Stack };
