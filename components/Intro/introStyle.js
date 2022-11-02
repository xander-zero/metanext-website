import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 560px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;

export const Right = styled.div`
  display: flex;
  width: 50%;
  /* height: 400px; */
  /* height: 500px; */
  img {
    width: 100% !important;
    height: 100% !important;
    border-radius: 50%;
  }
  @media (max-width: 560px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;

  @media (max-width: 560px) {
    width: 100%;
    justify-content: center;
    /* text-align: center; */
    padding: 1rem 1rem;
  }
`;

export const WraooerText = styled.div`
  margin-top: 1.5rem;
`;
