// @ts-ignore
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappChat from "@/components/WhatsappChat";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

/* ✅ METADATA (VERY IMPORTANT) */
export const metadata = {
  title: {
    default: "WILLOH Publications",
    template: "%s | WILLOH Publications",
  },
  description:
    "WILLOH Publications provides professional academic publishing support, research guidance, and journal assistance worldwide.",

  /* ✅ FAVICON / LOGO */
  icons: {
    icon: "/logo.jpeg",       // place your logo in /public/logo.png
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="pt-20 min-h-screen">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

        {/* WHATSAPP CHAT */}
        <WhatsappChat />

      </body>
    </html>
  );
}
