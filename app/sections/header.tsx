"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#products", label: "Products" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-amber-100">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-2xl font-semibold text-green-800">
          AreGreats Ventures
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-700 hover:text-green-700 transition-colors duration-300 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-amber-50 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} className="text-green-800" /> : <Menu size={24} className="text-green-800" />}
        </button>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-amber-100 md:hidden">
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 hover:text-green-700 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
