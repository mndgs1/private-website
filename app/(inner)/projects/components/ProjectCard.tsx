import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import H2 from "@/components/text/H2";
import H3 from "@/components/text/H3";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Project } from "@/app/types/types";

const ProjectCard = ({ title, description, image, stacks, links }: Project) => {
    return (
        <Card className="mb-4 lg:p-8">
            <CardHeader className="">
                <H2 className="">{title}</H2>
            </CardHeader>
            <CardContent className="lg:grid lg:grid-cols-2 lg:gap-8">
                <p className="mb-4 lg:mb-0">{description}</p>
                <div className="lg:row-span-3 mb-4 lg:mb-0">
                    <Image
                        src={image}
                        alt={title}
                        className="w-full h-full object-contain rounded-lg border border-border"
                        width={640}
                        height={470}
                    />
                </div>
                <div className="mb-4 lg:mb-0">
                    <H3
                        className="
            mb-2 lg:mb-4">
                        Built with
                    </H3>
                    {stacks && (
                        <ul className="flex flex-wrap gap-3 lg:gap-6">
                            {stacks.map((item, index) => (
                                <li key={index}>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Link
                                                    href={item.href}
                                                    target="blank">
                                                    <item.logo.element
                                                        className={`w-10 lg:w-12 h-10 lg:h-12 hover:opacity-90
                                `}
                                                        style={{
                                                            color: item.logo
                                                                .color,
                                                        }}
                                                    />
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{item.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="flex gap-4">
                    <div>
                        <Link
                            href={links.demo}
                            className={"block"}
                            target="blank">
                            <Button>Live Demo</Button>
                        </Link>
                    </div>
                    <div>
                        <Link
                            href={links.github}
                            className={"inline-block"}
                            target="blank">
                            <Button variant={"outline"}>Github Repo</Button>
                        </Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;
