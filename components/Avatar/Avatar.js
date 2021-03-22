import React from 'react'
import Link from 'next/link'

import styles from './Avatar.module.scss'

const IMAGEN_DEFAULT =
  'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'

const Avatar = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <div className={styles.menu}>
      <div className={styles.profile}>
        <img src={!user ? IMAGEN_DEFAULT : user.avatarUrl} alt="" />
        <p>{user.firstName}</p>
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
