import styles from './page.module.css'
import Meaning from '@/components/Meaning'

export default function Home() {
  return (
    <main className={styles.main}>
      <Meaning />
    </main>
  )
}
