import { UserProps } from '@/lib/user.type'
import { api } from '@/services/api'
import { getCookieServer } from '@/lib/cookieServer'
import styles from './styles.module.scss'
import { RefreshCw } from 'lucide-react'

async function getUser():Promise<UserProps[] | []> {
  try{
    const token = await getCookieServer();

    const response = await api.get("/user", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data || []

  }catch(err){
    console.log(err);
    return [];
  }
  
}

export default async function User(){
  
  const users = await getUser();

  console.log(users)

  return(
    <main className={styles.container}>

      <section className={styles.containerHeader}>
        
        <h1>Usuários</h1>
        <button>
          <RefreshCw size={24} color='#3fffa3'/>
        </button>
      </section>

      <section className={styles.listOrders}>
        {users.map(user =>(
          <button 
            key={user.id}>
              <div className={styles.tag}>
                <span> Usuario {user.name}</span>
              </div>
          </button>
        ))}
      </section> 
    </main>
  )
}