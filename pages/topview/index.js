import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BookCard from '../../components/BookCard/BookCard'
import styles from './topView.module.scss'

const TopView = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <p>Top Views</p>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
      <Footer />
    </>
  )
}

export default TopView