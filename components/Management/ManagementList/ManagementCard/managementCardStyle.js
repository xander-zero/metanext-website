import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  height: 320px;
  margin: 1rem;
  /* background-color: red; */

  @media (max-width: 567px) {
    width: 90%;
    margin: 0;
    height: 220px;
  }
`;

export const CardImg = styled.div`
  display: flex;
  max-height: 20%;
  height: 20%;
`;

export const CardTitle = styled.div`
  margin: 2rem 0 0.8rem 0;
  width: 100%;
  text-align: center;
  padding-top: 1rem;
`;

export const CardDesc = styled.div``;
