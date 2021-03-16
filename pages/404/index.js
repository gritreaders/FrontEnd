import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import E404 from '../../components/E404/E404'

import styles from './Error404.module.scss'

const Error404 = () => {
  return (
    <>
      <Header />
      <E404 />
      <Footer />
    </>
  )
}

export default Error404
