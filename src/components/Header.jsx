import { useState } from "react";
import { FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/images/logo.jpg" alt="KB Logo" className="h-10" />
          <div className="hidden sm:flex items-center gap-3 text-xl text-gray-600">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#portfolio" className="hover:text-orange-600">Portfolio</a>
          <a href="#services" className="hover:text-orange-600">Services</a>
          <a href="#testimonials" className="hover:text-orange-600">Testimonials</a>
          <a href="#contact" className="hover:text-orange-600">Contact</a>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md text-2xl text-gray-700"
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${open ? "block" : "hidden"} border-t`}>
        <div className="px-4 py-3 space-y-2">
          <a href="#portfolio" onClick={() => setOpen(false)} className="block">Portfolio</a>
          <a href="#services" onClick={() => setOpen(false)} className="block">Services</a>
          <a href="#testimonials" onClick={() => setOpen(false)} className="block">Testimonials</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block">Contact</a>
          <div className="flex gap-3 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </header>
  );
}
