import React from "react";

import aboutMe from "@/app/api/about";

const About = () => {
    return (
        <article>
            <section>
                {aboutMe.paragrahps.map((item, index) => {
                    return (
                        <section key={index}>
                            <p>{item}</p>
                        </section>
                    );
                })}
            </section>
            <section></section>
        </article>
    );
};

export default About;
