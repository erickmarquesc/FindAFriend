import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .img{
    width: 592px;
    height: 305px;
  }

  h1{
    font-size: 4.5rem;
    line-height: 90%;
    font-weight: bold;
  }

  @media (max-width: 1000px){
    display: flex;
    flex-direction: column;

    h1{
      font-size: 2.5rem;
    }

    .img{
      width: 380px;
      height: 305px;
  }
  }

`;