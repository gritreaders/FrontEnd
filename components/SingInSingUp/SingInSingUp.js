import React from 'react'
import Link from 'next/link'

import styles from './SingInSingUp.module.scss'

const SingInSingUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.singIn}>
        <Link href="/register">Sign in</Link>
      </div>
      <div className={styles.singUp}>
        <Link href="/login">Login</Link>
      </div>
    </div>
  )
}

export default SingInSingUp
