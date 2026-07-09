import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/navbar.css";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#stack", label: "stack" },
  { href: "#projects", label: "projects" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`nav ${scrolled ? "nav--scrolled" : ""}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container nav__inner">
        <a href="#top" className="nav__brand">
          <span className="nav__bracket">{"<"}</span>
          VM
          <span className="nav__bracket">{"/>"}</span>
        </a>

        <nav className="nav__links">
          {LINKS.map((link, i) => (
            <a key={link.href} href={link.href} className="nav__link">
              <span className="nav__link-index">0{i + 1}.</span>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/Vaishnavi_Mane_Resume.pdf"
          download
          className="nav__cta"
        >
          resume.pdf
        </a>

        <button
          className={`nav__burger ${open ? "nav__burger--open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="nav__mobile-link"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Vaishnavi_Mane_Resume.pdf"
            download
            className="nav__mobile-link nav__mobile-link--cta"
          >
            download resume
          </a>
        </div>
      )}
    </motion.header>
  );
}
