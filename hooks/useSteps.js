'use client'
import { useContext, createContext, useState } from 'react'

const StepsContext = createContext()

const StepsProvider = ({ children }) => {
  const [step, setStep] = useState(1)
  const [userEmail, setUserEmail] = useState('')
  const [chosenEmail, setChosenEmail] = useState('')

  const handleStep1to2 = (email) => {
    setChosenEmail(email)
    setStep(2)
  }

  const handleStep2to3 = (email) => {
    setUserEmail(email)
    setStep(3)
  }

  return (
    <StepsContext.Provider
      value={{
        setStep,
        handleStep1to2,
        handleStep2to3,
        step,
        chosenEmail
      }}
    >
      {children}
    </StepsContext.Provider>
  )
}

const useSteps = () => useContext(StepsContext)

export { StepsProvider, useSteps }