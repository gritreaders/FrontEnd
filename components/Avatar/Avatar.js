import React from 'react'
import Link from 'next/link'

import styles from './Avatar.module.scss'

const IMAGEN_DEFAULT =
  'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'

const Avatar = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.profile}>
        <img src={IMAGEN_DEFAULT} alt="" />
        <p>Ruben</p>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/user">My Acount</Link>
        </li>
        <li>
          <Link href="/topview">Top Ten</Link>
        </li>
        <li>
          <Link
            onClick={() => {
              localStorage.clear()
              dispatch(setError())
            }}
            href="/login"
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Avatar
