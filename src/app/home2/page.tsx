import { cookies } from 'next/headers'
import styles from '../page.module.css'

export default function Home() {
  const username = cookies().get('username')?.value

  return (
    <main className={styles.main}>
      <h2>Rota "/home2": <b style={{ color: 'red' }}>privada</b></h2>
      {username && <p>Bem vindo {username}</p>}
    </main>
  )
}