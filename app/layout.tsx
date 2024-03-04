import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "../components/theme-provider";

// export const metadata: Metadata = {
//     title: {
//       default: "chronark.com",
//       template: "%s | chronark.com",
//     },
//     description: "Co-founder of unkey.dev and founder of planetfall.io",
//     openGraph: {
//       title: "chronark.com",
//       description:
//         "Co-founder of unkey.dev and founder of planetfall.io",
//       url: "https://chronark.com",
//       siteName: "chronark.com",
//       images: [
//         {
//           url: "https://chronark.com/og.png",
//           width: 1920,
//           height: 1080,
//         },
//       ],
//       locale: "en-US",
//       type: "website",
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         "max-video-preview": -1,
//         "max-image-preview": "large",
//         "max-snippet": -1,
//       },
//     },
//     twitter: {
//       title: "Chronark",
//       card: "summary_large_image",
//     },
//     icons: {
//       shortcut: "/favicon.png",
//     },
//   };

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Home | MB",
    description: "Mindaugas Bankauskas - Front-End Developer webpage.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} min-h-screen flex flex-col`}>
                <div className="bg-gradient-to-b from-background to-backgroundEnd fixed w-screen h-screen" />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
