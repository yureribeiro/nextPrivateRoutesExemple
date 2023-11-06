import styles from '../page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Rota "/home": <b style={{ color: 'red' }}>privada</b></h2>
    </main>
  )
}