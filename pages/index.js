import React from 'react'
import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Review from '../components/Review/Review'
import Search from '../components/Search/Search'
import styles from './home.module.scss'

const HomePage = () => {
  return (
    <>
      <Header />
      <section className={styles.main}>
        <div className={styles.container}>
          <div className={styles.search}>
            <Search />
          </div>
          <div className={styles.cardList}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <h1 className={styles.h1}>Your Favorite Reviews</h1>
          <div className={styles.reviewList}>
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default HomePage
