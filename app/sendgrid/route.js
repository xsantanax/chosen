import sendgrid from '@sendgrid/mail'
import { NextResponse } from 'next/server'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

export async function POST(req) {
  const body = await req.json()
  const { chosenEmail, userEmail } = body

  const html1 = `<div>
  <div>Thank you for using Chainvote!</div>
  <div>You are voting in ${chosenEmail}.</div>
  <div>To confirm your vote, click here. </div>
  <div>To access the app, <a href='www.google.com'>click here</a>. </div>
  </div>`

  const html2 = `<div>
  <div>You received a vote from ${userEmail} in Chainvote!</div>
  <div>Check out your profile.</div>
  <div>There you can see your votes, add your name and a picture, and also vote in someone else.</div>
  <div>To access the app, click here. </div>
  </div>`

  try {
    await sendgrid.send({
      to: userEmail, // Your email where you'll receive emails
      from: 'noreply@rafaelsantana.pro', // your website email address here
      subject: 'Confirm your chosen one.',
      html: html1
    })
  } catch (error) {
    return NextResponse.json({ error: error.message })
  }

  try {
    await sendgrid.send({
      to: chosenEmail,
      from: 'noreply@rafaelsantana.pro',
      subject: userEmail + 'chose you.',
      html: html2
    })
  } catch (error) {
    return NextResponse.json({ error: error.message })
  }

  return NextResponse.json({ error: '' })
}
