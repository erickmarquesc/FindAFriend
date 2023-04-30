import { Container, ContainerMain, Content, ContentMain } from '@/components/Home/container'
import { Footer } from '@/components/Home/Footer'
import { Header } from '@/components/Home/Header'
import { Hero } from '@/components/Home/Hero'
import { Main } from '@/components/Home/Main'

import { Nunito } from 'next/font/google'
const nunito = Nunito({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Container className={`${nunito.className}`}>
        <Content>
          <Header />
          <Hero />
          <Footer />
        </Content>
      </Container>
      <ContainerMain className={`${nunito.className}`}>
        <Main />
      </ContainerMain>
    </>
  )
}
