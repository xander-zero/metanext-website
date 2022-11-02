import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
  position: relative;
  padding: 1rem;
  border-radius: 10px;
  width: 400px;

  @media (max-width: 568px) {
    width: 100%;
    margin: 0;
  }
  .comment-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 7px 25px rgba(5, 62, 255, 0.08);
    padding: 2rem;
    border-radius: 10px;

    @media (max-width: 567px) {
      padding: 1rem 0.5rem;
    }
  }
`;

export const CardImg = styled.div`
  display: flex;
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardFooter = styled.div`
  display: flex;
`;

export const Img = styled.div`
  position: absolute;
  left: 30px;
  display: flex;
  @media (max-width: 567px) {
    width: 30px;
    height: 30px;
  }
`;
