import './globals.css'
import styles from './page.module.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chosen',
  description: 'Chosen.wiki'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className={styles.main}>
          <div className={styles.container}>{children}</div>
        </main>
      </body>
    </html>
  )
}
