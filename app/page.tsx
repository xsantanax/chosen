import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>Chosen.wiki</div>
      <div className={styles.step}>Think of a close political leader.</div>
      <div className={styles.step}>
        Someone succesful, who you listen to and can talk to with ease.
      </div>
    </main>
  )
}
