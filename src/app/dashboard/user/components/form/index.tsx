"use client"

import styles from './styles.module.scss'
import { Button } from '@/app/dashboard/components/button'
import { api } from '@/services/api'
import { getCookieClient } from '@/lib/cookieClient'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

interface CategoryProps{
  name: string;
  email: string;
  pasword: string;
}

interface Props{
  users: CategoryProps[]
}

export function Form({users}: Props){
  const router = useRouter();

  async function handleRegisterUser(formData: FormData){

    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")

    if(!name || !email || !password){
      toast.warning("Preencha todos os campos!")
      return;
    }

    console.log(name, email, password)

    const data = new FormData();

    data.append("name", name)
    data.append("email", email)
    data.append("password", password)

    const token =  await getCookieClient();

    await api.post("/user", data, {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .catch((err) => {
      console.log(err);
      toast.warning("Falha ao cadastrar Usuario!")
      return;
    })

    toast.success("Usuario Registrado com SUCESSO!")
    router.push("/dashboard")

  }

  return(
    <main className={styles.container}>
      <h1>Novo USUÁRIO</h1>

      <form className={styles.form} action={handleRegisterUser}>
        
        <label>Nome</label>
        <input 
          type="text" 
          name="name"
          placeholder="Digite o Nome..."
          required
          className={styles.input}
        />

        <label>Email</label>
        <input 
          type="text" 
          name="email"
          placeholder="Digite o Email..."
          required
          className={styles.input}
        />
        <label>Senha</label>
        <input 
          type="password" 
          name="password"
          placeholder="Digite a senha..."
          required
          className={styles.input}
        />

        <Button name="Cadastrar Usuário" />

      </form>
    </main>
  )
}