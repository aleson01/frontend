import styles from './styles.module.scss'
import { getCookieServer } from '@/lib/cookieServer'
import {ProductProps} from '@/lib/product.type'
import { api } from '@/services/api'
import { RefreshCw } from 'lucide-react'

async function getProduct():Promise<ProductProps[] | []> {
    try{
      const token = await getCookieServer();
  
      const response = await api.get("/product", {
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

    const products = await getProduct();

    return(
        <>
        <main className={styles.container}>
            <section className={styles.containerHeader}>
                <h1>Lista de Produtos</h1>
                <button>
                    <RefreshCw size={24} color='#3fffa3'/>
                </button>
            </section>

            <section className={styles.listOrders}>
                {products.length === 0 && (
                    <span className={styles.emptyItem}>
                        Nenhum categoria cadastrada no momento...
                    </span>
                )}

                {products.map(product =>(
                <button 
                key={product.id}
                className={styles.orderItem}>
                    <div className={styles.tag}></div>
                    <div>
                        <span> Produto: {product.name}</span>
                    </div>
                </button>
                ))}
            </section> 
        </main>
        </>
        
      )
}