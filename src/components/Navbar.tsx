import React, { useEffect, useState } from "react";
import { MdClose, MdDarkMode, MdLightMode, MdMenu } from "react-icons/md";

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Camisetas", href: "#dryfit" },
    { name: "Regatas", href: "#regatas" },
    { name: "Bermudas", href: "#shorts" },
    { name: "Ofertas", href: "#ofertas" },
    { name: "Catálogo", href: "https://wa.me/c/553499890980" },
  ];

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/80 py-2 shadow-lg backdrop-blur-md dark:bg-slate-950/80" : "bg-transparent py-4"}`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm dark:bg-slate-800">
            <img
              src="/images/logo/IMG-20260219-WA0259.jpg"
              alt="MM Udistore Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl dark:text-white">
            MM <span className="text-cyan-500">Udistore</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-300 dark:hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="rounded-full bg-slate-100 p-2 text-slate-800 transition-all hover:scale-110 dark:bg-slate-800 dark:text-slate-100"
          >
            {theme === "light" ? (
              <MdDarkMode size={22} />
            ) : (
              <MdLightMode size={22} />
            )}
          </button>
          <a
            href="https://wa.me/5534999890980"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cyan-500 px-6 py-2.5 font-semibold text-white shadow-md transition-all hover:bg-cyan-600 hover:shadow-cyan-500/30"
          >
            Contato
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-full bg-slate-100 p-2 text-slate-800 dark:bg-slate-800 dark:text-slate-100"
          >
            {theme === "light" ? (
              <MdDarkMode size={20} />
            ) : (
              <MdLightMode size={20} />
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 dark:text-white"
          >
            {isOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full border-t border-slate-100 bg-white transition-all duration-300 lg:hidden dark:border-slate-900 dark:bg-slate-950 ${isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"}`}
      >
        <div className="flex flex-col gap-4 p-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-700 dark:text-slate-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5534999890980"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full rounded-xl bg-cyan-500 py-3 text-center font-semibold text-white"
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
