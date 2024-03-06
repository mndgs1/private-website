import React from "react";

import { ContactForm } from "./form";

import H1 from "@/components/text/H1";
import H2 from "@/components/text/H2";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
                <H2 className="mb-2">Contact Information</H2>
                <div className="flex flex-col gap-2">
                    <p>Mindaugas Bankauskas</p>
                    <div>
                        <p>Kløverstien 9, Grua</p>
                        <p>2742, Norway</p>
                    </div>
                    <p className="flex gap-2 items-center">
                        <FaPhone />
                        +47 942 15 193
                    </p>

                    <Link
                        href="mailto:contact@mindb.no"
                        className="flex gap-2 items-center text-dimmed hover:text-foreground">
                        <FaPaperPlane />
                        contact@mindb.no
                    </Link>
                    <Link
                        href="https://www.github.com/mndgs1"
                        target="blank"
                        className="flex gap-2 items-center text-dimmed hover:text-foreground">
                        <FaGithub />
                        mndgs1
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/mindaugas-bankauskas/"
                        target="blank"
                        className="flex gap-2 items-center text-dimmed hover:text-foreground">
                        <FaLinkedin />
                        Mindaugas Bankauskas
                    </Link>
                </div>
            </section>
        </article>
    );
};

export default Contact;
