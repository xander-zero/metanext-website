import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  /* overflow: hidden; */
`;

export const WrapperLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1022px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    z-index: 10;
    left: 0;
    background-color: #fff;
    width: 100%;
    padding: 0 2rem;
    height: 100vh;
    transition: 0.4s all ease-in-out;
    transform: ${({ showSidebar }) =>
      showSidebar ? "translateX(-1025px)" : "translateX(0px)"};
  }
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  list-style: none;
  padding: 0;

  @media (max-width: 1022px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  border-left: 1px dashed ${({ theme }) => theme.color_primary};
  /* border-right: 1px dashed ${({ theme }) => theme.color_primary}; */
  cursor: pointer;
  font-size: 15px;
  &:nth-child(4) {
    border: none;
  }

  &:nth-child(1) {
    border-left: ${({ border }) => (border ? "none" : "1px dashed #053EFF")};
  }

  &:nth-child(3) {
    border-right: ${({ border }) => (border ? "1px dashed #053EFF" : "none")};
  }

  a {
    color: #000000;
    font-size: 15px;
  }
  span {
    margin: 0 0.5rem !important;
  }
  @media (max-width: 1022px) {
    margin: 2rem 0;
    border: none;
    &:nth-child(1) {
      border: none;
    }
    &:nth-child(3) {
      border-right: none;
    }
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1022px) {
    display: flex;
    justify-content: center;
  }
  .language {
    position: absolute;
    top: 30px;
    left: 10px;
  }
  .close {
    position: absolute;
    top: 43px;
    right: 27px;
  }
`;

export const ResponsiveBtn = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyleNav = styled.div`
  width: 100%;
  box-shadow: 0px 7px 25px rgba(5, 62, 255, 0.08);
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 100;
  cursor: pointer;
`;

export const LogoStyle = styled.div`
  /* width: 40px;
  height: 40px; */
  display: flex;
`;

export const ResponsiveLogo = styled.div`
  display: flex;
  margin-top: 0px;
  /* width: 60px;
  height: 40px; */
`;
