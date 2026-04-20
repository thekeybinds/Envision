"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/components/components.module.css';

export default function RiyaUpretiCaseStudy() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <div className={styles.galaxyCanvas}></div>
      
      {/* Full-width Immersive Header */}
      <div style={{ width: '100%', height: '60vh', minHeight: '400px', position: 'relative', display: 'flex', alignItems: 'flex-end' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <img src="/images/case-studies/riya.jpg" alt="Riya Upreti Background" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(2,2,2,1) 100%)' }}></div>
        </div>

        <div style={{ padding: '0 5vw', width: '100%', maxWidth: '1200px', margin: '0 auto', paddingBottom: '3rem' }}>
          <Link href="/case-study" className={styles.btn} style={{ marginBottom: '2rem', padding: '0.6rem 1.2rem', fontSize: '0.9rem', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', borderColor: 'rgba(255,255,255,0.1)' }}>
            &larr; Back
          </Link>
          <h1 className={styles.sectionTitle} style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', margin: 0, color: 'white', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>Riya Upreti</h1>
        </div>
      </div>
      
      {/* Main Content Area (Intro Text) */}
      <div style={{ maxWidth: '800px', margin: '4rem auto 0 auto', padding: '0 5vw' }}>
        <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '2rem' }}>
            We are proud to have significantly contributed to the growth of the RIYA UPRETI YouTube channel. Within just one year, we helped RIYA UPRETI increase its subscriber base from 800 to over 3,55,000 subscribers.
          </p>
          <p style={{ marginBottom: '2rem' }}>
            Our strategic approach, tailored content, and targeted marketing efforts have played a pivotal role in achieving this remarkable milestone. We look forward to continuing our partnership and further enhancing the success of the RIYA UPRETI YouTube channel.
          </p>
          <a href="http://www.youtube.com/@riyaupreti" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: '#ff0000', fontWeight: 'bold', textDecoration: 'none', border: '1px solid rgba(255,0,0,0.3)', padding: '0.8rem 1.5rem', borderRadius: '50px', background: 'rgba(255,0,0,0.05)', marginTop: '0.5rem', marginBottom: '1rem', transition: 'all 0.3s ease' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            Visit YouTube Channel
          </a>
        </div>
      </div>

      {/* Expanded Content Area for Boxes and Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 10vw auto', padding: '0 5vw' }}>
          <style>{`
            .ps-container {
              display: flex;
              flex-direction: column;
              gap: 1.5rem;
              align-items: stretch;
              margin-bottom: 4rem;
              margin-top: 4rem;
            }
            .ps-box-wrapper {
              width: 100%;
              flex: 1;
              display: flex;
              flex-direction: column;
            }
            .styled-box {
              width: 100%;
              border-radius: 32px;
              padding: 2.5rem;
              backdrop-filter: blur(10px);
              transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              display: flex;
              flex-direction: column;
              box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            }
            .styled-box:hover {
              transform: translateY(-5px);
            }
            .problem-box {
              background: linear-gradient(135deg, rgba(255,51,102,0.08) 0%, rgba(255,51,102,0.02) 100%);
              border: 1px solid rgba(255,51,102,0.2);
            }
            .problem-box:hover {
              border-color: rgba(255,51,102,0.4);
              box-shadow: 0 20px 40px rgba(255,51,102,0.1);
            }
            .solution-box {
              background: linear-gradient(135deg, rgba(51,255,153,0.08) 0%, rgba(51,255,153,0.02) 100%);
              border: 1px solid rgba(51,255,153,0.2);
            }
            .solution-box:hover {
              border-color: rgba(51,255,153,0.4);
              box-shadow: 0 20px 40px rgba(51,255,153,0.1);
            }
            .box-list {
              list-style-type: none;
              padding-left: 0;
              margin: 0;
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .box-list li {
               margin-bottom: 1.2rem;
               transition: all 0.3s ease;
               display: flex;
               align-items: flex-start;
               color: rgba(255,255,255,0.9);
               font-size: 0.95rem;
               line-height: 1.5;
            }
            .box-list li:hover {
               transform: translateX(5px);
               color: white;
            }
            .ps-arrow {
              display: flex;
              align-items: center;
              justify-content: center;
              color: rgba(255,255,255,0.5);
              animation: bounceDown 2s infinite ease-in-out;
              padding: 1rem 0;
            }
            .ps-arrow svg {
              transform: rotate(90deg);
              width: 32px;
              height: 32px;
            }
            
            @media (min-width: 850px) {
              .ps-container {
                display: grid;
                grid-template-columns: 1fr auto 1fr;
                align-items: center;
                gap: 2rem;
              }
              .ps-box-wrapper {
                width: 100%;
              }
              .ps-arrow {
                animation: bounceRight 2s infinite ease-in-out;
                padding: 0;
              }
              .ps-arrow svg {
                transform: rotate(0deg);
                width: 48px;
                height: 48px;
              }
            }
            
            @keyframes bounceRight {
              0%, 100% { transform: translateX(0); }
              50% { transform: translateX(15px); }
            }
            @keyframes bounceDown {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(15px); }
            }
            .result-img {
              transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              cursor: pointer;
              border-radius: 12px;
            }
            .result-img:hover {
              transform: scale(1.05);
              filter: drop-shadow(0 10px 20px rgba(255,255,255,0.15));
            }
            .modal-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              background: rgba(0,0,0,0.85);
              backdrop-filter: blur(10px);
              z-index: 99999;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 2rem;
              cursor: default !important;
              animation: fadeIn 0.3s ease;
            }
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            .modal-content {
              max-width: 90vw;
              max-height: 90vh;
              object-fit: contain;
              border-radius: 12px;
              box-shadow: 0 20px 60px rgba(0,0,0,0.8);
              cursor: default !important;
              animation: scaleUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            @keyframes scaleUp {
              from { transform: scale(0.9); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
          `}</style>

          <div className="ps-container">
            <div className="ps-box-wrapper">
              <div className="styled-box problem-box">
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#ff3366', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                  Problem
                </h2>
                <ul className="box-list">
                  {[
                    "Consistency",
                    "Improper focus on SEO",
                    "Poor Titles and Thumbnails",
                    "The channel was not properly optimized",
                    "Failure to track and analyze data"
                  ].map((item, i) => (
                    <li key={i}>
                      <span style={{ color: '#ff3366', marginRight: '1rem', fontWeight: 'bold', fontSize: '1.2rem', lineHeight: '1' }}>✦</span>
                      <span style={{ paddingTop: '0.1rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="ps-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>

            <div className="ps-box-wrapper">
              <div className="styled-box solution-box">
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#33ff99', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  Solution
                </h2>
                <ul className="box-list">
                  {[
                    "Channel optimization & In-depth keyword research.",
                    "Competitor analysis & Effective content distribution.",
                    "Consistently upload high-quality videos with proper SEO.",
                    "Take strategic action based on data from YouTube Studio.",
                    "Reindex and overhaul non-performing videos."
                  ].map((item, i) => (
                    <li key={i}>
                      <span style={{ color: '#33ff99', marginRight: '1rem', fontWeight: 'bold', fontSize: '1.2rem', lineHeight: '1' }}>✦</span>
                      <span style={{ paddingTop: '0.1rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <h2 style={{ fontSize: '2rem', marginTop: '4rem', marginBottom: '2rem', color: 'white' }}>Let’s See Few Results</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
            {[1, 2, 5, 8, 9, 10, 11, 12].map(num => {
              const imgSrc = `/images/case-studies/riya-results/RIYA-${num}.png`;
              return (
                <div key={num} style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'visible', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src={imgSrc} 
                    alt={`Result ${num}`} 
                    className="result-img"
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                    onClick={() => setSelectedImg(imgSrc)}
                  />
                </div>
              );
            })}
          </div>
        </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="modal-overlay" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="Enlarged Result" className="modal-content" />
          <button 
            onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
            style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'white', fontSize: '3rem', cursor: 'default !important', opacity: 0.7, transition: 'opacity 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
            onMouseOut={(e) => e.currentTarget.style.opacity = '0.7'}
          >
            &times;
          </button>
        </div>
      )}
    </main>
  );
}
