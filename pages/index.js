import React from 'react';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import styles from './home.module.scss'

const HomePage = () => {
  return (
    <>
      <Header />
      <section className={styles.main}>
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
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
