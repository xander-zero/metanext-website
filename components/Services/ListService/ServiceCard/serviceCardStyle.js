import styled from "styled-components";

export const Card = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 2rem 0;
  position: relative;
  max-height: 500px;
  border-radius: 10px;
  transition: 0.4s all ease-in-out;
  &:hover {
    .line {
      background-color: #ffba08 !important;
    }
    .free-learn > p {
      color: #ffba08 !important;
    }
  }

  .card-wrapper {
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 470px;
    box-shadow: 0px 7px 25px rgba(5, 62, 255, 0.08);
    padding: 0 1rem;
    cursor: pointer;
    @media (max-width: 567px) {
      padding: 0 0.5rem;
      height: 480px;
    }

    .card-service {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
    }
    .line {
      /* margin-top: 0.5rem; */
      width: 60%;
      background-color: #053eff;
      height: 8px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      position: absolute;
      bottom: 0;
    }
  }

  @media (max-width: 567px) {
    width: 95%;
    margin: 0.5rem 0;
  }
`;
export const CardImg = styled.div`
  display: flex;
  @media (max-width: 567px) {
    width: 80px;
    height: 80px;
    display: flex;
  }
  svg {
    fill: red !important;
  }
  /* span {
    fill: red !important;
  } */
`;

export const CardTitle = styled.div`
  margin: 0.5rem 0;
  @media (max-width: 567px) {
    margin-top: 1.5rem;
  }
`;
export const CardDesc = styled.div`
  text-align: center;
`;

export const ServiceCardStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
