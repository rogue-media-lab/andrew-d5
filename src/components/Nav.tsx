"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = ["About", "Issues", "Events", "Volunteer"];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F2044]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-full border-2 border-[#C8902A] size-9 shrink-0">
            <div className="rounded-full bg-[#C8902A] size-2.5" />
          </div>
          <span className="text-white font-['Playfair_Display',system-ui,sans-serif] font-bold text-xl tracking-[0.02em]">
            Clough for SC5
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#CBD5E1] font-['Inter',system-ui,sans-serif] font-medium text-sm uppercase tracking-[0.05em] hover:text-white transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="#donate"
            className="rounded-sm py-2.5 px-6 border-[1.5px] border-[#C8902A] text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-sm uppercase tracking-[0.05em] hover:bg-[#C8902A] hover:text-white transition-colors"
          >
            Donate
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {menuOpen ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0F2044] border-t border-[#1E2D4A] px-8 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#CBD5E1] font-['Inter',system-ui,sans-serif] font-medium text-sm uppercase tracking-[0.05em] py-3 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
          <Link
            href="#donate"
            className="mt-3 rounded-sm py-2.5 px-6 border-[1.5px] border-[#C8902A] text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-sm uppercase tracking-[0.05em] text-center hover:bg-[#C8902A] hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Donate
          </Link>
        </div>
      )}
    </nav>
  );
}
