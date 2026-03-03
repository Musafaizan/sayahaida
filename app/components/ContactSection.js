'use client';
import React from 'react';
import styles from "./ContactSection.module.css";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaPhone } from "react-icons/fa6";

const ContactSection = () => {

  return (
    <div id="contacts" className={styles.wrapper}>

      <section className={styles.hero}>
        <div className={styles.left}>
          <h1 className={styles.heading}>
            Let's talk about how we can <br />
            transform lives together!
          </h1>
        </div>

        <div className={styles.right}>
          <p className={styles.tag}>Get in touch with our team</p>
          <a href="mailto:fuadmufti20@gmail.com" className={styles.emailLink}>
            fuadmufti20@gmail.com
          </a>
          <a href="tel:+923321403309" className={styles.phoneLink}>
            +92 332 1403309
          </a>
        </div>
      </section>

      <footer className={styles.footer}>

        <div className={styles.footerLogo}>
          <span className={styles.logoText}>saya</span>
        </div>

        <p className={styles.footerCenter}>© 2026 Muhammad Fuad Mufti. All Rights Reserved.</p>

        <div className={styles.footerIcons}>
          <a href="" target="_blank" className={styles.footerIcon}><FaFacebookF /></a>
          <a href="" target="_blank" className={styles.footerIcon}><FaXTwitter /></a>
          <a href="" target="_blank" className={styles.footerIcon}><FaInstagram /></a>
          <a href="" target="_blank" className={styles.footerIcon}><FaLinkedinIn /></a>
        </div>

      </footer>
    </div>
  );
};

export default ContactSection;