import styled from "styled-components";

export const InfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f6ff;
  @media (max-width: 567px) {
    justify-content: center;
    text-align: center;
  }
  /* padding: 2rem 0; */
`;

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;
