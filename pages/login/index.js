import { useState, useEffect } from 'react'

import Link from 'next/link'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './login.module.scss'

import { useMutation, useQuery } from 'react-query'

const axios = require('axios')

const Login = () => {
  const user = {
    email: 'user3@gmail.com',
    password: '12345678',
  }

  // const fetchUser = async () => {
  //   const login = await axios({
  //     url: 'https://gritreaders-ca-api.herokuapp.com/api/v1/auth/signin',
  //     method: 'post',
  //     headers: { 'content-type': 'application/json' },
  //     data: user,
  //   }).then((res) => res.json())
  //   return login
  // }

  const mutation = useMutation((form) => {
    return axios({
      method: 'post',
      url: 'https://gritreaders-ca-api.herokuapp.com/api/v1/auth/signin',
      headers: { 'content-type': 'application/json' },
      data: JSON.stringify(form),
    })
  })

  const handleLogin = (event) => {
    event.preventDefault()
    mutation.mutate(JSON.stringify(form))
  }

  const [form, formValues] = useState({})

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
