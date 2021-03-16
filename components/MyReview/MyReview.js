import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ReadBook from '../../components/ReadBook/ReadBook'

import styles from './MyReview.module.scss'

const MyReview = () => {
  return (
    <div className={styles.myReview}>
      <ReadBook />
      <p className={styles.myReview__text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged....
      </p>
      <a className={styles.myReview__seeMore} href="">
        See more
      </a>

      <div className={styles.myReview__trashEdit}>
        <Image
          className={styles.readBook__img}
          src='/images/trash-solid.svg'
          alt='bookImg'
          width={30}
          height={30}
        />
          <Image
          className={styles.readBook__img}
          src='/images/edit-solid.svg'
          alt='bookImg'
          width={30}
          height={30}
        />
      </div>
    </div>
  )
}

export default MyReview