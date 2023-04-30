import styled from "styled-components";

export const ContainerButtonCT = styled.div`
  width: 37rem;
  background-color: var(--backgroundTertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 50px 40px 50px;
  border-radius: 20px;

  

  @media (max-width: 1000px){
    width: 100%;
  }
`;

export const Button = styled.button`

    all: unset;

    width: 30.75rem;
    color: black;
    background-color: var(--background);
    border-color: var(--background);
    padding: 19px;
    align-items: center;
    text-align: center;
    cursor: pointer;
    border-radius: 20px;
    font-size: 1.25rem;
    font-weight: bold;

    transition: 0.5s;

    :hover{
      background: var(--backgroundSecundary);
      color: var(--textColorPrimary)
    }

    @media (max-width: 1000px){
      width: 20rem;
    }
  
`;