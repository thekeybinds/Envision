"use client";

import React, { useState } from "react";
import styles from "./components.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What exactly does Envision do?",
    a: "We’re a content distribution powerhouse, specializing in launching and scaling podcasts for forward-thinking tech brands, VCs, Thought leaders, and SaaS companies."
  },
  {
    q: "How do you achieve these results?",
    a: "We leverage a powerful combination of organic strategies like niche community page distribution and highly shareable video clips, coupled with trailers, intros, newsletters, and a multi-platform content distribution."
  },
  {
    q: "What is the turnaround time?",
    a: "Our standard turnaround time from recording to publish is typically 5-7 days, with priority for quick timelines when urgent."
  },
  {
    q: "Do you handle the entire process?",
    a: "Absolutely. Our comprehensive services cover the entire content lifecycle—from strategic planning and scripting, to final editing, motion graphics, and distribution."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className={styles.section}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <h2 className={styles.sectionTitle}>Get Answers to Questions Today</h2>
          <p className={styles.sectionSubtitle} style={{ margin: '0 auto 3rem auto' }}>
            Quick answers to help you understand our services better.
          </p>
        </motion.div>

        <div className={styles.faqList}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx} 
                className={styles.faqItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <button 
                  className={styles.faqQuestion}
                  onClick={() => toggleFAQ(idx)}
                >
                  {faq.q}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={styles.faqAnswer}
                    >
                      <p style={{ paddingBottom: '1.5rem' }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
