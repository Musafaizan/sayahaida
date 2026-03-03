'use client';
import React, { useState } from 'react';
import styles from './donatesection.module.css';

const amounts = [10, 50, 100, 200];

const DonateSection = () => {
  const [selected, setSelected] = useState(100);
  const [custom, setCustom] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleAmount = (amt) => {
    setSelected(amt);
    setIsCustom(false);
    setCustom('');
  };

  const handleCustom = () => {
    setIsCustom(true);
    setSelected(null);
  };

  const donatingAmount = isCustom ? (custom || 0) : selected;

  const handleSubmit = () => {
    if (name && email && phone) {
      setShowModal(false);
      setShowThankYou(true);
    }
  };

  return (
    <section id="donate" className={styles.section}>

      {!showThankYou && (
        <>
          <h1 className={styles.title}>
            Inspiring acts of <span className={styles.highlight}>kindness,</span><br />
            our charity of <span className={styles.highlight}>journey</span>
          </h1>

          <div className={styles.titleLine}></div>

          <p className={styles.desc}>
            Every rupee you give transforms a life. Choose your gift below and be the reason someone smiles today.
          </p>

          <div className={styles.card}>
          
            <div className={styles.amountsRow}>
              {amounts.map((amt) => (
                <button
                  key={amt}
                  className={`${styles.amountBtn} ${selected === amt && !isCustom ? styles.activeBtn : ''}`}
                  onClick={() => handleAmount(amt)}
                >
                  ${amt}
                </button>
              ))}
              <button
                className={`${styles.amountBtn} ${isCustom ? styles.activeBtn : ''}`}
                onClick={handleCustom}
              >
                Custom
              </button>
            </div>

          
            {isCustom && (
              <div className={styles.customInput}>
                <span className={styles.dollarSign}>$</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                  className={styles.inputField}
                  autoFocus
                />
              </div>
            )}

            <button className={styles.donateBtn} onClick={() => setShowModal(true)}>
              ♥ DONATE NOW →
            </button>

            <div className={styles.trustRow}>
              <span>🔒 Secure Payment</span>
              <span>⊙ 100% Goes to Cause</span>
              <span>🏷 Tax Deductible</span>
            </div>
          </div>
        </>
      )}

      {showThankYou && (
        <div className={styles.thankYouBox}>
          <h2>Thank You, {name}!</h2>
          <p>Your donation of <strong>${donatingAmount}</strong> has been received.</p>
          <p>You're changing lives and spreading hope. ❤️</p>
        </div>
      )}

      {/* MODAL */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalBox}>

            <button className={styles.modalClose} onClick={() => setShowModal(false)}>×</button>

            <h3 className={styles.modalTitle}>Complete Your Donation ♥</h3>
            <p className={styles.modalSubtitle}>Donating: <strong>${donatingAmount}</strong></p>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.modalInput}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.modalInput}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={styles.modalInput}
            />

            <button className={styles.modalSubmitBtn} onClick={handleSubmit}>
              ♥ CONFIRM DONATION →
            </button>

          </div>
        </div>
      )}

    </section>
  );
};

export default DonateSection;