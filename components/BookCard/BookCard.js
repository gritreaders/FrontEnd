import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StarsRank from '../StarsRank/StarsRank';
import styles from './bookCard.module.scss';

const Card = () => {
  return (
    <section className={styles.main}>
      <Link href="/topview">
        <div className={styles.main__bookCard}>
          <div className={styles.main__bookCard_img}>
          <Image
            src='/images/portada-libro.jpg'
            alt='Book'
            width={200}
            height={300}
          />
          </div>
          <div className={styles.main__bookCard_up}>
            <h1>Aqui va el titulo del libro</h1>
            <div>
              <p>Autor</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book.
              </p>
            </div>
            <div className={styles.main__bookCard_down}>
              <div className={styles.main__bookCard_down_left}>
                <p>Autor</p>
                <p>ISBN</p>
                <p>Categoria</p>
                <p>Paginas</p>
                <p>Fecha</p>
                <p>Editorial</p>
                <p>Idioma</p>
              </div>
              <div className={styles.main__bookCard_down_right}>
                <StarsRank />
                <p>Link de compra</p>
                <p>Link foro</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Card;