import React from 'react'
import Image from 'next/image'
import styles from './UserProfile.module.scss'

const UserProfile = ({id}) => {
  return (
    <section className={styles.userProfile}>
      <div className={styles.userProfile__containerImg}>
        <Image
          className={styles.userProfile__img}
          src="/images/photo.png"
          alt="photo profile"
          width={200}
          height={200}
        />
      </div>
      <h2 className={styles.userProfile__name}>{id}</h2>
      <a className={styles.button__editProfile} href="">
        Edit profile
      </a>
    </section>
  )
}

export default UserProfile