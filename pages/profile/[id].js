import React from 'react'
import { useRouter } from "next/router"
import { FaChevronDown } from "react-icons/fa"

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import UserProfile from '../../components/UserProfile/UserProfile'
import ReadBook from '../../components/ReadBook/ReadBook'
import MyReview from '../../components/MyReview/MyReview'
import Pager from '../../components/Pager/Pager'

import styles from './profile.module.scss'

const Profile = () => {
  const { query: { id }} = useRouter()
  return (
    <>
      <Header />
      <section className={styles.main}>
        <UserProfile id={id}/>
        <div className={styles.container}>
          <div className={styles.containerEnd}>
            <div className={styles.reading}>
              <div className={styles.reading__text}>
                <h3 className={styles.reading__title}>reading</h3>
                <button className={styles.reading__chevron}>
                  <FaChevronDown/>
                </button>
              </div>
              <ReadBook />
              <ReadBook />
              <ReadBook />
            </div>
            <div className={styles.finished}>
              <div className={styles.finished__text}>
                <h3 className={styles.finished__title}>finished</h3>
                <button className={styles.reading__chevron}>
                  <FaChevronDown/>
                </button>
              </div>
              <ReadBook />
              <ReadBook />
              <ReadBook />
              <ReadBook />
              <ReadBook />
              <ReadBook />
            </div>
          </div>
          <div className={styles.myReviews}>
            <h3 className={styles.myReviews__title}>MY REVIEWS</h3>
            <div className={styles.reviewContainer}>
              <MyReview />
              <MyReview />
              <MyReview />
              <MyReview />
              <Pager />
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