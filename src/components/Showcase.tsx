"use client";

import React, { useRef } from "react";
import Link from "next/link";
import styles from "./components.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

const videos = [
  "1140263898", "1140263881", "1140263854", "1140263819", 
  "1140263800", "1140263772", "1140263745", "1140263726"
];

export default function Showcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-50%"]);

  return (
    <section id="showcase" className={styles.showcaseContainer} ref={targetRef}>
      <div className={styles.stickyGallery} style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
        
        {/* Top: Title & Subtitle */}
        <div style={{ padding: '0 5vw', width: '100%', marginBottom: '2vh', zIndex: 10 }}>
          <h2 className={styles.sectionTitle} style={{ fontSize: 'clamp(2.5rem, 5vw, 6rem)', marginBottom: '0.5rem' }}>Our Work</h2>
          <p className={styles.sectionSubtitle} style={{ color: 'var(--accent-secondary)', margin: 0 }}>Selected Portfolios</p>
        </div>
        
        {/* Middle: Carousel */}
        <div style={{ width: '100%', overflow: 'visible' }}>
          <motion.div style={{ x }} className={styles.galleryTrack}>
            {videos.map((id, index) => (
              <motion.div 
                key={`${id}-${index}`} 
                className={styles.showcaseItem}
                style={{ height: 'min(600px, 55vh)', width: 'min(350px, 32vh)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <iframe
                  src={`https://player.vimeo.com/video/${id}?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&dnt=1&background=1`}
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  allowFullScreen
                  title={`Vimeo ${id}`}
                ></iframe>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
