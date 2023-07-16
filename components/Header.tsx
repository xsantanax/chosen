import Link from 'next/link'
import styles from 'styles/header.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
      <Link href='/'>Home</Link>
      <Link href='/results'>Results</Link>
      <Link href='/votes'>Votes</Link>
    </div>
  )
}
