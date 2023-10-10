import { HTMLProps, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuLink, MenuList } from "./styles"
import Image from "next/image";
import imgMenuOpen from '@/Assets/MenuOpen.svg'
import imgMenuClose from '@/Assets/MenuClose.svg'
import imgMenuLinkIcon from '@/Assets/IconLogo.svg'

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuButton isOpen={isOpen} onClick={toggleMenu}>
        <Image className="menuOpen" src={imgMenuOpen} alt="Icone de menu"/>
        <Image className="menuClose" src={imgMenuClose} alt="Icone de fechar o menu"/>
      </MenuButton>

      <Menu isOpen={isOpen}>
        <MenuList>

          <MenuItem>
            <MenuLink href="#" onClick={toggleMenu}>
              <Image
                className="menuOpen"
                src={imgMenuLinkIcon}
                alt="Icone de menu"
              />
              Home
            </MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink href="#" onClick={toggleMenu}>
              <Image
                className="menuOpen"
                src={imgMenuLinkIcon}
                alt="Icone de menu"
              />
              Sobre o app
            </MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink href="#" onClick={toggleMenu}>
              <Image
                className="menuOpen"
                src={imgMenuLinkIcon}
                alt="Icone de menu"
              />
              Animais disponíveis
            </MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink href="#" onClick={toggleMenu}>
              <Image
                className="menuOpen"
                src={imgMenuLinkIcon}
                alt="Icone de menu"
              />
              Sobre a FindAFriend
            </MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink href="#" onClick={toggleMenu}>
              <Image
                className="menuOpen"
                src={imgMenuLinkIcon}
                alt="Icone de menu"
              />
              Contato
            </MenuLink>
          </MenuItem>

        </MenuList>
      </Menu>
    </>
  );
};



