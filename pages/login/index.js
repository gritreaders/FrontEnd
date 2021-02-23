import Link from 'next/link' 
import styles from './login.module.scss';

const Login = () => {
  return <div className={styles.login}>
      <div className={styles.login__main}>
        <h1>Bienvenido a GritReaders</h1>
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
