'use client'
import { useContext, createContext } from 'react'
import { db } from '../firebase'
import { collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { addUserToFirebase } from '@/util/functions'

const VotesContext = createContext()

const VotesProvider = ({ children }) => {
  const [votes] = useCollection(collection(db, 'votes'))
  const [fecthedUsers] = useCollection(collection(db, 'users'))

  const users = fecthedUsers?.docs.map((doc) => doc.data())
  console.log('users', users)

  const checkIfVoterExists = (users, from, to) => {
    const currentUser = users.filter((user) => user.id === from)[0]
    console.log('currentUser', currentUser)

    //if voter still doesn't exist
    if (!currentUser) {
      addUserToFirebase(from, to)
    } else {
      //if my vote is in my voters
      if (currentUser?.allVoters.includes(to)) {
        console.log('circular voting detected, vote cancelled.')
      } else {
        console.log('must update new vote to firebase user (voter)')
        //MUST ADD TO DB USING FIREBASE FUNCTION
        // users[voterIndex].vote = to
      }
    }
  }

  const addVote = async (from, to) => {
    let voterIndex, votedIndex

    checkIfVoterExists(users, from, to)

    // //then check if voted exists
    // if (users.filter((e) => e.id === to).length == 0) {
    //   //voted doesnt exist, just add it w/ 1 directVoter and me + my allVoters
    //   users.push({
    //     id: to,
    //     vote: null,
    //     directVoters: [from],
    //     allVoters: users[voterIndex]
    //       ? [from, ...users[voterIndex].allVoters]
    //       : [from] //also need my allVoters
    //   })
    // } else {
    //   //voted already exists, find its index
    //   votedIndex = users.findIndex((obj) => obj.id == to)
    //   //update w/ voters
    //   await users[votedIndex].directVoters.push(from)
    //   await users[votedIndex].allVoters.push(from)
    //   //add allVoters to vote chain
    //   while (!!users[votedIndex].vote) {
    //     votedIndex = users.findIndex((obj) => obj.id == users[votedIndex].vote)
    //     await users[votedIndex].allVoters.push(from)
    //     console.log(
    //       users[votedIndex].allVoters.concat(users[voterIndex].allVoters)
    //     )
    //     users[votedIndex].allVoters = [
    //       ...new Set([
    //         ...users[votedIndex].allVoters,
    //         ...users[voterIndex].allVoters
    //       ])
    //     ]
    //   }
    // }
    // return setMyUsers(users)
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
