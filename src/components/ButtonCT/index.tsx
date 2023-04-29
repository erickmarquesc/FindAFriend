import { ContainerButtonCT } from "./styles";
import { Nunito } from 'next/font/google'
const nunito = Nunito({ subsets: ['latin'] })

export function ButtonCT() {
  return (
    <ContainerButtonCT className={`${nunito.className}`}>
      <button>
        Acesse agora
      </button>
    </ContainerButtonCT>
  )
}