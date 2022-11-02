import styled from "styled-components";

export const FooterStyle = styled.div`
  background: #f3f7fc;
  margin-top: 5rem;
  padding: 2rem 0 0 0;
  position: relative;
  @media (max-width: 567px) {
    margin-top: 4rem;
  }

  .line {
    position: absolute;
    width: 2px;
    height: 60%;
    background-color: #d4deff;
    left: 0;
    right: 0;
    margin: auto;
    top: 0;
    bottom: 0;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Right = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 0 6rem;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

export const SocilaMedia = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const Icon = styled.div`
  margin: 0 0.5rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0.7rem 0;
`;

export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const WapperIcon = styled.div`
  display: flex;
  justify-content: center;
  /* margin-bottom: 20px; */
  position: absolute;
  width: 100px;
  height: 80px;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: -40px;
  transition: 0.4s all ease-in-out;
  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
  }

  img {
    cursor: pointer;
    box-shadow: 0px 7px 25px rgba(5, 62, 255, 0.08);
  }
`;

export const SubFooter = styled.div`
  border-top: 1px solid #d4deff;
  padding: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
