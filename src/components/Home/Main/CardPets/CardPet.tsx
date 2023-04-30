import Image from "next/image";
import Icon from "../../../../assets/iconCardPet.svg";
import { ContainerCardPet, ContentInfoCardPet } from "./styles";

interface ICardPetProps{
  img: string;
  title: string
};

export function CardPet({ img,title}:ICardPetProps) {
  return (
    <ContainerCardPet>
      <Image
        src={img}
        alt="logo da página"
      />
      <ContentInfoCardPet>
        <Image
          src={Icon}
          alt="logo da página"
        />
        <h2>{title}</h2>
      </ContentInfoCardPet>
    </ContainerCardPet>
  )
}