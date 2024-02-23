"use client";
import { motion, AnimatePresence } from "framer-motion";
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
        <AnimatePresence>
            <motion.main
                variants={variants}
                initial="hidden"
                animate="enter"
                transition={{ type: "linear" }}>
                <H1 className="mb-5">{title}</H1>
                {children}
            </motion.main>
        </AnimatePresence>
    );
}
