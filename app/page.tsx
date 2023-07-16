'use client'
import StepOne from '@/components/StepOne'
import StepTwo from '@/components/StepTwo'
import StepThree from '@/components/StepThree'
import styles from './page.module.css'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [step, setStep] = useState(1)

  return (
    <>
      <div className={styles.title}>Chosen.wiki</div>
      <div>Think of a close political leader.</div>
      <div>Someone succesful, who you listen to and can talk to with ease.</div>
      {step == 1 && <StepOne setStep={setStep} />}
      {step == 2 && <StepTwo setStep={setStep} />}
      {step == 3 && <StepThree setStep={setStep} />}
      <Link className={styles.link} href='/results'>
        See results
      </Link>
    </>
  )
}
