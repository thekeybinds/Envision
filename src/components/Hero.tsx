"use client";

import React from "react";
import styles from "./components.module.css";
import { motion } from "framer-motion";

export default function Hero() {
  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/envision-media97/30min?back=1&month=2025-11' });
    }
  };

  const titleLines = [
    { text: "We Build", type: 'default' },
    { text: "organic content machine", type: 'gradient' },
    { text: "for ", type: 'default', highlight: "Entrepreneurs" },
    { text: "and ", type: 'default', highlight: "podcasters" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const item = {
    hidden: { y: "100%" },
    show: { y: "0%", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.heroContent}`}>
        <motion.div variants={container} initial="hidden" animate="show">
          <h1 className={styles.heroTitle}>
            {titleLines.map((line, i) => (
              <React.Fragment key={i}>
                <span className={styles.wordContainer}>
                  <motion.span 
                    variants={item} 
                    style={{ display: 'inline-block' }} 
                    className={line.type === 'gradient' ? styles.textGradient : ''}
                  >
                    {line.text}
                    {line.highlight && (
                      <span className={styles.textAccent}>{line.highlight}</span>
                    )}
                  </motion.span>
                </span>
                <br />
              </React.Fragment>
            ))}
          </h1>
        </motion.div>
        
        <motion.p 
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as any, delay: 0.8 }}
        >
          We help you in building your brand, which predictably brings more leads and build trust in your market segment.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as any, delay: 1 }}
        >
          <a href="#" onClick={openCalendly} className={styles.btn}>
            Ignite Growth
          </a>
        </motion.div>
      </div>
    </section>
  );
}
