'use client'
import { useContext, createContext } from 'react'
import { db } from '../firebase'
import { collection, updateDoc, doc, arrayUnion } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import {
  addNewVoterToFirebase,
  addNewVotedToFirebase,
  sendVote
} from '@/util/functions'

const VotesContext = createContext()

const VotesProvider = ({ children }) => {
  const [votes] = useCollection(collection(db, 'votes'))
  const [fecthedUsers] = useCollection(collection(db, 'users'))

  const users = fecthedUsers?.docs.map((doc) => doc.data())

  const checkIfVoterExists = (users, from, to) => {
    const voter = users.filter((user) => user.id === from)[0]

    if (!voter) addNewVoterToFirebase(from, to)
    else if (voter?.allVoters.includes(to)) {
      console.log('circular voting detected, vote cancelled.')
      return false
    } else {
      const userRef = doc(db, 'users', from)
      updateDoc(userRef, { vote: to })
    }
    return true
  }

  const checkIfVotedExists = (users, from, to) => {
    const voted = users.filter((user) => user.id === to)[0]

    if (!voted) addNewVotedToFirebase(from, to)
    else {
      const userRef = doc(db, 'users', to)
      updateDoc(userRef, {
        directVoters: arrayUnion(from),
        allVoters: arrayUnion(from)
      })
    }
  }

  const addVote = async (from, to) => {
    let success = checkIfVoterExists(users, from, to)
    if (success) checkIfVotedExists(users, from, to)
    sendVote(from, to)
  }

  return (
    <VotesContext.Provider
      value={{
        votes,
        users,
        addVote
      }}
    >
      {children}
    </VotesContext.Provider>
  )
}

const useVotes = () => useContext(VotesContext)

export { VotesProvider, useVotes }
