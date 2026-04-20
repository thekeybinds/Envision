"use client";

import React, { useState, useEffect } from "react";
import styles from "./components.module.css";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/envision-media97/30min?back=1&month=2025-11' });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={`${styles.headerContainer} container`}>
        <motion.a 
          href="#" 
          className={styles.logo}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Envision
        </motion.a>
        <nav className={styles.nav}>
          <a href="#showcase" className={styles.navLink}>Showcase</a>
          <a href="#case-studies" className={styles.navLink}>Case Studies</a>
          <a href="#benefits" className={styles.navLink}>Benefits</a>
          <a href="#process" className={styles.navLink}>Process</a>
          <a href="#faq" className={styles.navLink}>FAQ</a>
        </nav>
        <motion.a 
          href="#"
          onClick={openCalendly}
          className={`${styles.btn} ${styles.btnPrimary}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Book A Call
        </motion.a>
      </div>
    </header>
  );
}
