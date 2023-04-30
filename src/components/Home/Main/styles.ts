import styled from "styled-components";

export const ContainerCards = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1{
    font-size: 3rem;
    color: var(--titleColor);
    
    @media (max-width: 1000px){
      font-size: 1.5rem;
    }
  }
`;

export const ContentCards = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  .shortcard{
    width: 17.5rem;
  }
  
  .longcard{
    width: 100%;
    margin-top: 2rem;
  }

  @media (max-width: 1000px){
    flex-direction: column;

    .shortcard{
    width: 100%;
  }
  }
`;

export const Card = styled.div`
  padding: 2rem;
  background-color: #FDECED;
  height: 197;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p{
    font-size: 0.875rem;
    line-height: 110%;
    letter-spacing: -2%;
    font-weight: 400;
  }

  strong{
    font-weight: bold;
  }
`;