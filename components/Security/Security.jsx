import Image from "next/image";
import styled from "styled-components";
import { useSelector } from "react-redux";

import HeaderTitle from "../HeaderTitle/HeaderTitle";
import Typography from "../../common/Typography/Typography";

import SecurityList from "./SecurityList/SecurityList";

import cardSecurity from "../../public/assets/images/cardSecurity.png";
import securityImg from "../../public/assets/images/sec.png";
import point from "../../public/assets/images/point-white.png";

const Security = () => {
  const languageSelector = useSelector((state) => state.language);

  const { languageData } = languageSelector;

  return (
    <SecurityStyle image={securityImg}>
      <WrapperTitle>
        <Image src={point} alt="point" layout="fixed" />
        <div className="my-2">
          <HeaderTitle size="24px" color="#fff">
            {languageData.title_security}
          </HeaderTitle>
        </div>
        <Typography textAlign="center" size="16px" color="#fff">
          {languageData.subTitle_security}
        </Typography>
        <Typography textAlign="center" size="16px" color="#fff">
          {languageData.desc_serurity}
        </Typography>
      </WrapperTitle>
      <div className="container">
        <Wrapper>
          <Right>
            <SecurityList languageData={languageData} />
          </Right>
          <Left>
            <Image src={cardSecurity} alt="cardSecurity" layout="fixed" />
          </Left>
        </Wrapper>
      </div>
    </SecurityStyle>
  );
};

const SecurityStyle = styled.div`
  background: url(${(props) => props.image.src});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  /* height: 80vh; */
  margin: 4rem 0;
  padding: 2rem;

  @media (max-width: 567px) {
    margin: 0rem;
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    display: none;
  }
`;

export default Security;
