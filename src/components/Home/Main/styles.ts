import styled from "styled-components";

export const ContainerMain = styled.div`
  height: 100%;
  padding: 2rem 0 2rem;
  color: var(--textColorSecundary);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ContentMain = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 1.5rem;
  flex-direction: row;
  gap: 3rem;

  .previwapp{
    margin-left: -14rem;
  };

  .infoCT{
    background-color: var(--backgroundSecundary);
    max-width: 43.75rem;
    padding: 2rem;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    color: var(--textColorPrimary);
    justify-content: space-between;

    h1{
      font-size: 3rem;
      color: #F4D35E;
      font-weight: bold;
    }

    p{
      font-size: 1.25rem;
      max-width: 36.875rem;

      strong{
      color: #F4D35E;
      font-weight: bold;
      }
    }

    @media (max-width: 1000px){
      padding: 1rem ;

      h1{
        font-size: 2rem;
        width: 19rem;
      }

      p{
        font-size: 1rem;
        text-align: center;
      }
    }
  }

  .ContentCards{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 1000px){    
      display: none;
    }
  }

  @media (max-width: 1000px){
    flex-direction: column;
    h1{
      font-size: 1.5rem;
    }

    .previwapp{
      display: none;
    }
  }
`;

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