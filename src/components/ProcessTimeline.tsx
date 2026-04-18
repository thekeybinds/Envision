"use client";

import React from "react";
import styles from "./components.module.css";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Strategy and foundation",
    desc: "The process begins by getting out what’s in your head, out of your head. We give you 100% clarity after taking short interviews, researching your ICP, building a brand story and other assets, helping you gain crystal clarity about your brand’s content direction."
  },
  {
    number: "02",
    title: "Content Design",
    desc: "Consistency means trust and with a solid foundation we will design the visual guidelines for editing your content. This builds authority and trust already warranted by your expertise. We will build a complimentary visual identity specific to videos."
  },
  {
    number: "03",
    title: "Pre-Production",
    desc: "This is where you invest 1 hour a week and record a podcast with an industry expert, interview with our team, or record long-form videos from the scripts we send. Always create with confidence."
  },
  {
    number: "04",
    title: "Post-Production",
    desc: "We take your raw content and transform it into authority-driven assets that build trust and credibility for your brand at scale. We distribute it across YouTube, LinkedIn, Instagram, TikTok, and Facebook."
  },
  {
    number: "05",
    title: "Backend automation",
    desc: "We set automation and backend systems to predictably convert your followers into paying customers."
  }
];

export default function ProcessTimeline() {
  return (
    <section id="process" className={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
        >
          <h2 className={styles.sectionTitle} style={{ color: 'var(--foreground)' }}>
            The Protocol
          </h2>
        </motion.div>

        <div className={styles.processList}>
          {steps.map((step, idx) => (
            <motion.div 
              key={step.number}
              className={styles.processItem}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
            >
              <div className={styles.processIndex}>{step.number}</div>
              <div className={styles.processDetails}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
