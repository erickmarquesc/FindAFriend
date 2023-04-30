import { ButtonCT } from "@/components/ButtonCT";
import { FooterContainer } from "./styles";
import { ContainerButtonCT } from "@/components/ButtonCT/styles";

export function Footer() {
  return (
    <FooterContainer>
      <p>
        Encontre o animal de estimação ideal
        para seu estilo de vida!
      </p>

      <ContainerButtonCT>
        <ButtonCT />
      </ContainerButtonCT>
      
    </FooterContainer>
  )
}