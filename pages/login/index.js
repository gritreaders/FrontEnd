import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './login.module.scss';

const Login = () => {
  return (
    <>
      <Header />
        <div className={styles.login}>
          <div className={styles.login__main}>
            <p className={styles.login__main_logo} />
            <h1>Sign-In into GritReaders</h1>
            <div className={styles.login__main_box1}>
              <input placeholder="Usuario"></input>
              <input placeholder="Contraseña"></input>
            </div>
            <div className={styles.login__main_box2} >
              <Link href="/login"><a>Forget password?</a></Link>
              <button>login</button>
              <p>
                You are new in GritReader?
                <Link href="/register"><a> Create Account</a></Link>
              </p>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
};

export default Login;
