import { db } from '../firebase'
import {
  addDoc,
  setDoc,
  doc,
  collection,
  serverTimestamp
} from 'firebase/firestore'

const sendEmail = async (userEmail, chosenEmail) => {
  const res = await fetch('/sendgrid', {
    body: JSON.stringify({
      userEmail,
      chosenEmail
    }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })
  const { error } = await res.json()
  if (error) console.log(error)
}

const addVoteToFirebase = async (userEmail, chosenEmail) => {
  const vote = {
    from: userEmail,
    to: chosenEmail,
    createdAt: serverTimestamp()
  }
  return await addDoc(collection(db, 'votes'), vote)
    .then(() => true)
    .catch(() => false)
}

export const sendVote = async (userEmail, chosenEmail) => {
  const success = await addVoteToFirebase(userEmail, chosenEmail)
  if (success) sendEmail(userEmail, chosenEmail)
}

export const addNewVoterToFirebase = async (from, to) => {
  const newUser = {
    id: from,
    vote: to,
    directVoters: [],
    allVoters: []
  }
  return setDoc(doc(db, 'users', from), newUser)
}
export const addNewVotedToFirebase = async (from, to) => {
  const newUser = {
    id: to,
    vote: null,
    directVoters: [from],
    allVoters: [from]
  }
  return setDoc(doc(db, 'users', to), newUser)
}
