import React from 'react';
import Image from 'next/image';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img
          src='/images/grit-readers3.png'
          alt='Logo'
          width={250}
          height={50}
        />
        <h4>
          Platzi Master
          <br />
          2021
        </h4>
        <h4>With love by Israel's Team</h4>
      </div>
    </footer>
  );
};

export default Footer;
