import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1{
    font-size: 4.5rem;
    line-height: 90%;
    font-weight: bold;
  }

  @media (max-width: 1000px){
    display: flex;
    flex-direction: column;

    h1{
      margin-top: 2rem;
      
    }
  }

`;