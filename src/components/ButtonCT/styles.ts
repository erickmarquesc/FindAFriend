import styled from "styled-components";

export const ContainerButtonCT = styled.div`
  width: 37rem;
  background-color: #E44449;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 50px 40px 50px;
  border-radius: 20px;

  button{
    all: unset;

    width: 30.75rem;
    color: black;
    background-color: #fff;
    border-color: #fff;
    padding: 19px;
    align-items: center;
    text-align: center;
    cursor: pointer;
    border-radius: 20px;
    font-size: 1.25rem;
    font-weight: bold;

    transition: 0.5s;

    :hover{
      background: var(--background);
      color: #fff
    }
  }
`;