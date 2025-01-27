"use client";
import Link from "next/link";
import React, { useState } from "react";
import ToggleMode from "./ToggleMode";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b mb-5 py-3 bg-secondary shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="https://img1.wsimg.com/isteam/ip/fecdfe52-2d5a-48ec-aff8-0eaa6df7b535/logo_squaret.png/:/rs=w:156,h:100,cg:true,m/cr=w:156,h:100/qt=q:95"
              alt="logo"
              className="w-20 h-auto"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-lg hover:text-primary transition">
            Dashboard
          </Link>
          <Link href="/" className="text-lg hover:text-primary transition">
            Users
          </Link>
          <Link href="/" className="text-lg hover:text-primary transition">
            Tickets
          </Link>
          <Link href="/" className="text-lg hover:text-primary transition">
            Theme
          </Link>
          <ToggleMode />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-secondary shadow-md">
          <Link
            href="/"
            className="text-lg hover:text-primary transition"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            href="/"
            className="text-lg hover:text-primary transition"
            onClick={() => setIsOpen(false)}
          >
            Users
          </Link>
          <Link
            href="/"
            className="text-lg hover:text-primary transition"
            onClick={() => setIsOpen(false)}
          >
            Tickets
          </Link>
          <Link
            href="/"
            className="text-lg hover:text-primary transition"
            onClick={() => setIsOpen(false)}
          >
            Theme
          </Link>
          <ToggleMode />
        </div>
      )}
    </nav>
  );
};

export default Nav;
