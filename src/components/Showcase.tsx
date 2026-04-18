"use client";

import React, { useRef } from "react";
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
      <div className={styles.stickyGallery}>
        <div style={{ position: 'absolute', top: '10%', left: '5vw', zIndex: 10 }}>
          <h2 className={styles.sectionTitle} style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}>Our Work</h2>
          <p className={styles.sectionSubtitle} style={{ color: 'var(--accent-secondary)' }}>Selected Portfolios</p>
        </div>
        
        <motion.div style={{ x }} className={styles.galleryTrack}>
          {/* Add empty space to start scrolling after the title */}
          <div style={{ width: '30vw', flexShrink: 0 }} />
          
          {videos.map((id, index) => (
            <motion.div 
              key={`${id}-${index}`} 
              className={styles.showcaseItem}
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
    </section>
  );
}
