import Image from "next/image";
import { useSelector } from "react-redux";

import HeaderTitle from "../HeaderTitle/HeaderTitle";
import ListCard from "./AboutList/ListCard";
import Typography from "../../common/Typography/Typography";

import { AboutStyle, AboutWrapper, Line, Wrapper } from "./aboutStyle";
import { WrapperText } from "../../styles/GlobalStyle";

import point from "../../public/assets/images/point.png";

const About = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  return (
    <AboutWrapper id="about">
      <div className="container">
        <AboutStyle>
          <Wrapper>
            <Image src={point} alt="quote" layout="fixed" />
            <HeaderTitle size="24px">{languageData.title_about}</HeaderTitle>
            <div className="mt-2">
              <Typography size="16px" weight="bold" color="#000">
                {languageData.subTitle_about}
              </Typography>
            </div>
            <div className="mb-2 mx-auto">
              <WrapperText width="70%" margin="auto">
                <Typography size="15px" textAlign="center">
                  {languageData.desc_goal_about}
                </Typography>
                <div className="my-4">
                  <Line></Line>
                </div>
              </WrapperText>
            </div>
          </Wrapper>
          <ListCard />
        </AboutStyle>
      </div>
    </AboutWrapper>
  );
};
export default About;
