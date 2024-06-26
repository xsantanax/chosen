'use client'
import { useContext, createContext, useState } from 'react'
import { useVotes } from './useVotes'

const StepsContext = createContext()

const StepsProvider = ({ children }) => {
  const [step, setStep] = useState(1)
  const [userEmail, setUserEmail] = useState('')
  const [chosenEmail, setChosenEmail] = useState('')
  const { addVote } = useVotes()

  const handleStep1to2 = (email) => {
    setChosenEmail(email)
    setStep(2)
  }

  const handleStep2to3 = (email) => {
    setUserEmail(email)
    setStep(3)
    addVote('rafaelsantana111@gmail.com', 'rafaelsantana111@hotmail.com')
    // addVote(userEmail, chosenEmail)
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
