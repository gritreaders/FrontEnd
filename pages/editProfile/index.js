import { useState } from 'react'
import { useRouter } from 'next/router'
import { AiOutlineUpload } from "react-icons/ai";
import Link from 'next/link'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Modal from '../../components/Modal/Modal'
import styles from './editProfile.module.scss'
import axios from 'axios'
import { useMutation } from 'react-query'

const editProfile = () => {
  const [form, formValues] = useState({})
  const router = useRouter()

  const fetchEditProfile = async () => {
    const editProfile = await axios({
      url: 'https://gritreaders-ca-api.herokuapp.com/api/v1/auth/signup',
      method: 'post',
      eaders: { 'content-type': 'application/json' },
      data: form,
    })
    return editProfile
  }

  const mutation = useMutation(fetchEditProfile, {
    onSuccess: (data) => {
      router.push('/login')
    },
    onError: (err) => {
      console.log(err)
    },
  })

  const handleEditProfile = (event) => {
    event.preventDefault()
    mutation.mutate(JSON.stringify(form))
  }

  const updateInput = (event) => {
    formValues({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const user = {
    value: false,
    name: "Nombre de Usuario"
  }

  return (
    <>
      <Header />
      <div className={styles.editProfile}>
        <div className={styles.editProfile__main}>
          <img
            className={styles.editProfile__main_logo}
            src="images/photo.png"
            alt="logo"
          />
          <h1>{user.value ? `${user.name}` : "Usuario"}</h1>
          <form
            className={styles.editProfile__main_box1}
            onSubmit={handleEditProfile}
          >
            <div>
              <button>
                <AiOutlineUpload />
              </button>
              <h3>Load image</h3>
            </div>
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
          </form>
          <div className={styles.editProfile__main_box2}>
            <button className={styles.editProfile__main_box2_button1}>
              Save
            </button>
            <button className={styles.editProfile__main_box2_button2}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <Modal 
        content="Your Changes have been saved 😎"
      />
    </>
  )
}

export default editProfile
