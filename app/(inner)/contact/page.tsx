import React from "react";

import { ContactForm } from "./form";

import H1 from "@/components/text/H1";
import Link from "next/link";
import { FaPaperPlane, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import { Metadata } from "next";
import CustomLink from "@/components/CustomLink";

export const metadata: Metadata = {
    title: "Contact | MB",
    description:
        "Mindaugas Bankauskas - Front-End Developer webpage. Contact me for any inquiries.",
};

const Links = [
    {
        href: "mailto:contact@mindb.no",
        label: "contact@mindb.no",
        icon: <FaPaperPlane className="inline-block mr-2" />,
    },
    {
        href: "https://www.github.com/mndgs1",
        label: "mndgs1",
        icon: <FaGithub className="inline-block mr-2" />,
    },
    {
        href: "https://www.linkedin.com/in/mindaugas-bankauskas/",
        label: "Mindaugas Bankauskas",
        icon: <FaLinkedin className="inline-block mr-2" />,
    },
];

const Contact = () => {
    return (
        <article className="w-full max-w-lg flex flex-col gap-6 lg:gap-10">
            <section>
                <H1 className="mb-4">Message Me</H1>
                <div className="mx-auto">
                    <ContactForm />
                </div>
            </section>
            <section>
                <H1 className="mb-4">Contact Information</H1>
                <div
                    className="flex flex-col gap-2 items-start
                ">
                    <p>Mindaugas Bankauskas</p>
                    <div>
                        <p>Kløverstien 9, Grua</p>
                        <p>2742, Norway</p>
                    </div>
                    <p className="flex gap-2 items-center">
                        <FaPhone />
                        +47 942 15 193
                    </p>
                    {Links.map(({ href, label, icon }) => (
                        <CustomLink key={label} href={href} target="_blank">
                            {icon}
                            {label}
                        </CustomLink>
                    ))}
                </div>
            </section>
        </article>
    );
};

export default Contact;
