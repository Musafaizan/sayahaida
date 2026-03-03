'use client';
import React, { useState } from 'react';
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <div id="contacts" className={styles.wrapper}>
      <section className={styles.hero}>
        <p className={styles.tag}>✦ GET IN TOUCH</p>
        <h1 className={styles.heading}>
          Serving communities with <br />
          <span className={styles.highlight}>love and compassion</span>
        </h1>
        <div className={styles.line} />
        <p className={styles.subtext}>
          Together we can make a difference. Every act of kindness <br />
          brings us closer to a better world.
        </p>
        <div className={styles.cards}>
          <a href="mailto:fuadmufti20@gmail.com" className={styles.card}>
            <div className={`${styles.icon} ${styles.emailIcon}`}>✉️</div>
            fuadmufti20@gmail.com
          </a>
          <a href="tel:+923321403309" className={styles.card}>
            <div className={`${styles.icon} ${styles.phoneIcon}`}>📞</div>
            +92 332 1403309
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2026 Muhammad Fuad Mufti. All rights reserved.</p>
        <p>Made with <span className={styles.heart}>♥</span> for humanity</p>
      </footer>
    </div>
  );
}
export default ContactSection;