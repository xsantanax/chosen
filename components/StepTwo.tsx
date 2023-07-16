import EmailInput from '@/components/EmailInput'
import styles from 'styles/steps.module.css'

export default function StepTwo({ setStep }: any) {
  return (
    <>
      <div className={styles.container}>
        You are choosing <u>rafaelsantana111@gmail.com</u>
        <div className={styles.change} onClick={() => setStep(1)}>
          Change
        </div>
      </div>
      <div>Type in your email to confirm your vote.</div>
      <EmailInput placeholder='Your email' action={() => setStep(3)} />
    </>
  )
}
