"use client"
import styles from '../../styles.module.scss'
import { RefreshCw } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Button } from '@/app/dashboard/components/button'

export function Form(){
    const router = useRouter();

    function handleRefresh(){
        router.refresh();
        toast.success("Pedidos atualizados com sucesso!")
      }
    function handleRegisterUser(){

    }
    
return(
    <>
      <main className={styles.container}>
  
        <section className={styles.containerHeader}>
          <h1>Pedido</h1> 
          
        </section>
  
        <section className={styles.listOrders}>

        <form className={styles.form} action={handleRegisterUser}>

        <label>Mesa</label>
            <input 
            type="text" 
            name="table"
            placeholder="Digite a mesa..."
            required
            className={styles.input}
            />

            <label>Nome</label>
            <input 
            type="text" 
            name="category"
            placeholder="Digite A Categoria..."
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
  
        </section>
       
      </main>
    </>
    )

}