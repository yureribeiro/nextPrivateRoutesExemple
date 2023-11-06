'use client'
import { useRouter } from 'next/navigation'
import styles from '../page.module.css'

export default function Login() {
  const { push } = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const username = data.get('username')?.toString()
    const password = data.get('password')?.toString()

    if (!username || !password) {
      return alert('Preencha todos os campos!')
    }

    await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-store',
      body: JSON.stringify({ username })
    }).then(response => {
      if (response.ok) {
        console.log('Login efetuado com sucesso!')
      }
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <main className={styles.main}>
      <h1>login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          <p>Username</p>
          <input type="text" name="username" className={styles.input} />
        </label>
        <label className={styles.label}>
          <p>Password</p>
          <input type="password" name="password" className={styles.input} />
        </label>
        <button type='submit' className={styles.buttonForm}>Entrar</button>
      </form>
    </main>
  )
}