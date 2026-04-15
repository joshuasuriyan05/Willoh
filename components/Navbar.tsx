"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-[#0b1c3d]/95 backdrop-blur-md shadow-lg"
            : "bg-[#0b1c3d]"
        } text-white`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <Link href="/" className="font-bold text-xl tracking-wide">
            WILLOH PUBLICATIONS
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 font-medium items-center">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/about" className="hover:text-gray-300">About</Link>
            <Link href="/services" className="hover:text-gray-300">Services</Link>
            <Link href="/creative" className="hover:text-gray-300">Creative</Link>
            <Link href="/research-ethics" className="hover:text-gray-300">Ethics</Link>
            <Link href="/partnerships" className="hover:text-gray-300">Partners</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/10"
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed inset-0 bg-[#0b1c3d]/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 text-lg z-[200] transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 text-3xl z-[300] bg-white/10 px-3 py-1 rounded-full"
        >
          ✕
        </button>

        {/* LINKS (FIXED) */}
        <Link href="/" onClick={closeMenu} className="text-2xl hover:text-gray-300">
          Home
        </Link>

        <Link href="/about" onClick={closeMenu} className="text-2xl hover:text-gray-300">
          About
        </Link>

        <Link href="/services" onClick={closeMenu} className="text-2xl hover:text-gray-300">
          Services
        </Link>

        <Link href="/creative" onClick={closeMenu} className="text-2xl hover:text-gray-300">
          Creative
        </Link>

        <Link href="/research-ethics" onClick={closeMenu} className="text-2xl hover:text-gray-300">
          Research Ethics
        </Link>

        <Link href="/partnerships" onClick={closeMenu} className="text-2xl hover:text-gray-300">
          Partnerships
        </Link>

        <Link href="/contact" onClick={closeMenu} className="text-2xl hover:text-gray-300">
          Contact
        </Link>
      </div>
    </>
  );
}