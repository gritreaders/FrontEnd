import React from 'react';
import styles from './card.module.scss';
import Image from 'next/image'

const Card = ({children}) => {
  return (
    <div className={styles.container}>
      <Image
        src='/images/portada-libro.jpg'
        alt='Logo'
        width={170}
        height={260}
      />
      <div className={styles.infoBook}>
        <h3>Awesome title book</h3>
        <p>autor - name</p>
        {children}
      </div>
    </div>
  );
};

export default Card;
