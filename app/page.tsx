"use client";

import Socials from "../components/Socials";
import H1 from "../components/text/H1";
import H2 from "../components/text/H2";
import Navbar from "@/components/Navbar";
import { variants } from "@/components/animation/variants";

import { motion } from "framer-motion";

export default function Home() {
    return (
        <div
            className={
                "h-screen w-screen flex flex-col text-center items-center justify-center overflow-hidden gap-4 md:gap-8 lg:gap-12"
            }>
            <motion.header
                variants={variants}
                initial="hiddenTop"
                animate="enter"
                transition={{ type: "linear", duration: 0.6, delay: 0.6 }}>
                <Navbar />
            </motion.header>
            <motion.main
                variants={variants}
                initial="hiddenLeft"
                animate="enter"
                transition={{ type: "linear", duration: 0.6 }}>
                <div className="flex flex-col md:gap-2">
                    <H1 className="order-last">Mindaugas Bankauskas</H1>
                    <H2>Front-End Developer</H2>
                </div>
            </motion.main>
            <motion.footer
                variants={variants}
                initial="hiddenBottom"
                animate="enter"
                transition={{ type: "linear", duration: 0.6, delay: 0.6 }}>
                <Socials />
            </motion.footer>
        </div>
    );
}
