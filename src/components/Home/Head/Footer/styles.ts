import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  p{
    font-size: 1.5rem;
    max-width: 25rem;
  }

  @media (max-width: 1000px){
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p{
      font-size:1.75rem;
      text-align: center;
    }
  }
`;