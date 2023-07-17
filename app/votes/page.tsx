import VoteList from '@/components/VoteList'
import styles from './page.module.css'

export default function Votes() {
  return (
    <div className={styles.container}>
      <VoteList />
    </div>
  )
}
