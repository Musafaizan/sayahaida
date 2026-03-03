'use client';
import React, { useRef } from 'react';
import styles from './imageslider.module.css';

const programs = [
    {
        img: "/s1.jpeg",
        title: "Ration Drives",
        desc: "Supporting white-collar families who were suffering from lockdown with essential food supplies and household necessities."
    },
    {
        img: "/s2.jpeg",
        title: "Education Support",
        desc: "Bearing educational expenses for white-collar families' children and orphans to ensure they continue their studies."
    },
    {
        img: "/s3.jpeg",
        title: "Monthly Support",
        desc: "Providing regular ration and helping with household expenses of widows and white-collar families in need."
    },
    {
        img: "/s4.jpeg",
        title: "Healthcare",
        desc: "Providing healthcare facilities and arranging medical camps for underprivileged communities across Pakistan."
    },
    {
        img: "/s5.jpeg",
        title: "Community Growth",
        desc: "From a small initiative during a crisis to a growing movement of compassion — we continue to expand our reach."
    },
];

const ImageSlider = () => {
    const trackRef = useRef(null);

    const scrollLeft = () => {
        trackRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    };

    const scrollRight = () => {
        trackRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    };

    return (
        <section id="facilities" className={styles.section}>
            <div className={styles.header}>
                <p className={styles.tagline}>WHAT WE DO</p>
                <h2 className={styles.title}>Our Facilities </h2>
                <div className={styles.underline}></div>
                <p className={styles.subtitle}>
                    From a small initiative during a crisis to a growing movement of compassion — we continue to expand our reach to serve those who need it most.
                </p>
            </div>

            <div className={styles.sliderWrapper}>
                <button className={styles.arrowLeft} onClick={scrollLeft}>‹</button>

                <div className={styles.track} ref={trackRef}>
                    {programs.map((item, i) => (
                        <div className={styles.card} key={i}>
                            <div className={styles.imgBox}>
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDesc}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button className={styles.arrowRight} onClick={scrollRight}>›</button>
            </div>

            <div className={styles.quoteSection}>
                <p className={styles.quoteText}>
                    <span className={styles.quoteMark}>"</span>
                    From a small initiative during a crisis to a growing movement of compassion — we continue to expand our reach to serve those who need it most.
                </p>
                <div className={styles.quoteLine}></div>
                <span className={styles.quoteAuthor}>— Saya Welfare</span>
            </div>
        </section>
    );
};

export default ImageSlider;