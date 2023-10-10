import './globals.css'
import type { Metadata } from 'next'
import {  Nunito } from 'next/font/google'

export const metadata: Metadata = {
  title: 'FindAFriend | Home',
  description: 'Página inicial',
}

const nunito = Nunito({
  weight: ['300','400','600','700','800','900'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={nunito.className}>{children}</body> 
    </html>
  )
}
