'use client';
import React, { useState } from 'react';
import styles from './herosection.module.css';

const Herosection = () => {
  const [playing, setPlaying] = useState(false);
  const youtubeId = "8jSdLOWWiiY";
return (
  <div id="about" className={styles.aboutContainer}>

      {/* LEFT */}
      <div className={styles.leftContent}>
        <h1 className={styles.aboutTitle}>Our Story</h1>
        <h2 className={styles.aboutSubtitle}>About Saya Welfare</h2>
        <div className={styles.underline}></div>

        <div className={styles.textWithPhoto}>
          <div className={styles.aboutContent}>
            <p>
              We started in <span className={styles.highlight}>2020</span> when COVID-19 hit Pakistan. What began as a ration drive for white-collar families suffering from the lockdown has grown into a comprehensive welfare organization.
            </p>
            <p>
              Today, we serve communities across multiple sectors — from <span className={styles.highlight}>education</span> to <span className={styles.highlight}>healthcare</span> — always focused on those who need it most.
            </p>
          </div>

          <div className={styles.sidePhoto}>
            <img src="/s9.jpeg" alt="Saya Welfare" />
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className={styles.rightContent}>
        {!playing ? (
          <div className={styles.videoThumb} onClick={() => setPlaying(true)}>
            <img src="/eidhi.jpeg" alt="Edhi Foundation" />
            <div className={styles.overlay}>
              <div className={styles.youtubePlay}>
                <svg viewBox="0 0 68 48" width="55" height="40">
                  <path d="M66.5 7.6C65.7 4.6 63.4 2.3 60.4 1.5 55.1 0 34 0 34 0S12.9 0 7.6 1.5C4.6 2.3 2.3 4.6 1.5 7.6 0 12.9 0 24 0 24s0 11.1 1.5 16.4c.8 3 3.1 5.3 6.1 6.1C12.9 48 34 48 34 48s21.1 0 26.4-1.5c3-.8 5.3-3.1 6.1-6.1C68 35.1 68 24 68 24s0-11.1-1.5-16.4z" fill="red" />
                  <path d="M45 24L27 14v20" fill="white" />
                </svg>
              </div>
              <p className={styles.overlayText}>Edhi Foundation — Khidmat ki Kahani</p>
            </div>
          </div>
        ) : (
          <iframe
            className={styles.videoFrame}
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title="Edhi Foundation"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
          />
        )}

        {/* Stats video ke neeche */}
        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <h2 className={styles.statNum}>10K+</h2>
            <p className={styles.statLabel}>Families Helped</p>
          </div>
          <div className={styles.statCard}>
            <h2 className={styles.statNum}>5+</h2>
            <p className={styles.statLabel}>Sectors Served</p>
          </div>
          <div className={styles.statCard}>
            <h2 className={styles.statNum}>2020</h2>
            <p className={styles.statLabel}>Est. Pakistan</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Herosection;