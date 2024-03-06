"use client";

import Socials from "../components/Socials";
import H1 from "../components/text/H1";
import H2 from "../components/text/H2";
import Navbar from "@/components/Navbar";
import { variants } from "@/components/animation/variants";

import { motion } from "framer-motion";

// Variants
const container = {
    show: {
        transition: {
            staggerChildren: 0.35,
        },
    },
};

export default function Home() {
    return (
        <motion.div
            variants={container}
            initial="hiddenLeft"
            animate="enter"
            className={
                "h-screen w-screen flex flex-col text-center items-center justify-center overflow-hidden gap-4 md:gap-8 lg:gap-12"
            }>
            <motion.header
                variants={variants}
                initial="hiddenTop"
                animate="enter"
                transition={{
                    type: "ease-in-out",
                    duration: 0.6,
                    delay: 1,
                }}>
                <Navbar />
            </motion.header>
            <motion.main
                variants={variants}
                initial="hiddenLeft"
                animate="enter"
                transition={{ type: "ease-in-out", duration: 1 }}>
                <div className="flex flex-col md:gap-2">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black">
                        Mindaugas Bankauskas
                    </h1>
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-black">
                        Front-End Developer
                    </h2>
                </div>
            </motion.main>
            <motion.footer
                variants={variants}
                initial="hiddenBottom"
                animate="enter"
                transition={{
                    type: "ease-in-out",
                    duration: 0.6,
                    delay: 1,
                }}>
                <Socials />
            </motion.footer>
        </motion.div>
    );
}
