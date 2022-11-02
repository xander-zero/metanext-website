import Image from "next/image";
import { useSelector } from "react-redux";
import Typography from "../../common/Typography/Typography";

// image
import profile from "../../public/assets/images/mr-noori.jpg";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import { Left, Main, Right, WraooerText } from "./introStyle";

const Intro = () => {
  const languageSelctor = useSelector((state) => state.language);
  const { languageData } = languageSelctor;

  return (
    <div
      className="container d-flex justify-content-between w-100"
      id="comment"
    >
      <Main>
        <Right>
          <Image src={profile} alt="image profile" objectFit="contain" />
        </Right>
        <Left>
          <WraooerText>
            <HeaderTitle size="20px" weight="bold">
              {languageData?.intro_title}
            </HeaderTitle>
            <div className="my-4">
              <Typography textAlign="justify" size="16px">
                {languageData?.intro_desc}
              </Typography>
              <Typography textAlign="justify" size="16px">
                {languageData?.intro_desc2}
              </Typography>
              <div className="my-3">
                <Typography weight="bold">
                  {languageData?.intro_footer}
                </Typography>
              </div>
            </div>
          </WraooerText>
        </Left>
      </Main>
    </div>
  );
};

export default Intro;
