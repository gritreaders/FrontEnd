import React from 'react'
import Image from 'next/image'
import styles from './search.module.scss'

const Search = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Que libro desea buscar" />
      <img src="/images/search.png" width={20} height={20} />
      {/* <button>Categories</button> */}
    </div>
  )
}

export default Search
