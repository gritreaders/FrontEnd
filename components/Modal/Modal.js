import React from 'react'

import styles from './modal.module.scss';

const Modal = ({ content }) => {
  return (
    <section className={styles.container}>
      <main className={styles.container__modal}>
        <div className={styles.container__modal_title}>
          <h1>{content}</h1>
        </div>
        <div className={styles.container__modal_button}>
          <button>
            OK
          </button>
        </div>
      </main>
    </section>
  )
}

export default Modal
