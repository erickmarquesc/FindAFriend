import styled from "styled-components";
import { Container, Content } from "../Containers/styles";
import { HamburgerMenu } from "../Menu";


export const HeroSectionContainer = styled(Container)`
  background-color: var(--backgroundHero);
`

export const HeroSectionContent = styled(Content)`
  flex-wrap: wrap;

  section{
    gap: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--titleHero);

    h1{
      font-weight: 700;
      font-size: 7.2rem;
      line-height: 90%;

      @media(max-width: 600px){
        font-size: 4.4rem;
      }
    };

    strong{
      font-size: 2.4rem;
      font-weight: 400;
      width: 420px;

      @media(max-width: 600px){
        font-size: 1.8rem;
        width: 320px;
        margin-bottom: 18px;
      }
    };

    .imgHero{
      width: 100%;

      @media(max-width: 600px){
        margin-bottom: -90px;
      }
    };

    .imgLogo{
      width: 215px;
    };
  }
`
export const HeroSectionProfiles = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
`

export const HeroSectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 900px){
    .MenuMobile{
      display: none;
    }
     
  }
`