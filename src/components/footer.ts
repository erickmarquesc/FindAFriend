import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  p{
    font-size: 24px;
    max-width: 407px;
  }

  @media (max-width: 1000px){
    display: flex;
    flex-direction: column;
    gap: 2rem;

    p{
      font-size:28px;
      text-align: center;

    }
  }
`;