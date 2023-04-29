import Image from "next/image";
import { Card, ContainerCards, ContentCards } from "./styles";
import Previwepp from "../../../assets/previwapp.svg";
import IconDog from "../../../assets/iconDog.svg";
import IconCat from "../../../assets/iconCat.svg";
import IconDogII from "../../../assets/iconSecundDog.svg";

import { Nunito } from 'next/font/google'
const nunito = Nunito({ subsets: ['latin'] })

export function Main() {
  return (
    <>
        <Image
          width={656}
          height={646}
          src={Previwepp}
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
      
    </>
  )
}