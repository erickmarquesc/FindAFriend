import Image from "next/image";
import { Card, ContainerCards, ContentCards, ContentMain } from "./styles";
import Previwapp from "../../../assets/previwapp.svg";
import IconDog from "../../../assets/iconDog.svg";
import IconCat from "../../../assets/iconCat.svg";
import IconDogII from "../../../assets/iconSecundDog.svg";
import Logo from "../../../assets/logo.svg";
import Pet from "../../../assets/pet.svg";
import PetII from "../../../assets/petII.svg";
import PetIII from "../../../assets/petIII.svg";

import { ButtonCT } from "@/components/ButtonCT";
import { CardPet } from "./CardPets/CardPet";


export function Main() {
  return (
    <>
      <ContentMain>
        <Image
          className="previwapp"
          width={656}
          height={646}
          src={Previwapp}
          alt="Imagem que ilustra o aplicativo"
        />

        <ContainerCards>
          <h1>
            Um app não,<br />
            uma caixinha de amigos...
          </h1>
          <ContentCards>

            <Card className="shortcard">
              <Image
                src={IconDog}
                alt="Icone que representa um cachorro"
              />
              <p>
                O <strong>FindAFriend</strong> é um produto desenvolvido para você encontrar
                o animal de estimação ideal ao seu estilo de vida!
              </p>
            </Card>

            <Card className="shortcard">
              <Image
                src={IconCat}
                alt="Icone que representa um cachorro"
              />
              <p>
                <strong>ONGs</strong> cadastram os bichinhos disponíveis para adoção informando
                características como: porte, nível de energia, nível de independência,
                sociabilidade e gênero.
              </p>
            </Card>


          </ContentCards>
          <Card className="longCard">
            <Image
              src={IconDogII}
              alt="Icone que representa um cachorro"
            />
            <p>
              <strong>Filtre os bichinhos</strong> de acordo com suas preferências e lifestyle.
              Depois é só entrar em contato com a ONG para agendar uma visita
              e conhecer pessoalmente seu <strong>match perfeito!</strong>
            </p>
          </Card>
        </ContainerCards>

      </ContentMain>

      <ContentMain>
        <div className="infoCT">
          <Image
            src={Logo}
            alt="logo da página"
          />
          <h1>
            Há muitos
            amigos esperando por você!
          </h1>

          <p>
            O <strong>FiendAFriend conecta</strong> pessoas que estão procurando por um animal de estimação
            com animais que <strong>precisam de um lar</strong> amoroso. <strong>É fácil de usar</strong> e você pode navegar
            por uma variedade de animais para encontrar aquele que melhor se adapta ao seu
            estilo de vida e necessidades.
          </p>

          <ButtonCT />
        </div>

        <div className="ContentCards">
          <CardPet img={Pet} title="Alfredo" />
          <CardPet img={PetII} title="Getúlio" />
          <CardPet img={PetIII} title="Juscelino" />

        </div>
      </ContentMain>
      <ContentMain>
        <h1>
          Sobre a FindAFriend
        </h1>
        <p>
          A FindAFriend acredita que todo bichinho merece uma vida confortável e segura. 
          Por isso, cria soluções que ajudam ONGs e entidades protetoras a conectar pessoas 
          adotantes e animais resgatados. 
        </p>
      </ContentMain>
    </>
  )
}