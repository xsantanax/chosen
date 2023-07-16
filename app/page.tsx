'use client'
import StepOne from '@/components/StepOne'
import StepTwo from '@/components/StepTwo'
import styles from './page.module.css'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [step, setStep] = useState(1)

  return (
    <>
      <div className={styles.title}>Chosen.wiki</div>
      {step == 1 && <StepOne setStep={setStep} />}
      {step == 2 && <StepTwo />}
      <Link className={styles.link} href='/results'>
        See results
      </Link>
    </>
  )
}
