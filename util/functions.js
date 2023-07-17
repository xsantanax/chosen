const sendVoteToFirebase = async (userEmail, chosenEmail) => {
  const vote = {
    from: userEmail,
    to: chosenEmail,
    createdAt: serverTimestamp()
  }

  await addDoc(collection(db, 'votes'), vote)
    .then(() => true)
    .catch(() => false)
}

export const sendVote = async (userEmail, chosenEmail) => {
  //missing test for circular voting
  const success = await sendVoteToFirebase(userEmail, chosenEmail)
  if (!success) return

  //   // now send mail
  //   const res = await fetch('/api/sendgrid', {
  //     body: JSON.stringify({
  //       userEmail,
  //       chosenEmail
  //       // message: message,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     method: 'POST'
  //   })

  //   const { error } = await res.json()
  //   if (error) {
  //     console.log(error)
  //     return
  //   }
}
