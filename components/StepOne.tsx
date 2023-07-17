import EmailInput from '@/components/EmailInput'
import styles from 'styles/steps.module.css'
import Link from 'next/link'
import { useSteps } from '@/hooks/useSteps'

export default function StepOne() {
  const { handleStep1to2 } = useSteps()

  return (
    <>
      <div>Type in the email of your chosen one.</div>
      <EmailInput placeholder='His/her email' action={handleStep1to2} />
      <Link className={styles.link} href='/results'>
        See results
      </Link>
    </>
  )
}
