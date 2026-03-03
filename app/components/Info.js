"use client";
import React, { useState } from 'react';
import styles from './info.module.css';
import { IoIosHeart } from "react-icons/io";
import { AiOutlineBank } from "react-icons/ai";
import { IoCopyOutline, IoCheckmarkCircle } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Info = ({ onClose }) => {
    const [showToast, setShowToast] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2500);
    };

    return (
        <div id="bank" className={styles.Infocontainer}>

            <div className={styles.box}>

                {/* Cross button - box ke andar top right */}
                {onClose && (
                    <button onClick={onClose} className={styles.closeBtn}>×</button>
                )}

                {/* Headings box ke andar */}
                <h1 className={styles.make}>Make a Difference Today</h1>
                <h2 className={styles.section} >
                    Every contribution, big or small, brings hope to those in need. Your generosity can transform lives.
                </h2>

                <div className={styles.bankHeader}>
                    <AiOutlineBank className={styles.bankIcon} />
                    <h2 className={styles.account}>Bank Account Details</h2>
                </div>

                <div className={styles.cardsWrapper}>
                    <div className={styles.card}>
                        <div className={styles.cardBankName}>
                            <AiOutlineBank className={styles.cardIcon} />
                            <span>Meezan Bank</span>
                        </div>
                        <p className={styles.label}>Account Holder</p>
                        <p className={styles.value}>Muhammad Fuad Mufti</p>
                        <p className={styles.label}>IBAN Number</p>
                        <div className={styles.ibanRow}>
                            <p className={styles.iban}>PK68MEZN0002360103881902</p>
                            <IoCopyOutline
                                className={styles.copyIcon}
                                onClick={() => copyToClipboard("PK68MEZN0002360103881902")}
                                title="Copy IBAN"
                            />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardBankName}>
                            <AiOutlineBank className={styles.cardIcon} />
                            <span>MCB Bank</span>
                        </div>
                        <p className={styles.label}>Account Holder</p>
                        <p className={styles.value}>Muhammad Fuad Mufti</p>
                        <p className={styles.label}>IBAN Number</p>
                        <div className={styles.ibanRow}>
                            <p className={styles.iban}>PK13MUCB1606024001010677</p>
                            <IoCopyOutline
                                className={styles.copyIcon}
                                onClick={() => copyToClipboard("PK13MUCB1606024001010677")}
                                title="Copy IBAN"
                            />
                        </div>
                    </div>
                </div>

                <p className={styles.note}>
                    Please share your payment confirmation with us for acknowledgment
                </p>
            </div>

            {showToast && (
                <div className={styles.toast}>
                    <IoCheckmarkCircle className={styles.toastIcon} />
                    IBAN copied to clipboard!
                </div>
            )}
        </div>
    );
};

export default Info;