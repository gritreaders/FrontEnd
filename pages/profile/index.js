import React from 'react'
import Image from 'next/image';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import UserProfile from '../../components/UserProfile/UserProfile'
import styles from './profile.module.scss'

const Profile = () => {
  return (
    <>
      <Header />
      <UserProfile />
      <section className={styles.main}>
        <div className={styles.mainContainer}>
          <div className={styles.readingFinished}>
            <div className={styles.reading}>
              <div className={styles.reading__text}>
                <h3 className={styles.reading__title}>READING</h3>
                <Image
                  className={styles.reading__chevron}
                  src='/images/chevron-down-solid.svg'
                  alt='Logo'
                  width={30}
                  height={30}
                />
              </div>
              cardread
            </div>
            <div className={styles.finished}>
              <div className={styles.finished__text}>
                <h3 className={styles.finished__title}>READING</h3>
                <Image
                  className={styles.finished__chevron}
                  src='/images/chevron-down-solid.svg'
                  alt='Logo'
                  width={30}
                  height={30}
                />
              </div>
              cardread
            </div>
          </div>
          <div className={styles.myReviews}>
            <h3 className={styles.myReviews__title}>MY REVIEWS</h3>
            <div className={styles.reviewContainer}>
              review
              pager
            </div>
          </div>
        </div>
      </section>
      <div className={styles.main}></div>
      <Footer />
    </>
  )
}

export default Profile
