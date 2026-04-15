"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b1c3d] text-white py-14">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* COMPANY */}
        <div>
          <h2 className="text-xl font-bold">WILLOH Publications</h2>
          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            WILLOH Publications supports researchers worldwide with
            high-quality academic publishing services and journal guidance.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-gray-300 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold text-lg">Services</h3>
          <ul className="mt-4 space-y-2 text-gray-300 text-sm">
            <li>Manuscript Preparation</li>
            <li>Journal Selection</li>
            <li>Plagiarism Check</li>
            <li>Proofreading</li>
            <li>Publication Support</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold text-lg">Contact</h3>

          <div className="mt-4 space-y-3 text-gray-300 text-sm">

            {/* EMAIL */}
            <a
              href="mailto:aishwarayadhandapani303@gmail.com"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Mail size={16} />
              aishwarayadhandapani303@gmail.com
            </a>

            {/* PHONE */}
            <a
              href="tel:+918610137239"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Phone size={16} />
              +91 86101 37239
            </a>

            {/* LOCATION */}
            <p className="flex items-center gap-2">
              <MapPin size={16} />
              Tamil Nadu, India
            </p>

          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-gray-400">
        © 2026 WILLOH Publications. All rights reserved.
      </div>

    </footer>
  );
}