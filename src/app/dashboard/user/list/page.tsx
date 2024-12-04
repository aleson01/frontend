import { UserProps } from "@/lib/user.type";
import styles from '../components/users/styles.module.scss'
import Users from "../components/users";
import { getCookieServer } from '@/lib/cookieServer'
import { api } from '@/services/api'

interface Props{
    users: UserProps[]
  }

export async function List(){
  const token = await getCookieServer();

  const response = await api.get("/user", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    return(
      <>
      <main className={styles.container}>
        <h1>Nova Categoria</h1>
      </main>
        
      </>
    )
}