import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const WrapperSlider = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1022px) {
    justify-content: center;
  }
`;
export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: #00008b;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
`;
