import EmailInput from '@/components/EmailInput'
import styles from 'styles/steps.module.css'
import Link from 'next/link'

export default function StepOne({ setStep }: any) {
  return (
    <>
      <div>Type in the email of your chosen one.</div>
      <EmailInput placeholder='His/her email' action={() => setStep(2)} />
      <Link className={styles.link} href='/results'>
        See results
      </Link>
    </>
  )
}
