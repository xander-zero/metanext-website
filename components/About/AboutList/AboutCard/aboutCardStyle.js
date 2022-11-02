import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  margin: 0 1rem;
  padding-bottom: 1rem;
  @media (max-width: 560px) {
    width: 100%;
    margin: 1rem 0;
    align-items: center;
    text-align: center;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dae4ff;
  padding: 0 0.5rem;
  border-radius: 5px;
`;
