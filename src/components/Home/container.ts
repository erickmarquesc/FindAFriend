import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  padding: 4rem 0 1rem;
  background-color: var(--backgroundSecundary);
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
  height: 100vh;
  padding: 2rem 0 2rem;
  color: var(--textColorSecundary);
  display: flex;
  flex-direction: row;
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