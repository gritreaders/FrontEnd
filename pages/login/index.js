import Link from 'next/link' 
import styles from './login.module.scss';

const Login = () => {
  return <div className={styles.login}>
      <Link href="/"><a className={styles.login__logo}></a></Link>
      <div className={styles.login__main}>
        <h1>GritReaders</h1>
        <input placeholder="Usuario"></input>
        <input placeholder="Contraseña"></input>
        <div>
          <Link href="/login"><a>Olvide la contraseña</a></Link>
          <button>entrar</button>
        </div>
      </div>
    </div>;
};

export default Login;
