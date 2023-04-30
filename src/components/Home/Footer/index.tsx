import { ButtonCT } from "@/components/ButtonCT";
import { FooterContainer } from "./styles";
import { ContainerButtonCT } from "@/components/ButtonCT/styles";
import { Nunito } from 'next/font/google'
const nunito = Nunito({ subsets: ['latin'] })
export function Footer() {
  return (
    <FooterContainer>
      <p>
        Encontre o animal de estimação ideal
        para seu estilo de vida!
      </p>
      <ContainerButtonCT className={`${nunito.className}`}>
      <ButtonCT />
      </ContainerButtonCT>
    </FooterContainer>
  )
}