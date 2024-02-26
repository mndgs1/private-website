import React from "react";

import H1 from "@/components/text/H1";

import { ContactForm } from "./form";

const Contact = () => {
    return (
        <article>
            <section className="max-w-md mx-auto">
                <ContactForm />
            </section>
        </article>
    );
};

export default Contact;
