'use client'
import StepOne from '@/components/StepOne'
import StepTwo from '@/components/StepTwo'
import StepThree from '@/components/StepThree'
import { useSteps } from '@/hooks/useSteps'

export default function Steps() {
  const { step } = useSteps()

  return (
    <>
      {step == 1 && <StepOne />}
      {step == 2 && <StepTwo />}
      {step == 3 && <StepThree />}
    </>
  )
}
