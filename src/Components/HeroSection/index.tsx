"use client"
import Image from "next/image"

import {
  HeroSectionContainer,
  HeroSectionContent,
  HeroSectionHeader,
  HeroSectionProfiles
} from "./styles"

import imgHero from "@/Assets/AssetsDogs.svg"
import imgLogo from "@/Assets/Logo.svg"
import imgProfilesIcons from "@/Assets/ProfilesIcons.svg"
import { ButtonCTA } from "../Button/styles"

import { Nunito } from 'next/font/google'
import { HamburgerMenu } from "../Menu"

const nunito = Nunito({
  weight: ['300', '400', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export function HeroSection() {
  return (
    <HeroSectionContainer as='header'>
      <HeroSectionContent>
        <section>
          <HeroSectionHeader>

            <Image
              src={imgLogo}
              className="imgLogo"
              priority
              alt="Logo FiandAFriend com um rostinho de cachorro"
            />

          </HeroSectionHeader>

          <HeroSectionProfiles>
            <Image
              src={imgProfilesIcons}
              alt="Logo FiandAFriend com um rostinho de cachorro"
            />
            <h2>
              324 amigos na sua cidade
            </h2>
          </HeroSectionProfiles>

          <h1>
            Leve <br />
            a felicidade <br />
            para o seu lar
          </h1>

          <strong>
            Encontre o animal de estimação ideal para seu estilo de vida!
          </strong>
        </section>

        <section>
          <HamburgerMenu />

          <Image
            src={imgHero}
            className="imgHero"
            priority
            alt="Imagem que contem seis animais entre cães e gato para ilustrar a página"
          />

          <ButtonCTA className={nunito.className}>
            Acesse agora
          </ButtonCTA>

        </section>
      </HeroSectionContent>
    </HeroSectionContainer>
  )
}