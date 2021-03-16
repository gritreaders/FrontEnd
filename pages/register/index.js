import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './register.module.scss'
import axios from 'axios'
import { useMutation } from 'react-query'

const Register = () => {
  const [form, formValues] = useState({})
  const router = useRouter()

  const fetchRegister = async () => {
    const register = await axios({
      url: 'https://gritreaders-ca-api.herokuapp.com/api/v1/auth/signUp',
      method: 'post',
      eaders: { 'content-type': 'application/json' },
      data: form,
    })
    return register
  }

  const mutation = useMutation(fetchRegister, {
    onSuccess: (data) => {
      router.push('/login')
    },
    onError: (err) => {
      console.log(err)
    },
  })

  const handleRegister = (event) => {
    event.preventDefault()
    mutation.mutate(JSON.stringify(form))
  }

  const updateInput = (event) => {
    formValues({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <>
      <Header />
      <div className={styles.register}>
        <div className={styles.register__main}>
          <figure>
            <img
              className={styles.register__main_logo}
              src="images/grit-readers-white.svg"
              alt="logo"
            />
          </figure>
          <h1>Registrese a GritReaders</h1>
          <form
            className={styles.register__main_box1}
            onSubmit={handleRegister}
          >
            <input
              type="text"
              name="firstName"
              onChange={updateInput}
              placeholder="Name"
            ></input>
            <input
              type="text"
              name="lastName"
              onChange={updateInput}
              placeholder="Last Name"
            ></input>
            <input
              type="text"
              name="email"
              onChange={updateInput}
              placeholder="Email"
            ></input>
            <input
              type="text"
              name="password"
              onChange={updateInput}
              placeholder="Contraseña"
            ></input>
            <button>Register</button>
          </form>
          <div className={styles.register__main_box2}>
            <p>
              Do you already have an account?
              <Link href="/login">
                <a> Login to your account</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Register
