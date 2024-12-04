"use client"

import styles from './styles.module.scss'
import { X } from 'lucide-react'
import { use } from 'react'
import { OrderContext } from '@/providers/order'

export function Modalorder(){
  const { onRequestClose, order, finishOrder } = use(OrderContext);

  async function handleFinishOrder(){
    await finishOrder(order[0].order.id)
  }
  async function handleRegisterItem(){
    
  }

  return(
    <dialog className={styles.dialogContainer}>
      <section className={styles.dialogContent}>
        <button className={styles.dialogBack} onClick={onRequestClose}>
          <X size={40} color="#FF3f4b" />
        </button>

        <article className={styles.container}>
          <h2>Adicionar Pedido</h2>

          <form className={styles.form} action={handleRegisterItem}>
            
            <span className={styles.name}>
              <b>Categoria</b>
            </span>

            <select name="category">
              <option>
                Hamburguers
              </option>
            </select>

            <span className={styles.name}>
              <b>Item</b>
            </span>

            <select name="product">
                <option>
                  Hamburgão
                </option>
            </select>

            <span className={styles.name}>
              <b>Quantidade</b>
            </span>

            <input
              type="number" 
              name="amount"
              placeholder="Quantidade"
              required
              className={styles.input}
            />
            <button className={styles.buttonOrder} onClick={handleFinishOrder}>
              Concluir pedido
            </button>     
          </form>

          

        </article>

     </section>

    </dialog>
  )
}