import Link from 'next/link'
import styles from 'styles/steps.module.css'

export default function StepTwo({ setStep }: any) {
  return (
    <>
      <br />
      <div>
        You successfully voted in{' '}
        <u>
          {'Rafael'}
          {/* {theirEmail} */}
        </u>
      </div>
      <br />

      <Link href='/results' className={styles.results}>
        See Results
      </Link>
    </>
  )
}
