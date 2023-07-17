'use client'
import { db } from '../firebase'
import { collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import styles from 'styles/votelist.module.css'

export default function VoteList() {
  const [votes] = useCollection(collection(db, 'votes'))
  return (
    <>
      <div className={styles.title}>Votes</div>
      <div className={styles.row}>
        <div className={styles.column}>
          <div>from:</div>
          {votes?.docs.map((item) => (
            <div key={item.data().from}>
              <u>{item.data().from}</u>
            </div>
          ))}
        </div>
        <div className={styles.space} />
        <div className={styles.column}>
          <div>to:</div>
          {votes?.docs.map((item) => (
            <div key={item.data().from}>
              <u>{item.data().to}</u>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
