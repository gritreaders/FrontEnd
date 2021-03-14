import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import StarsRank from '../StarsRank/StarsRank'

import styles from './ReadBook.module.scss'

const ReadBook = () => {
  return (
    <Link href='/'>
      <div className={styles.readBook}>
        <Image
          className={styles.readBook__img}
          src='/images/1.jpg'
          alt='bookImg'
          width={80}
          height={120}
        />
        <div className={styles.readBook__info}>
          <h3 className={styles.readBook__title}>Awesome Title</h3>
          <p className={styles.readBook__autor}>
            <span>Autor:</span>Yurgen Snuk
          </p>
          <div className={styles.readBook__qualification}>
            <p className={styles.readBook__number}>4.8</p>
            <StarsRank />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ReadBook