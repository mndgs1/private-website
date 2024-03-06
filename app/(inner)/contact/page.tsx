import React from "react";

import H2 from "@/components/text/H2";
import Link from "next/link";

import { ContactForm } from "./form";
import Socials from "@/components/Socials";

const Contact = () => {
    return (
        <article className="">
            {/* <section>
                <H2>Contact Information</H2>
                <p>+47 942 15 193</p>
                <p>
                    <Link href="mailto:contact@mindb.no">contact@mindb.no</Link>
                </p>
                <Socials />
            </section> */}
            <section>
                <div className="max-w-lg mx-auto">
                    <ContactForm />
                </div>
            </section>
        </article>
    );
};

export default Contact;
