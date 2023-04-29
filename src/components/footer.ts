import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  p{
    font-size: 1.5rem;
    max-width: 25rem;
  }

  @media (max-width: 1000px){
    display: flex;
    flex-direction: column;
    gap: 2rem;

    p{
      font-size:1.75rem;
      text-align: center;

    }
  }
`;