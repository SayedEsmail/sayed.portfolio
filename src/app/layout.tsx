import type { Metadata } from "next";
import { Cairo, Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LangProvider } from "@/components/LangProvider";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const cairo = Cairo({
    variable: "--font-cairo",
    subsets: ["arabic", "latin"],
    weight: ["400", "600", "700", "800"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: "%s | Sayed Esmail",
        default: "Sayed Esmail | Senior Frontend / Full-Stack Engineer, Cairo",
    },
    description: "Senior Frontend / Full-Stack Engineer in Cairo. Vue, React, and Next.js products: live fleet tracking at Routz, multi-tenant SaaS at Untap, and Arabic/English interfaces built right-to-left first.",
    keywords: ["Senior Frontend Engineer", "Vue 3 Developer", "Next.js Portfolio", "Vuetify 3", "React Developer", "Cairo", "Software Architecture"],
    authors: [{ name: "Sayed Esmail" }],
    metadataBase: new URL("https://sayedesmail.com"),
    alternates: { canonical: "/" },
    openGraph: {
        title: "Sayed Esmail | Senior Frontend / Full-Stack Engineer, Cairo",
        description: "Vue, React, and Next.js products: live fleet tracking at Routz, multi-tenant SaaS at Untap, and Arabic/English interfaces built right-to-left first.",
        url: "https://sayedesmail.com",
        type: "website",
        locale: "en_US",
        siteName: "Sayed Esmail",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sayed Esmail | Senior Frontend / Full-Stack Engineer, Cairo",
        description: "Vue, React, and Next.js products: live fleet tracking, multi-tenant SaaS, Arabic/English interfaces.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} h-full antialiased dark`}
        >
            <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-[#F0801A]/25 selection:text-[#F3F4F6] font-sans">
                <a className="skip-link" href="#main-content">Skip to content</a>
                <LangProvider>
                    <Navbar />
                    <main id="main-content" className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </LangProvider>
            </body>
        </html>
    );
}
