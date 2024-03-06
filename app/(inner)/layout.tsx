import Socials from "@/components/Socials";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ModeToggle } from "@/components/Modetoggle";
import { Toaster } from "@/components/ui/toaster";
import { GoArrowLeft } from "react-icons/go";

export default function InnerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <header className="flex-none block border-b border-border z-20 sticky top-0 w-full backdrop-blur bg-background/90">
                <div className="flex justify-between items-center py-4 px-8 sm:12 md:px-16 lg:px-24 xl:px-32 max-w-screen-2xl m-auto w-full z-30">
                    <Link href="/" className="text-dimmed hover:text-red-500">
                        <GoArrowLeft className="h-8 w-8 transition-all hover:text-foreground" />
                    </Link>
                    <Navbar
                        listClasses="gap-3 md:gap-6"
                        linkClasses="text-base"
                    />
                    <ModeToggle />
                </div>
            </header>
            {children}
            <footer className="flex-none border-t border-border z-10">
                <div className="px-8 sm:12 md:px-16 lg:px-24 xl:px-32 py-2 max-w-screen-2xl m-auto w-full flex justify-between items-center">
                    <p>© 2024 Mindaugas Bankauskas</p>
                    <Socials />
                </div>
            </footer>
            <Toaster />
        </>
    );
}
