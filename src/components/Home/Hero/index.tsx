import { HeroContainer } from "./styles";
import Image from 'next/image'
import familyDogs from '../../../assets/familyDogs.svg'

export function Hero() {
  return (
    <HeroContainer>
      <h1>
        Leve a felicidade para o seu lar
      </h1>
      < Image
        width={592}
        height={305}
        src={familyDogs}
        alt='familia de cães'
      />
    </HeroContainer>
  )
}