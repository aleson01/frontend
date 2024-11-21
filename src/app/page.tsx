import styles from './page.module.scss'
import logoImg from '/public/logopizzaria.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Page(){
  return(
    <>
      <div className={styles.containerCenter}>
        <Image
          src={logoImg}
          alt="Logo da pizzaria"
          width={250}
        />

        <section className={styles.login}>
          <form>
            <input 
              type="email"
              required
              name="email"
              placeholder="Digite seu email..."
              className={styles.input}
            />

            <input 
              type="password"
              required
              name="password"
              placeholder="***********"
              className={styles.input}
            />

            <button type="submit" className={styles.button}>
              Acessar
            </button>
          </form>
        </section>

      </div>      
    </>
  )
}