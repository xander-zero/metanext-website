import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(80vh - 70px);
  margin-bottom: 2rem;
  @media (max-width: 1021px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;

  @media (max-width: 1021px) {
    width: 80%;
    align-items: center;
    order: 2;
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  position: relative;
  /* height: 100%; */
  @media (max-width: 1021px) {
    width: 80%;
    align-items: center;

    order: 1;
    margin-top: 1rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const WrapperCircle = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 567px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const WrapperImg = styled.div`
  display: flex;
  position: absolute;
  left: 30px;
  top: 200px;
  border-radius: 50px;
  span {
    border-radius: 50px;
  }
`;

export const WrapperImg2 = styled.div`
  display: flex;
  position: absolute;
  right: 30px;
  bottom: 200px;
  border-radius: 50px;
  span {
    border-radius: 50px;
  }
`;

export const WrapperQuote = styled.div`
  width: 150px;
  height: 70px;
  display: flex;
  @media (max-width: 567px) {
    width: 50%;
    height: 50px;
    justify-content: flex-start;
    margin-top: 1rem;
  }
`;
