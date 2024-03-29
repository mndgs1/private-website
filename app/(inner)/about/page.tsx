import React from "react";

import aboutMe from "@/app/api/about";

import Image from "next/image";
import H1 from "@/components/text/H1";

import { Metadata } from "next";
import Link from "next/link";
import { IoDocumentText } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import CustomLink from "@/components/CustomLink";

export const metadata: Metadata = {
    title: "About | MB",
    description:
        "Mindaugas Bankauskas - Front-End Developer webpage. About me.",
};

const About = () => {
    return (
        <article className="flex flex-col lg:flex-row lg:justify-between gap-4 md:gap-12 lg:items-center">
            <section className=" mx-auto flex flex-col items-center">
                <div className="w-80 h-80 lg:w-96 lg:h-[600px]">
                    <Image
                        src="/static/images/mindaugasprofile.jpg"
                        height={600}
                        width={600}
                        alt="Mindaugas Bankauskas profile"
                        className=" w-full h-full object-cover "
                    />
                </div>
            </section>
            <section className="max-w-[500px]">
                <H1 className="mb-6">Hello World!</H1>
                <div className="mb-4">
                    {aboutMe.paragrahps.map((item, index) => {
                        return (
                            <p key={index} className="mb-6">
                                {item}
                            </p>
                        );
                    })}
                </div>
                <CustomLink
                    href="/static/pdf/Mindaugas_Bankauskas_-_Frontend_Developer.pdf"
                    target="_blank">
                    <IoDocumentText className="mr-2 inline-block" />
                    Resume
                </CustomLink>
            </section>
        </article>
    );
};

export default About;
