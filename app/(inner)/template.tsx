"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
const variants = {
    hidden: { opacity: 0, x: -100, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
};

import H1 from "@/components/text/H1";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const title =
        pathname === "/"
            ? "Home"
            : `${capitalizeFirstLetter(pathname.slice(1, pathname.length))}`;

    return (
        <motion.main
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="hidden"
            transition={{ type: "linear" }}
            className="grow px-8 sm:12 md:px-16 lg:px-24 xl:px-32 py-4 max-w-screen-2xl m-auto w-full z-10 flex items-center justify-center">
            {children}
        </motion.main>
    );
}
