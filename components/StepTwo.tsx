import EmailInput from '@/components/EmailInput'
import styles from 'styles/steps.module.css'
import { useSteps } from '@/hooks/useSteps'

export default function StepTwo() {
  const { setStep, chosenEmail, handleStep2to3 } = useSteps()

  return (
    <>
      <div className={styles.container}>
        You are choosing <u>{chosenEmail}</u>
        <div className={styles.change} onClick={() => setStep(1)}>
          Change
        </div>
      </div>
      <div>Type in your email to confirm your vote.</div>
      <EmailInput placeholder='Your email' action={handleStep2to3} />
    </>
  )
}
