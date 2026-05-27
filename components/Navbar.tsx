"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "/contacto" },
  { label: "Buenas Prácticas", href: "/buenas-practicas" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="text-[#C8102E] font-bold text-xl">SERCOTEC</span>

        {/* Menú escritorio */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#C8102E] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Botón hamburguesa (móvil) */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <span className="block w-6 h-0.5 bg-gray-700" />
          <span className="block w-6 h-0.5 bg-gray-700" />
          <span className="block w-6 h-0.5 bg-gray-700" />
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <nav className="md:hidden bg-white border-t px-4 pb-4 flex flex-col gap-3 text-sm font-medium text-gray-700">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-[#C8102E]">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
