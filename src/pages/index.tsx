import Head from '@/components/Home/Head'

import { Main } from '@/components/Home/Main'

import { Nunito } from 'next/font/google'
const nunito = Nunito({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${nunito.className}`}>
      <Head/>
      <Main />
    </div>
  )
}
