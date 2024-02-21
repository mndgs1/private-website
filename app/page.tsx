"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import Github from "./components/Icons/Github";
import Socials from "./components/Socials";
import H1 from "./components/H1";
import H2 from "./components/H2";

export default function Home() {
    return (
        <>
            <main className="flex flex-col md:gap-2">
                <H1 className="order-last">Mindaugas Bankauskas</H1>
                <H2>Front-End Developer</H2>
            </main>
        </>
    );
}
