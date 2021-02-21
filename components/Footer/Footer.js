import React from 'react';
import Image from 'next/image';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Image
          src='/images/grit-readers.png'
          alt='Logo'
          width={50}
          height={50}
        />
        <h3>
          Platzi Master
          <br />
          2021
        </h3>
        <h3>With love by Israel's Team</h3>
      </div>
    </footer>
  );
};

export default Footer;
