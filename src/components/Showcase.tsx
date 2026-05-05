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

  const marqueeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: marqueeScroll } = useScroll({
    target: marqueeRef,
    offset: ["start end", "end start"]
  });
  const marqueeX = useTransform(marqueeScroll, [0, 1], ["0%", "-5%"]);
  const marqueeXReverse = useTransform(marqueeScroll, [0, 1], ["-5%", "0%"]);

  const marqueeText = "Podcast Video ✦ Viral Clips ✦ Documentary Videos ✦ YouTube videos ✦ Realtors ✦ Business Owners ✦ Coaches ✦ Creators ✦ Podcaster ✦ ";

  return (
    <>
      {/* Marquee Section */}
      <div ref={marqueeRef} style={{ overflow: 'hidden', whiteSpace: 'nowrap', padding: '6rem 0 2rem', width: '100%', position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <motion.div style={{ x: marqueeX, display: 'inline-block', willChange: 'transform' }}>
          <span style={{
            fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            textTransform: 'uppercase',
            color: '#fff',
            paddingRight: '1rem',
            display: 'inline-block'
          }}>
            {marqueeText.repeat(4)}
          </span>
        </motion.div>

        <motion.div style={{ x: marqueeXReverse, display: 'inline-block', willChange: 'transform' }}>
          <span style={{
            fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            textTransform: 'uppercase',
            color: '#fff',
            paddingRight: '1rem',
            display: 'inline-block'
          }}>
            {marqueeText.repeat(4)}
          </span>
        </motion.div>
      </div>

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

                  {/* Open Button Overlay */}
                  <a
                    href={`https://vimeo.com/${id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      position: 'absolute',
                      bottom: '1.25rem',
                      right: '1.25rem',
                      padding: '0.5rem 1.25rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '100px',
                      color: '#fff',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      textDecoration: 'none',
                      zIndex: 20,
                      transition: 'all 0.3s ease',
                      pointerEvents: 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    Open
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Podcast Trailers Section */}
      <section className={styles.section} style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ padding: '0 5vw', width: '100%', marginBottom: '3rem' }}>
          <h2 className={styles.sectionTitle} style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '0.5rem' }}>Podcast Trailers</h2>
          <p className={styles.sectionSubtitle} style={{ color: 'var(--accent-secondary)', margin: 0 }}>Latest Episodes & Highlights</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          padding: '0 5vw'
        }}>
          {["VDZG2F3dvPQ", "rsaE8__spmc", "L9-l7hum64U"].map((id, index) => (
            <motion.div
              key={id}
              className={styles.showcaseItem}
              style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${id}?controls=1&rel=0&playsinline=1&modestbranding=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title={`Podcast Trailer ${index + 1}`}
                style={{ width: '100%', height: '100%', border: 'none' }}
              ></iframe>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
