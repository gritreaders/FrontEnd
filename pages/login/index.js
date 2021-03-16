import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './login.module.scss'

import { useMutation } from 'react-query'
import axios from 'axios'

const Login = () => {
  const [form, formValues] = useState({})
  const router = useRouter()

  const fetchUser = async () => {
    const login = await axios({
      url: 'https://gritreaders-ca-api.herokuapp.com/api/v1/auth/signIn',
      method: 'post',
      headers: { 'content-type': 'application/json' },
      data: form,
    })
    return login
  }

  const mutation = useMutation(fetchUser, {
    onSuccess: (data) => {
      router.push('/')
    },
    onError: (err) => {
      console.log(err.message)
      console.log(err.statusCode)
    },
  })

  const handleLogin = (event) => {
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
      <div className={styles.login}>
        <div className={styles.login__main}>
          <p className={styles.login__main_logo} />
          {/* {mutation.isError ? <p>{mutation.error.message} </p> : null} */}
          <h1>Sign-In into GritReaders</h1>
          <form className={styles.login__main_box1} onSubmit={handleLogin}>
            <input
              type="text"
              name="email"
              placeholder="Usuario"
              onChange={updateInput}
            ></input>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={updateInput}
            ></input>
            <button>login</button>
          </form>
          <div className={styles.login__main_box2}>
            <Link href="/login">
              <a>Forget password?</a>
            </Link>
            <p>
              You are new in GritReader?
              <Link href="/register">
                <a> Create Account</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login
