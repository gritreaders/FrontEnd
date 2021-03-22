import React from 'react'
import styles from './card.module.scss'

const Card = ({ books, children }) => {
  return (
    <div className={styles.container}>
      <img src={books.coverUrl} alt="Logo" />
      <div className={styles.infoBook}>
        <h3>{books.title}</h3>
        <p>{books.publisher}</p>
        {children}
      </div>
    </div>
  )
}

export default Card
