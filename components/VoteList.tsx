'use client'
import styles from 'styles/votelist.module.css'
import { useVotes } from '@/hooks/useVotes'

export default function VoteList() {
  const { votes } = useVotes()

  return (
    <>
      <div className={styles.title}>Votes</div>
      <div className={styles.row}>
        <div className={styles.column}>
          <div>from:</div>
          {votes?.docs.map((item: any) => (
            <div key={item.data().from}>
              <u>{item.data().from}</u>
            </div>
          ))}
        </div>

        <div className={styles.space} />

        <div className={styles.column}>
          <div>to:</div>
          {votes?.docs.map((item: any) => (
            <div key={item.data().from}>
              <u>{item.data().to}</u>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
