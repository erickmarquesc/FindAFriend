import Image from 'next/image'
import Logo from '../assets/logo.svg'
import familyDogs from '../assets/familyDogs.svg'
import { Container, Content } from '@/components/container'
import { Header } from '@/components/header'
import { Main } from '@/components/main'
import { ButtonCT } from '@/components/ButtonCT'
import { Footer } from '@/components/footer'

import { Nunito } from 'next/font/google'
const nunito = Nunito({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container className={`${nunito.className}`}>
      <Content>

        <Header>
          <Image
            src={Logo}
            alt='logo da pagina'
          />

        </Header>
        <Main>
          <h1>
            Leve a felicidade para o seu lar
          </h1>
          <Image
            width={592}
            height={305}
            src={familyDogs}
            alt='familia de cães'
          />
        </Main>
        <Footer>
          <p>
            Encontre o animal de estimação ideal
            para seu estilo de vida!
          </p>
          <ButtonCT />
        </Footer>
      </Content>
    </Container>
  )
}
