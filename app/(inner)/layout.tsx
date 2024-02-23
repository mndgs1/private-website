import Socials from "@/components/Socials";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ModeToggle } from "@/components/Modetoggle";

export default function InnerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <header className="flex-none border-b border-border z-10">
                <div className="flex justify-between items-center py-4 px-8 sm:12 md:px-16 lg:px-24 xl:px-32 max-w-screen-2xl m-auto w-full">
                    <Link href="/" className="text-dimmed">
                        {"<"}
                    </Link>
                    <Navbar listClasses="gap-6" linkClasses="text-base" />
                    <ModeToggle />
                </div>
            </header>
            <main className="grow px-8 sm:12 md:px-16 lg:px-24 xl:px-32 py-4 max-w-screen-2xl m-auto w-full z-10">
                {children}
            </main>
            <footer className="flex-none border-t border-border z-10">
                <div className="px-8 sm:12 md:px-16 lg:px-24 xl:px-32 py-2 max-w-screen-2xl m-auto w-full flex justify-between items-center">
                    <p>© 2024 Mindaugas Bankauskas</p>
                    <Socials />
                </div>
            </footer>
        </>
    );
}
