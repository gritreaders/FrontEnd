import React from 'react';
import styles from './bookCard.module.scss';
import Link from 'next/link';

import StarsRank from '../StarsRank/StarsRank';

const Card = () => {
  return (
    <section>
      <li>
        <Link href="/">
          <p className="bookCard">
            <div className="card">
              <div className="card__img">
                <img src="../../public/images/grit-readers.png" alt="Avatar" />
              </div>
              <div>
                <div className="card_data">
                  <h1>Aqui va el titulo del libro</h1>
                  <h4>Autor</h4>
                  <p>Reseña</p>
                  <StarsRank />
                  <p>Link de compra</p>
                  <p>Link foro</p>
                </div>
                <div className="aux_data">
                  <h4>Autor</h4>
                  <h4>ISBN</h4>
                  <h4>Categoria</h4>
                  <h4>Paginas</h4>
                  <h4>Fecha</h4>
                  <h4>Editorial</h4>
                  <h4>Idioma</h4>
                </div>
              </div>
            </div>
          </p>
        </Link>
      </li>
    </section>
  );
};

export default Card;