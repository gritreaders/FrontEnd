import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './register.module.scss';

const Register = () => {
  return (
    <>
      <Header />
      <div className={styles.register}>
        <div className={styles.register__main}>
          <p className={styles.register__main_logo} />
          <h1>Registrese a GritReaders</h1>
          <div className={styles.register__main_box1}>
            <input placeholder="Name"></input>
            <input placeholder="Last Name"></input>
            <input placeholder="Email"></input>
            <input placeholder="Contraseña"></input>
          </div>
          <div className={styles.register__main_box2}>
            <button>Register</button>
            <p>
              Do you already have an account?
              <Link href="/login"><a> Login to your account</a></Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
};

export default Register;