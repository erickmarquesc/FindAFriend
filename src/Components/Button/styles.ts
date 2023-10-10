import styled from "styled-components";

export const ButtonCTA = styled.button`
  height: 72px;
  font-size: 2rem;
  padding: 19px 0;
  font-weight: 700;
  line-height: 34%;
  border-radius: 8px;
  color: var(--titleButton);
  border: 1px solid var(--buttonBorderWhite);

  cursor: pointer;

  transition: 1s;
  
  &:hover {
    filter: brightness(0.9);
    border: 1px solid var(--buttonBorderBlack);
  }
`