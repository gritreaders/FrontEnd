import styles from './register.module.scss';

const Register = () => {
  return <div className={styles.register}>
      <div className={styles.register__main}>
        <h1>Registrese a GritReaders</h1>
        <input placeholder="Name"></input>
        <input placeholder="Email"></input>
        <input placeholder="Contraseña"></input>
        <button>Sign Up</button>
      </div>
    </div>;
};

export default Register;