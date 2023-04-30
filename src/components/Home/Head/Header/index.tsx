import { HeaderContainer } from "@/components/Home/Head/Header/styles";
import Image from 'next/image'
import Logo from '../../../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Image
        src={Logo}
        alt='logo da pagina'
      />
    </HeaderContainer>
  )
}