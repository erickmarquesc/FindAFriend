import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 4rem 0 1rem;
  background-color: var(--backgroundSecundary);

  @media (max-width: 1000px){
      height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 1.5rem;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerMain = styled.div`
  height: 100%;
  padding: 2rem 0 2rem;
  color: var(--textColorSecundary);
  display: flex;
  flex-direction: column;
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
    max-width: 700px;
    padding: 2rem;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    color: var(--textColorPrimary);
    justify-content: space-between;

    h1{
      font-size: 48px;
      color: #F4D35E;
      font-weight: bold;
    }

    p{
      font-size: 20px;
      max-width: 590px;

      strong{
      color: #F4D35E;
      font-weight: bold;
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