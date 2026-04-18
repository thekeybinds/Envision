"use client";

import React from "react";
import styles from "./components.module.css";
import { motion } from "framer-motion";

export default function Benefits() {
  return (
    <section id="benefits" className={styles.section} style={{ padding: '20vh 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
        >
          <h2 className={styles.sectionTitle} style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.7)' }}>
            What you get
          </h2>
        </motion.div>

        <div className={styles.bentoGrid}>
          <motion.div 
            className={`${styles.bentoCard} ${styles.bentoSpan8}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any, delay: 0.1 }}
          >
            <h3 style={{ color: 'var(--accent-primary)' }}>01. Scale Trust</h3>
            <p>We craft high-fidelity narratives that act as liquid assets across all video-first platforms, organically embedding your brand authority into the market's consciousness.</p>
          </motion.div>

          <motion.div 
            className={`${styles.bentoCard} ${styles.bentoSpan4} ${styles.bentoOffsetDown}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any, delay: 0.2 }}
          >
            <h3 style={{ color: 'var(--accent-secondary)' }}>02. Always On</h3>
            <p>Get 24x7 support. Dedicate just 1 hour a week, and our engine will flood the zone indefinitely.</p>
          </motion.div>

          <motion.div 
            className={`${styles.bentoCard} ${styles.bentoSpan4}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any, delay: 0.3 }}
          >
            <h3 style={{ color: 'var(--foreground)' }}>03. Deep Analytics</h3>
            <p>Total accountability. We parse the noise to deliver transparent metric growth trajectories.</p>
          </motion.div>

          <motion.div 
            className={`${styles.bentoCard} ${styles.bentoSpan8} ${styles.bentoOffsetUp}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any, delay: 0.4 }}
          >
            <h3 style={{ color: 'var(--accent-primary)' }}>04. Lead Generation</h3>
            <p>Views are vanity, conversions are sanity. Our conversion engines capture target demographics actively seeking your expertise.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
