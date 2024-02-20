import Image from "next/image";
import Link from "next/link";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Github from "./components/Icons/Github";
import Socials from "./components/Socials";

export default function Home() {
    return (
        <main>
            <Nav />
            <Heading hLevel="h1" className="group-hover:bg-white">
                Mindaugas Bankauskas
            </Heading>
            <Socials />
        </main>
    );
}
