import styles from './page.module.css'
import Steps from '@/components/Steps'
import { StepsProvider } from '../hooks/useSteps'

export default function Home() {
  return (
    <>
      <div className={styles.title}>Chosen.wiki</div>
      <div>Think of a close political leader.</div>
      <div>Someone succesful, who you listen to and can talk to with ease.</div>
      <StepsProvider>
        <Steps />
      </StepsProvider>
    </>
  )
}
