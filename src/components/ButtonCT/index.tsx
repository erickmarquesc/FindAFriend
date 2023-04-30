import { Button } from "./styles";
import { Nunito } from 'next/font/google'
const nunito = Nunito({ subsets: ['latin'] })

export function ButtonCT() {
  return (
      <Button>
        Acesse agora
      </Button>
  )
}