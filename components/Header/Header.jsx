import Image from "next/image";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import Typography from "../../common/Typography/Typography";

import { WrapperText } from "../../styles/GlobalStyle";
import {
  Left,
  Right,
  Wrapper,
  WrapperCircle,
  WrapperQuote,
} from "./headerStyle";
import quote from "../../public/assets/images/quote.png";
import circle from "../../public/assets/images/headerImg.png";

// import headerImg1 from "../../public/assets/images/headerImg1.png";
// import headerImg2 from "../../public/assets/images/headerImg2.png";
import { useSelector } from "react-redux";

import useWindowSize from "../../hook/useViewPort";
import Button from "../../common/Button/Button";
import Link from "next/link";

const Header = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  const { width } = useWindowSize();

  return (
    <div className="container" id="home">
      <Wrapper>
        <Right>
          <WrapperQuote>
            <Image
              src={quote}
              alt="quote"
              layout="intrinsic"
              objectFit="contain"
            />
          </WrapperQuote>
          <HeaderTitle size="24px">{languageData.title_header}</HeaderTitle>
          <div className="my-2">
            <WrapperText width="60%">
              <Typography>{languageData.desc_header}</Typography>
            </WrapperText>
          </div>
        </Right>
        <Left>
          <WrapperCircle>
            <Image
              src={circle}
              alt="circle"
              layout="intrinsic"
              objectFit="contain"
            />
            {width <= 560 && (
              <Button bgColor="#053EFF" width="200px" color="#fff">
                <Link href="/contact">{languageData.menu_item_contact}</Link>
              </Button>
            )}
          </WrapperCircle>
        </Left>
      </Wrapper>
    </div>
  );
};
export default Header;
