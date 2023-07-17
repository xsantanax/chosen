import { db } from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const sendVoteToFirebase = async (userEmail, chosenEmail) => {
  const vote = {
    from: userEmail,
    to: chosenEmail,
    createdAt: serverTimestamp()
  }

  return await addDoc(collection(db, 'votes'), vote)
    .then(() => true)
    .catch(() => false)
}

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

export const sendVote = async (userEmail, chosenEmail) => {
  //missing test for circular voting

  const success = await sendVoteToFirebase(userEmail, chosenEmail)
  if (!success) return

  sendEmail(userEmail, chosenEmail)
}
