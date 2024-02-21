"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import Github from "./components/Icons/Github";
import Socials from "./components/Socials";
import H1 from "./components/H1";
import H2 from "./components/H2";

import { motion } from "framer-motion";

const variants = {
    hiddenLeft: { opacity: 0, x: "-150%", y: 0 },
    hiddenTop: { opacity: 0, x: 0, y: "-200%" },
    hiddenBottom: { opacity: 0, x: 0, y: "200%" },
    enter: { opacity: 1, x: 0, y: 0 },
};

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
                <Nav />
            </motion.header>
            <motion.main
                variants={variants}
                initial="hiddenLeft"
                animate="enter"
                transition={{ type: "linear", duration: 0.6 }}>
                <main className="flex flex-col md:gap-2">
                    <H1 className="order-last">Mindaugas Bankauskas</H1>
                    <H2>Front-End Developer</H2>
                </main>
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
