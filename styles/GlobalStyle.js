import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
        padding:0;
        box-sizing:border-box;
        direction:rtl;
        font-family:'IRANSans' !important;
        overflow-x:hidden;
    }
    h1,h2,h3,h4,h5,h6,p{
        margin:0;
        padding:0
    }
    ul{
        list-style:none
    }
    a{
        text-decoration:none !important;
        
    }

    .label-request{
      font-size:14px;
    }
    .label-request{
      @media (max-width:567px){
        font-size:12px
      }
    }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: ${({ postion }) => (postion ? postion : "")};
  flex-wrap: wrap;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 995px) {
    justify-content: center !important;
  }
`;

export const HeaderTitle = styled.h2`
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};
  font-family: ${({ en }) => (en ? "Arial" : "IRANSans")};
  font-weight: bold !important;
  /* letter-spacing: -0.1rem; */
  /* line-height: 3rem; */
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const WrapperText = styled.div`
  width: ${({ width }) => width};
  margin: ${({ margin }) => `1rem ${margin}`};

  @media (max-width: 560px) {
    width: 100%;
  }
`;
