"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "O nás" },
    { href: "/lection", label: "lection" },
    { href: "/nejlepsiPosilovna", label: "nejlepsiPosilovna" },
    { href: "/sluzby", label: "sluzby" },
    { href: "/kontakt", label: "kontakt" },
  ];

  return (
    <header className="fixed top-0 z-10 flex h-[70px] w-full items-center justify-between bg-one px-6 md:px-12 shadow opacity-95">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo-mini.svg"
          alt="Logo"
          width={150}
          height={70}
          className="w-[150px] h-auto"
          priority
        />
      </Link>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6 list-none">
        {menuItems.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-four text-xl transition-colors duration-300 hover:bg-four hover:text-one px-2 py-1 rounded"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger button */}
      <button
        className="md:hidden flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-one flex flex-col items-center gap-4 py-6 shadow-md md:hidden">
          {menuItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-six transition-colors duration-300 hover:text-one px-4 py-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
