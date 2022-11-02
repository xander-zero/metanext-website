import styled from "styled-components";

export const ListInfoStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 60% !important;
  padding: 0 0 2rem 0;

  @media (max-width: 1000px) {
    justify-content: center;
  }

  @media (max-width: 567px) {
    width: 100% !important;
    padding: 0 0 1rem 0;
  }
`;
