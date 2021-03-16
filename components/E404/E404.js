import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './E404.module.scss'

const E404 = () => {
  return (
    <section className={styles.e404}>
      <p className={styles.e404__Message}>OPPS! We have a</p>
      <h1 className={styles.e404__Number}>404</h1>
      <p className={styles.e404__Type}>Error</p>
      <Image
        className={styles.e404__Img}
        src="/images/404.png"
        alt="Logo"
        width={420}
        height={340}
      />
    </section>
  )
}

export default E404
