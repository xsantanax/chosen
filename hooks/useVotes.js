'use client'
import { useContext, createContext, useState } from 'react'
import { db } from '../firebase'
import { collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'

const VotesContext = createContext()

const VotesProvider = ({ children }) => {
  const [votes] = useCollection(collection(db, 'votes'))

  return (
    <VotesContext.Provider
      value={{
        votes
      }}
    >
      {children}
    </VotesContext.Provider>
  )
}

const useVotes = () => useContext(VotesContext)

export { VotesProvider, useVotes }
