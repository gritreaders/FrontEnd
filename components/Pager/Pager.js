import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Pager.module.scss'

const Pager = () => {
  return (
    <div className={styles.pager}>
      <a className={styles.pager__button} href="">
        L
      </a>
      <a className={styles.pager__button} href="">
        1
      </a>
      <a className={styles.pager__button} href="">
        2
      </a>
      <a className={styles.pager__button} href="">
        3
      </a>
      <a className={styles.pager__buttonSingle} href="">
        Siguiente
      </a>
      <a className={styles.pager__button} href="">
        R
      </a>
    </div>
  )
}

export default Pager
