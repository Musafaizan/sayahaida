'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './report.module.css';
import { FaHandHoldingUsd } from "react-icons/fa";
import { GiPeaceDove } from "react-icons/gi";
import { PiPottedPlantFill } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";

const Report = () => {
    const [activeSection, setActiveSection] = useState(null);
    const wrapperRef = useRef(null);

    const handleToggle = (section) => {
        setActiveSection(prev => prev === section ? null : section);
    };

    const handleDonateScroll = () => {
        const section = document.getElementById('donate');
        if (section) section.scrollIntoView({ behavior: "smooth" });
        setActiveSection(null);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setActiveSection(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close popup on Escape key
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') setActiveSection(null);
        };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, []);

    return (
        <div id="programs" className={styles.reportContainer}>
            <h3 className={styles.reportTitle}>RAMADAN PROGRAMS</h3>
            <h1 className={styles.reportSubtitle}>Ramadan Activities</h1>
            <p className={styles.reportDescription}>
                During the blessed month of Ramadan, we intensify our efforts to reach
                more families and spread the spirit of giving.
            </p>

            <div className={styles.imagesWrapper} ref={wrapperRef}>

                {/* Image 1 */}
                <div className={styles.imageContainer1}>
                    <div className={styles.reportImage1}>
                        <img src="/img11.jpg" alt="Report Image 1" />
                        <span>01</span>
                        <FaHandHoldingUsd />
                        <h3 className={styles.content1}>Ramadan Ration Drive</h3>
                        <p className={styles.text1}>
                            Distributing essential food packages to families, ensuring no one goes hungry during the blessed month.
                        </p>
                    </div>
                    <GoArrowRight
                        className={styles.hoverArrow}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleToggle('packages');
                        }}
                    />
                    {activeSection === 'packages' && (
                        <div className={styles.popup1}>
                            {/* Close button for mobile */}
                            <button
                                onClick={() => setActiveSection(null)}
                                style={{
                                    position: 'absolute', top: 12, right: 14,
                                    background: 'none', border: 'none',
                                    fontSize: 22, cursor: 'pointer', color: '#888'
                                }}
                            >×</button>
                            <h3 className={styles.popup1Title}>Ramadan Ration Packages</h3>
                            <p className={styles.popup1Desc}>
                                Your generosity ensures families receive complete, nutritious food packages.
                            </p>
                            <div className={styles.popup1Cards}>
                                <div className={styles.package1Card}>
                                    <h4 className={styles.package1Name}>Essential Package</h4>
                                    <p className={styles.package1SubDesc}>Family of 4 for one week</p>
                                    <h2 className={styles.package1Price}>$20</h2>
                                    <ul className={styles.package1Items}>
                                        <li>5kg Premium Rice</li>
                                        <li>2kg Flour (Atta)</li>
                                        <li>1L Cooking Oil</li>
                                        <li>1kg Sugar</li>
                                        <li>500g Tea Leaves</li>
                                        <li>1kg Lentils (Dal)</li>
                                        <li>500g Salt</li>
                                        <li>Dates (1kg)</li>
                                    </ul>
                                    <button className={styles.sponsor1Btn} onClick={handleDonateScroll}>
                                        Sponsor This Package
                                    </button>
                                </div>
                                <div className={`${styles.package1Card} ${styles.popular1}`}>
                                    <span className={styles.popular1Badge}>Most Popular</span>
                                    <h4 className={styles.package1Name}>Complete Family Package</h4>
                                    <p className={styles.package1SubDesc}>Family of 5 for two weeks</p>
                                    <h2 className={styles.package1Price}>$30</h2>
                                    <ul className={styles.package1Items}>
                                        <li>5kg Flour (Atta)</li>
                                        <li>3kg Premium Basmati Rice</li>
                                        <li>2kg Sugar</li>
                                        <li>3L Cooking Oil</li>
                                        <li>1/2kg Tea Leaves</li>
                                        <li>4kg Mixed Lentils</li>
                                        <li>Salt</li>
                                        <li>Dates (1/2kg)</li>
                                        <li>Spice Box (Complete)</li>
                                        <li>Vermicelli (Seviyan)</li>
                                        <li>Gram Flour Dumplings 1/2kg</li>
                                    </ul>
                                    <button className={styles.sponsor1Btn} onClick={handleDonateScroll}>
                                        Sponsor This Package
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Image 2 */}
                <div className={styles.imageContainer2}>
                    <div className={styles.reportImage2}>
                        <img src="/img9.jpeg" alt="Report Image 2" />
                        <GiPeaceDove />
                        <span>02</span>
                        <h3 className={styles.content2}>Iftar for the Needy</h3>
                        <p className={styles.text2}>
                            Organizing Iftar gatherings for underprivileged families and individuals in our community.
                        </p>
                    </div>
                    <GoArrowRight
                        className={styles.hoverArrow}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleToggle('iftar');
                        }}
                    />
                    {activeSection === 'iftar' && (
                        <div className={styles.popup2}>
                            <button
                                onClick={() => setActiveSection(null)}
                                style={{
                                    position: 'absolute', top: 12, right: 14,
                                    background: 'none', border: 'none',
                                    fontSize: 22, cursor: 'pointer', color: '#888'
                                }}
                            >×</button>
                            <h3 className={styles.popup2Title}>Ramadan 2026 - Lahore</h3>
                            <p className={styles.popup2Desc}>
                                We are arranging Iftar drives in Ramadan 2026 in Lahore for underprivileged
                                families and individuals. Come forward and support us in spreading the
                                blessings of Ramadan to those who need it most.
                            </p>
                            <div className={styles.iftar2Card}>
                                <span className={styles.iftar2Emoji}>🤲</span>
                                <p className={styles.iftar2Highlight}>
                                    Your contribution can help us serve Iftar to hundreds of needy people
                                </p>
                            </div>
                            <button className={styles.iftar2Btn} onClick={handleDonateScroll}>
                                Donate for Iftar Drive
                            </button>
                        </div>
                    )}
                </div>

                {/* Image 3 */}
                <div className={styles.imageContainer3}>
                    <div className={styles.reportImage3}>
                        <PiPottedPlantFill />
                        <span>03</span>
                        <img src="/img13.jpg" alt="Report Image 3" />
                        <h3 className={styles.content3}>Iftar for Orphans</h3>
                        <p className={styles.text3}>
                            Special Iftar programs dedicated to orphaned children, bringing joy and warmth to their hearts.
                        </p>
                    </div>
                    <GoArrowRight
                        className={styles.hoverArrow}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleToggle('orphan');
                        }}
                    />
                    {activeSection === 'orphan' && (
                        <div className={styles.popup3}>
                            <button
                                onClick={() => setActiveSection(null)}
                                style={{
                                    position: 'absolute', top: 12, right: 14,
                                    background: 'none', border: 'none',
                                    fontSize: 22, cursor: 'pointer', color: '#888'
                                }}
                            >×</button>
                            <h3 className={styles.popup3Title}>Orphanage Iftar Program</h3>
                            <p className={styles.popup3Desc}>
                                We are arranging Iftar in orphanages to bring joy and warmth to orphaned
                                children during the blessed month of Ramadan. Your support helps us create
                                memorable moments for these children.
                            </p>
                            <div className={styles.iftar3Card}>
                                <span className={styles.iftar3Emoji}>🤲</span>
                                <p className={styles.iftar3Highlight}>
                                    Help us bring smiles to orphaned children this Ramadan
                                </p>
                            </div>
                            <button className={styles.iftar3Btn} onClick={handleDonateScroll}>
                                Donate for Orphan Iftar
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Report;