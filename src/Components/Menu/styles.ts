import styled, {css} from "styled-components";

interface IMenuProps {
  isOpen: boolean;
};

const filterProps = (prop: string) => {
  if (prop === "isOpen") {
    return false;
  }
  return true;
};

export const MenuButton = styled.button<IMenuProps>`
  z-index: 1;
  width: 72px;
  height: 72px;
  padding: 12px;
  transition: 2s;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid var(--buttonBorderWhite);
  
  &:hover{
    transition: 2s;
    transform: scale(1.2);
    filter: brightness(0.9);
    border: 1px solid var(--buttonBorderBlack);
  }
  
  ${(props) => props.isOpen === true ? css`
    .menuOpen{
      display: none;
    }
    .menuClose{
      display: 1;
      transition: 2s;

      &:hover{
        transition: 2s;
        transform: rotate(45deg);
      }
    }
  `: props.isOpen === false && css`
    .menuOpen{
      display: 1;
    }
    .menuClose{
      display: none;
    }
  `}
`

export const Menu = styled.nav<IMenuProps>`
  width: 72px;
  height: 72px;
  display: none;
  position: fixed;
  background-color: var(--backgroundHero); 
  
  ${(props) => props.isOpen === true ? css`
    width: 500px;
    display: flex;
    height: 400px;
    filter: opacity(0.9);
  `: props.isOpen === false && css`
    display: none;
    transition: 2s;
  `}
`;

export const MenuList = styled.ul`
  gap: 14px;
  display: flex;
  padding: 80px 0 0;
  list-style-type: none;
  flex-direction: column;
`;

export const MenuItem = styled.li`
  padding: 0 16px;
  border-radius: 8px;
  
  &:hover{
    filter: brightness(0.8);
    background-color: var(--backgroundHero);
  }
`;

export const MenuLink = styled.a`
  gap: 12px;
  display: flex;
  font-size: 18px;
  transition: 0.2s;
  align-items: center;
  text-decoration: none;
  color: var(--titleHero);
  border-bottom: 1px solid var(--titleHero);

  font-size: 3.6rem;
  font-weight: 700;

  img{
    width: 18px;
  }
`;