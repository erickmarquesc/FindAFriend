import { Footer } from '@/components/Home/Head/Footer'
import { Header } from '@/components/Home/Head/Header'
import { Hero } from '@/components/Home/Head/Hero'
import { ContainerHead, ContentHead } from './style'

export default function Head() {
  return (
    <ContainerHead>
      <ContentHead>
        <Header />
        < Hero />
        <Footer />
      </ContentHead>
    </ContainerHead>
  )
}