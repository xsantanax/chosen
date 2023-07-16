// import Input from '@/components/Input'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className={styles.title}>Chosen.wiki</div>
      <div className={styles.step}>Think of a close political leader.</div>
      <div className={styles.step}>
        Someone succesful, who you listen to and can talk to with ease.
      </div>
      <>
        <div>Type in the email of your chosen one.</div>
        {/* <Input /> */}
        <Link className={styles.link} href='/results'>
          See results
        </Link>
      </>
    </>
  )
}
