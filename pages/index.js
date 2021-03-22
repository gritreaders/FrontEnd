import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Review from '../components/Review/Review'
import Search from '../components/Search/Search'
import Loader from '../components/Loader/Loader'
import styles from './home.module.scss'

const HomePage = () => {
  const [page, setPage] = useState(1)

  const fetchBooks = async () => {
    const res = await axios.get(
      `https://gritreaders-ca-api.herokuapp.com/api/v1/books?page=${page}&limit=12`
    )
    return res
  }

  const { isLoading, error, data } = useQuery(['books', page], fetchBooks)

  if (isLoading) return <Loader />

  if (error) return `An error has ocurred: ${error.message}`

  return (
    <>
      <Header />
      <section className={styles.main}>
        <div className={styles.container}>
          <div className={styles.search}>
            <Search />
          </div>
          <div className={styles.cardList}>
            {data
              ? data.data.data.map((books) => (
                  <Card key={books.bookId} books={books} />
                ))
              : ''}
          </div>
          <div className={styles.paginador}>
            <button
              onClick={() => setPage((old) => Math.max(old - 1, 1))}
              disabled={page === 1}
            >
              Previous page
            </button>
            <p>{page}</p>
            <button
              onClick={() => setPage((old) => (!data.data.next ? old : old + 1))}
              disabled={Object.entries(data.data.next).length === 0}
            >
              Next page
            </button>
          </div>
          {/* <h1 className={styles.h1}>Your Favorite Reviews</h1>
          <div className={styles.reviewList}>
            <Review />
            <Review />
            <Review />
            <Review />
          </div> */}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default HomePage
