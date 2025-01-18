// components/Hero.tsx
import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <span className={styles.greeting}>Myself</span>
          <h1 className={styles.title}>
            <span className={styles.name}>Qurat Khan</span>
            <span className={styles.role}>Full Stack Developer</span>
          </h1>
          <p className={styles.description}>
            I build exceptional digital experiences and transform ideas into reality
            through elegant and efficient code.
          </p>
          {/* <div className={styles.cta}>
            <button className={`${styles.button} ${styles.primary}`}>
              View Projects
            </button>
            <button className={`${styles.button} ${styles.secondary}`}>
              Contact Me
            </button>
          </div> */}
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <Image
              src="/project/banner_bg.png" // Add your image path here
              alt="Developer Profile"
              width={400}
              height={400}
              className={styles.profileImage}
              priority
            />
            <div className={styles.backgroundElements}>
              <div className={styles.circle}></div>
              <div className={styles.dots}></div>
              <div className={styles.square}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


