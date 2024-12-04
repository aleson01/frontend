import Image from "next/image"
import Link from "next/link"
import styles from '../page.module.scss'
import logoImg from '/public/logopizzaria.png'
import { api } from '@/services/api'
import { redirect } from 'next/navigation'

export default function Signup(){

  async function handleRegister(formData: FormData){
    "use server"

    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")
    const level = formData.get("level")

  
    if( name === "" || email === "" || password === "" || password === ""){
      console.log("PREENCHA TODOS OS CAMPOS")
      return;
    }

    try{
      await api.post("/user", {
        name,
        email,
        password,
        level
      })

    }catch(err){
      console.log("error")
      console.log(err)
    }

    redirect("/")
  }

  return(
    <>
      <div className={styles.containerCenter}>
        <Image
          src={logoImg}
          alt="Logo da pizzaria"
          width={250}
        />

        <section className={styles.login}>
          <h1>Criando sua conta</h1>
          <form action={handleRegister}>
            <input 
              type="text"
              required
              name="name"
              placeholder="Digite seu nome..."
              className={styles.input}
            />

            <input 
              type="email"
              required
              name="email"
              placeholder="Digite seu email..."
              className={styles.input}
            />

            <input 
              type="password"
              required
              name="password"
              placeholder="***********"
              className={styles.input}
            />
            <select
            name="level"
            required
            className={styles.select}>
              <option value="coz">Cozinha</option>
              <option value="gar">Garçom</option>
              <option value="adm">Administrador</option>
            </select>

            <button type="submit" className={styles.button}>
              Cadastrar
            </button>
          </form>

        </section>

      </div> 
    </>
  )
}