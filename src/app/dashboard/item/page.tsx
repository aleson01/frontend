import { api } from '@/services/api'
import {getCookieServer} from '@/lib/cookieServer'
import { Orders } from './components/orders'
import { OrderProps } from '@/lib/order.type'


export default async function Category(){

  

  return(
    <>
    <section >
        <button >
        </button>

        <article >
          <h2>Adicionar Pedido</h2>

          <form >
            
            <span >
              <b>Categoria</b>
            </span>

            <select name="category">
              <option>
                Hamburguers
              </option>
            </select>

            <span >
              <b>Item</b>
            </span>

            <select name="product">
                <option>
                  Hamburgão
                </option>
            </select>

            <span >
              <b>Quantidade</b>
            </span>

            <input
              type="number" 
              name="amount"
              placeholder="Quantidade"
              required
              
            />
            <button >
            </button>     
          </form>

          

        </article>

     </section>
    </>
    
  )
}