"use client";

import React from 'react';
import Link from 'next/link';
import styles from './components.module.css';

const CaseStudySection = () => {
  const cases = [
    {
      name: "Riya Upreti",
      image: "/images/case-studies/riya.jpg",
      slug: "riya-upreti",
      stat: "800 to 355K+ subs",
      desc: "Strategic content overhaul and marketing efforts for massive channel growth."
    },
    {
      name: "Ahmed Eldin",
      image: "/images/case-studies/ahmed.jpg",
      slug: "ahmed-eldin",
      stat: "999% Surge",
      desc: "Impressive subscriber growth from 3K to 12K in just 25 days."
    },
    {
      name: "Dr Brian Keating",
      image: "/images/case-studies/brian.jpg",
      slug: "dr-brian-keating",
      stat: "615% More Views",
      desc: "Data-driven strategies and optimization leading to record-breaking reach."
    }
  ];

  return (
    <section id="case-studies" className={styles.section} style={{ background: 'rgba(0,0,0,0.2)', borderTop: '1px solid rgba(255,255,255,0.03)', position: 'relative', overflow: 'hidden' }}>
      <div className={styles.container}>
        <div style={{ padding: '0 5vw', width: '100%', marginBottom: '4vh', zIndex: 10 }}>
          <h2 className={styles.sectionTitle} style={{ fontSize: 'clamp(2.5rem, 5vw, 6rem)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Case Studies</h2>
          <p className={styles.sectionSubtitle} style={{ color: 'var(--accent-secondary)', margin: 0, fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
            Deep dives into our selected projects, showcasing our process, challenges, and the ultimate solutions we delivered.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {cases.map((c, i) => (
            <Link href={`/case-study/${c.slug}`} key={i} className={styles.bentoCard} style={{ padding: 0, overflow: 'hidden', textDecoration: 'none', transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(20px)' }}>
              <div className="case-card-inner" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '100%', height: '240px', position: 'relative', overflow: 'hidden' }}>
                  <img src={c.image} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} className="case-img" />
                  <div style={{ position: 'absolute', bottom: '1.2rem', left: '1.2rem', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', color: 'white', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 'bold', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {c.stat}
                  </div>
                </div>
                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem', color: 'white' }}>{c.name}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>{c.desc}</p>
                  <div style={{ color: 'var(--accent-primary)', fontWeight: 'bold', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', letterSpacing: '0.1em' }}>
                    READ FULL STORY 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: '5rem', textAlign: 'center' }}>
          <Link href="/case-study" className={styles.btn}>
            Explore All Case Studies
          </Link>
        </div>
      </div>

      <style>{`
        #case-studies .bentoCard:hover {
          transform: translateY(-10px);
          border-color: var(--accent-primary);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(0, 112, 243, 0.1);
        }
        #case-studies .bentoCard:hover .case-img {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default CaseStudySection;
