import './globals.scss'

import Header from './layout/header'
import Footer from './layout/footer'

import ChatButton from './components/ChatButton/ChatButton'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LionLend',
  description: 'Empower Your Dreams',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <ChatButton/>
        <Footer />
      </body>
    </html>
  )
}
