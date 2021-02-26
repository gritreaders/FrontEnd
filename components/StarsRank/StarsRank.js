import React from 'react';
import styles from './starsRank.module.scss';

const StarsRank = () => {
  return (
    <section>
      <div className={styles.container}>
        <a href='#' value="1">★</a>
        <a href='#' value="2">★</a>
        <a href='#' value="3">★</a>
        <a href='#' value="4">★</a>
        <a href='#' value="5">★</a>
      </div>
    </section>
  );
};

export default StarsRank;

//<a href='#'>★</a> &#9733;  