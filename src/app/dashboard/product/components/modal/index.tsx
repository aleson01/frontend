"use client"

import styles from './styles.module.scss'
import { X } from 'lucide-react'
import { use } from 'react'
import { OrderContext } from '@/providers/order'
import { calculateTotalOrder } from '@/lib/helper'

export function Modalproduct(){
  const { onRequestClose, order, finishOrder } = use(OrderContext);

  async function handleFinishOrder(){
    await finishOrder(order[0].order.id)
  }

  return(
    <dialog className={styles.dialogContainer}>

     <section className={styles.dialogContent}>
        <button className={styles.dialogBack} onClick={onRequestClose}>
          <X size={40} color="#FF3f4b" />
        </button>

        <article className={styles.container}>
          <h2>Detalhes do Produto</h2>

          <span className={styles.table}>
            Mesa <b></b>
          </span>
        
          <span className={styles.name}>
            <b>nome</b>
          </span>



          <section className={styles.item}>
            
            <span className={styles.description}>
             
            </span>
          </section>             

          <button className={styles.buttonOrder} onClick={handleFinishOrder}>
            Editar Produto
          </button>

          <button className={styles.buttonOrder2} onClick={handleFinishOrder}>
            Excluir Produto
          </button>

        </article>

     </section>

    </dialog>
  )
}