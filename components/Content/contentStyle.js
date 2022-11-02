import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;

  .left {
    width: 30%;
    height: 380px;
    background-color: #b6effe;
    img {
      width: 100%;
    }
  }
  .right {
    width: 70%;
    height: 380px;
    background-color: blue;
    clip-path: polygon(54% 0, 100% 0, 100% 100%, 0% 100%);
  }
`;
