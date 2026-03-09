"use client";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Herosection from "./Herosection";
import Report from './Report';
import ImageSlider from "./ImageSlider";
import ZakatSection from "./ZakatSection";
import DonateSection from "./DonateSection";
import Info from "./Info";
import ContactSection from "./ContactSection";

const Navbar = () => {
  const pathname = usePathname();
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home",       path: "/",          id: "home" },
    { name: "About us",   path: "/about",     id: "about" },
    { name: "Facilities", path: "/facilities", id: "facilities" },
    { name: "Programs",   path: "/programs",  id: "programs" },
    { name: "Zakat",      path: "/zakat",     id: "zakat" },
    { name: "Donate",     path: "/donate",    id: "donate" },
    { name: "Bank",       path: "/bank",      id: "bank" },
    { name: "Contacts",   path: "/contacts",  id: "contacts" },
  ];

  // Close menu on route change or resize back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 899) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleScroll = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, menuOpen ? 350 : 0); // wait for menu close animation
  };

  return (
    <>
      <header className={styles.heroSection}>
        <nav className={styles.navbar}>
          {/* Logo */}
          <div className={styles.logo}>
            <img src="/saya logo 2.png" alt="SAYA Logo" className={styles.logoImg} />
          </div>

          {/* Desktop Nav Links */}
          <ul className={styles.navLinks}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <span
                  className={`${styles.link} ${pathname === link.path ? styles.active : ""}`}
                  onClick={() => handleScroll(link.id)}
                  style={{ cursor: "pointer" }}
                >
                  {link.name}
                </span>
              </li>
            ))}
          </ul>

          {/* Hamburger Button (mobile/tablet) */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </nav>

        {/* Mobile Slide-Down Menu */}
        <div
          className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}
          aria-hidden={!menuOpen}
        >
          <ul className={styles.mobileNavLinks}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <span
                  className={`${styles.mobileLink} ${pathname === link.path ? styles.mobileActive : ""}`}
                  onClick={() => handleScroll(link.id)}
                  style={{ cursor: "pointer" }}
                >
                  {link.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hero Content */}
        <div className={styles.heroContent}>
          <p className={styles.tagline}>Nonprofit Organization</p>
          <h1 className={styles.heroTitle}>
            Saya <span className={styles.cursive}>Welfare</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Spreading hope and compassion through community service. Together, we uplift lives and build a brighter future for those in need.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.donateBtn} onClick={() => setShowInfoModal(true)}>
              Donate Now
            </button>
            <span className={styles.exploreBtn}>EXPLORE MORE</span>
          </div>
        </div>

        {/* Waves */}
        <div className={styles.waveContainer}>
          <svg className={styles.waveSvg1} viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z" />
          </svg>
          <svg className={styles.waveSvg2} viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,30 C200,70 400,10 600,50 C800,90 1000,10 1200,50 C1320,70 1440,30 1440,50 L1440,80 L0,80 Z" />
          </svg>
          <svg className={styles.waveSvg3} viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,50 C150,20 350,70 550,40 C750,10 950,60 1150,35 C1300,20 1440,50 1440,60 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </header>

      <Herosection />
      <ImageSlider />
      <Report />
      <ZakatSection />
      <DonateSection />
      <ContactSection />

      {/* Donate Modal */}
      {showInfoModal && (
        <div
          className={styles.modalOverlay}
          onClick={(e) => e.target === e.currentTarget && setShowInfoModal(false)}
        >
          <div className={styles.modalWrapper}>
            <button className={styles.model} onClick={() => setShowInfoModal(false)}>
              ×
            </button>
            <Info />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;