import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image
          src='/images/grit-readers.png'
          alt='Logo'
          width={50}
          height={50}
        />
        <div>
          <Link href='/'>
            <a className={styles.link} href='/'>
              Home
            </a>
          </Link>
          <Link href='/'>
            <a className={styles.link} href=''>
              Top Ten
            </a>
          </Link>
          <Link href='/'>
            <a className={styles.link} href=''>
              Perfil
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
