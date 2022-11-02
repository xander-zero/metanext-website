import styled from "styled-components";

export const AboutWrapper = styled.div`
  background: #f2f6ff;
  padding: 1rem 0;
`;

export const AboutStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const Line = styled.div`
  border: 1px solid #c2cdea;

  @media (max-width: 567px) {
    border: none;
  }
`;
