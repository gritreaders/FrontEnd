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
            width={150}
            height={200}
          />
          </div>
          <div className={styles.main__bookCard_left}>
            <h1>Aqui va el titulo del libro</h1>
            <div>
              <h4>Autor</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book. It has 
                survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                it to make a type specimen book. It has survived not only five centuries, but also 
                the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum 
                has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book. It has 
                survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.</p>
              <StarsRank />
              <p>Link de compra</p>
              <p>Link foro</p>
            </div>
          </div>
          <div className={styles.main__bookCard_right}>
            <h4>Autor</h4>
            <h4>ISBN</h4>
            <h4>Categoria</h4>
            <h4>Paginas</h4>
            <h4>Fecha</h4>
            <h4>Editorial</h4>
            <h4>Idioma</h4>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Card;