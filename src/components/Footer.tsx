"use client";

import React from "react";
import styles from "./components.module.css";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <h2 className={styles.footerBigText}>Envision</h2>

        <div className={styles.footerGrid}>
          <div className={styles.footerInfo}>
            <p>Maharashtra, India</p>
            <p style={{ color: 'var(--accent-primary)', marginTop: '1rem' }}>contact@envisionmedia.in</p>
            <p>+91 9766519797</p>
          </div>

          <div className={styles.footerLinks}>
            <h4>Sitemap</h4>
            <a href="#benefits">Benefits</a>
            <a href="#process">Protocol</a>
            <a href="#showcase">Showcase</a>
          </div>

          <div className={styles.footerSocial}>
            <h4>Connect</h4>
            <a href="https://www.instagram.com/envision.vids/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://x.com/Ronit9797" target="_blank" rel="noopener noreferrer">
              X (Twitter)
            </a>
          </div>
        </div>

        <div className={styles.footerBottom} style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <p>© 2026 Envision Media. <span style={{ color: 'var(--accent-secondary)' }}>Made by <a href="https://github.com/thekeybinds" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', textUnderlineOffset: '4px', color: 'inherit' }}>The KeyBinds</a></span></p>
        </div>
      </div>
    </footer>
  );
}
