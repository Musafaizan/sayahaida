'use client';
import React, { useRef, useState } from 'react';
import styles from './imageslider.module.css';

const programs = [
    {
        img: "/s15.jpeg",
        title: "Ration Drives",
        desc: "Supporting white-collar families who were suffering from lockdown with essential food supplies and household necessities."
    },
    {
        img: "/s18.jpeg",
        title: "Education Support",
        desc: "Bearing educational expenses for white-collar families' children and orphans to ensure they continue their studies."
    },
     {
        img: "/sg.jpeg",
        title: "Water Filtration",
        desc: "Ensuring access to clean and safe drinking water by installing water filtration plants in underserved communities."
    },
    {
        img: "/sd.jpeg",
        title: "Healthcare",
        desc: "Providing healthcare facilities and arranging medical camps for underprivileged communities across Pakistan."
    },
    {
        img: "/sh.jpeg",
        title: "Monthly Support",
        desc: "Providing regular ration and helping with household expenses of widows and white-collar families in need."
    },
    {
        img: "/sb.jpeg",
        title: "Tree Plantation",
        desc: "Organizing tree plantation drives to increase green spaces, reduce pollution, and create a healthier environment for future generations."
    },
    {
        img: "/sa.jpeg",
        title: "Environmental Awareness",
        desc: "Spreading awareness about environmental protection, waste management, and sustainable living through community programs and campaigns."
    },
   {
        img: "/s5.jpeg",
        title: "Community Growth",
        desc: "From a small initiative during a crisis to a growing movement of compassion — we continue to expand our reach."
    },
    {
        img: "/se.jpeg",
        title: "Medical Care",
        desc: "Providing essential medical assistance, free checkups, and medicines to families who cannot afford healthcare."
    }

];

const ImageSlider = () => {
    const trackRef = useRef(null);
    const [hovering, setHovering] = useState(false);

    const scrollLeft = () => {
        trackRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    };

    const scrollRight = () => {
        trackRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    };

    return (
        <section id="facilities" className={styles.section}>
            <div className={styles.header}>
                <p className={styles.tagline}>WHAT WE DO</p>
                <h2 className={styles.title}>Our Facilities</h2>
                <div className={styles.underline}></div>
                <p className={styles.subtitle}>
                    From a small initiative during a crisis to a growing movement of compassion.
                </p>
            </div>

            <div
                className={styles.sliderWrapper}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
            >

                <button
                    className={`${styles.arrowLeft} ${hovering ? styles.arrowVisible : ''}`}
                    onClick={scrollLeft}
                >
                    &#8592;
                </button>

                <div className={styles.track} ref={trackRef}>
                    {programs.map((item, i) => {
                        const isCenter = i % 2 === 1; // index 1,3 bari — 0,2,4 choti
                        return (
                            <div
                                className={`${styles.card} ${isCenter ? styles.cardBig : styles.cardSmall}`}
                                key={i}
                            >
                                <div className={styles.imgBox}>
                                    <img src={item.img} alt={item.title} />
                                    <div className={styles.overlay}>
                                        <h3 className={styles.cardTitle}>{item.title}</h3>
                                        <p className={styles.cardDesc}>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Right Arrow - sirf hover par dikhega */}
                <button
                    className={`${styles.arrowRight} ${hovering ? styles.arrowVisible : ''}`}
                    onClick={scrollRight}
                >
                    &#8594;
                </button>
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