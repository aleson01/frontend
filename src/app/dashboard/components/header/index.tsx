"use client"
import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'
import logoImg from '/public/logopizzaria.png'
import { LogOutIcon } from 'lucide-react'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export function Header(){

  const router = useRouter();

  async function handleLogout(){
    deleteCookie("session", { path: "/"})
toast.success("Logout feito com Sucesso")
    router.replace("/")
  }

  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
          <Image
            alt="Logo Pizzaria"
            src={logoImg}
            width={60}
            height={60}
            priority={true}
            quality={100}
          />
        </Link>

        <nav>
          <Link href="/dashboard/user">
            Usuário
          </Link>
          
          <Link href="/dashboard/order">
            Mesa
          </Link>
          <Link href="/dashboard/item">
            Pedido
          </Link>
          <Link href="/dashboard/category">
            Categoria
          </Link>
          <Link href="/dashboard/product">
            Produto
          </Link>

          <form action={handleLogout}>
            <button type='submit'>
              <LogOutIcon size={24} color="#FFF" />
            </button>
          </form>
        </nav>
      </div>
    </header>
  )
}