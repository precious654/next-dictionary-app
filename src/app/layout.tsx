import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Header from '../components/Header'
import ReduxProvider from '@/components/ReduxProvider'
import ThemeProvide from '@/components/ThemeProvider'
import ThemeSwithcher from '@/components/ThemeSwithcher'

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
      <meta 
      name='viewport' 
      content='width=device-width, inital-scale=1, maximum-scale=1, user-scalable=0'
      />
      <body className={montserrat.className}>
        <ReduxProvider>
          <ThemeProvide>
            <ThemeSwithcher />
            <Header />
            <main>{children}</main>
          </ThemeProvide>
        </ReduxProvider>
      </body>
    </html>
  )
}
