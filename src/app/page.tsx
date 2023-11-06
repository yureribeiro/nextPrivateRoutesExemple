import Link from 'next/link'
import styles from './page.module.css'

export default function Default() {
  return (
    <main className={styles.main}>
      <h1>Rota "/": pública</h1>
      <Link href="/login" className={styles.link}>Login</Link>
    </main>
  )
}
