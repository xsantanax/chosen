import Link from 'next/link'
import styles from 'styles/steps.module.css'
import { useSteps } from '@/hooks/useSteps'

export default function StepTwo() {
  const { chosenEmail } = useSteps()

  return (
    <>
      <br />
      <div>
        You successfully voted in <u>{chosenEmail}</u>
      </div>
      <br />

      <Link href='/results' className={styles.results}>
        See Results
      </Link>
    </>
  )
}
