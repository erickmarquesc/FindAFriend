import styled from "styled-components";

export const ContainerHead = styled.div`
  height: 100vh;
  padding: 4rem 0 1rem;
  background-color: var(--backgroundSecundary);
`;

export const ContentHead = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 1.5rem;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1000px){
    gap: 2rem;
  }
`;