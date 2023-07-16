'use client'
import { useState } from 'react'
import styles from 'styles/input.module.css'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

export default function EmailInput({ placeholder = '', action }: any) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // if (!/\S+@\S+\.\S+/.test(email)) setError(true)
    if (false) setError(true)
    else {
      action()
      setError(false)
    }
  }
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        value={email}
        className={styles.input}
        placeholder={placeholder}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <div className={styles.error}>invalid email</div>}
      <button className={styles.button} type='submit'>
        <div>Confirm</div>
        <PaperAirplaneIcon className={styles.icon} />
      </button>
    </form>
  )
}
