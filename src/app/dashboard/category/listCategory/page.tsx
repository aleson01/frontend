import styles from './styles.module.scss'
import { getCookieServer } from '@/lib/cookieServer'
import {CategoryProps} from '@/lib/category.type'
import { api } from '@/services/api'
import { RefreshCw } from 'lucide-react'

async function getCategory():Promise<CategoryProps[] | []> {
    try{
      const token = await getCookieServer();
  
      const response = await api.get("/category", {
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
export default async function Category(){

    const category = await getCategory();

    return(
        <>
        <main className={styles.container}>
            <section className={styles.containerHeader}>
                <h1>Lista de Usuários</h1>
                <button>
                    <RefreshCw size={24} color='#3fffa3'/>
                </button>
            </section>

            <section className={styles.listOrders}>
                {category.length === 0 && (
                    <span className={styles.emptyItem}>
                        Nenhum categoria cadastrada no momento...
                    </span>
                )}

                {category.map(categoria =>(
                <button 
                key={categoria.id}
                className={styles.orderItem}>
                    <div className={styles.tag}></div>
                    <div>
                        <span> Usuario {categoria.name}</span>
                    </div>
                </button>
                ))}
            </section> 
        </main>
        </>
        
      )
}