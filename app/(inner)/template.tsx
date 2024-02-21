import Nav from "../components/Nav";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header className="flex justify-between items-center px-8 h-12">
                <Link href="/">{"<"}</Link>
                <Nav listClasses="gap-6" linkClasses="text-base"></Nav>
            </header>
            {children}
            <footer></footer>
        </>
    );
}
