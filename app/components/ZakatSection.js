'use client';
import React from 'react';
import styles from './zakatsection.module.css';
import { FaGraduationCap } from "react-icons/fa";
import { FaHospital } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const ZakatSection = () => {
  return (
    <section id="zakat" className={styles.zakatContainer}>
      
      <div className={styles.watermark}>ZAKAT</div>

      <h1 className={styles.zakatTitle}>
        A Small Share, <span className={styles.highlight}>A Big Impact</span>
      </h1>
      <div className={styles.titleLine}></div>

      <div className={styles.percentBadge}>
        <span className={styles.percent}>5–10%</span>
        <span className={styles.percentText}>of your Zakat for Education & Welfare Services</span>
      </div>

      <p className={styles.zakatDesc}>
        Your Zakat can transform lives — supporting orphans' education, providing healthcare, 
        and uplifting families in need. A fraction of your obligation creates lasting change.
      </p>

      <div className={styles.tagsRow}>
        <div className={styles.tag}><FaGraduationCap className={styles.tagIcon} /> Orphans' Education</div>
        <div className={styles.tag}><FaHospital className={styles.tagIcon} /> Healthcare Access</div>
        <div className={styles.tag}><FaUsers className={styles.tagIcon} /> Family Upliftment</div>
        <div className={styles.tag}><FaHeart className={styles.tagIcon} /> Lasting Change</div>
      </div>

      <button className={styles.donateBtn}>♥ Donate Your Zakat</button>

    </section>
  );
};

export default ZakatSection;