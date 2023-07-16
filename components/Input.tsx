'use client'
import { useState } from 'react'
import styles from 'styles/input.module.css'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

export default function Input() {
  const [theirEmail, setTheirEmail] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!/\S+@\S+\.\S+/.test(theirEmail)) setError(true)
    else {
      //setShowYourEmail(true)
      setError(false)
    }
  }
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        value={theirEmail}
        className={styles.input}
        placeholder='His/her email'
        onChange={(e) => setTheirEmail(e.target.value)}
      />
      {error && <div className={styles.error}>invalid email</div>}
      <button className={styles.button} type='submit'>
        <div>Confirm</div>
        <PaperAirplaneIcon className={styles.icon} />
      </button>
    </form>
  )
}
