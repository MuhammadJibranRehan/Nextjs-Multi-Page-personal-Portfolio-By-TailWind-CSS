import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Your Name</label>
          <input type="text" id="name" className={styles.input} />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Your Email</label>
          <input type="email" id="email" className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Your Message</label>
          <textarea id="message" className={styles.textarea} />
        </div>
        
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;