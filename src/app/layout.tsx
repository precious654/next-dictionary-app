import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Header from '../components/Header'
import ReduxProvider from '@/components/ReduxProvider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dictionary App',
  description: 'Dictionary',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ReduxProvider>
          <Header />
          <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  )
}
