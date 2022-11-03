import Image from "next/image";
import { useSelector } from "react-redux";

import Typography from "../Typography/Typography";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";

import { WrapperText } from "../../styles/GlobalStyle";
import {
  FooterStyle,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  SocilaMedia,
  SubFooter,
  WapperIcon,
  WrapperIcon,
} from "./footerStyle";

// import linkdin from "../../public/assets/images/linkdin.png";
// import telegram from "../../public/assets/images/telegram.png";
// import instagram from "../../public/assets/images/instagram.png";
import phone from "../../public/assets/images/phone.png";
// import whatsapp from "../../public/assets/images/whatsapp.png";
import location from "../../public/assets/images/location.png";
import email from "../../public/assets/images/email.png";
import logo from "../../public/assets/images/logo.png";
import upIcon from "../../public/assets/images/upIcon.png";
import useWindowSize from "../../hook/useViewPort";
import { LogoStyle } from "../Navbar/navbarStyle";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  const router = useRouter();

  const { width } = useWindowSize();

  return (
    <FooterStyle>
      <div className="line"></div>
      <WapperIcon>
        <Link href="/">
          <Image src={upIcon} alt="up" layout="intrinsic" objectFit="contain" />
        </Link>
      </WapperIcon>
      <div className="container d-flex">
        <Right>
          <LogoStyle>
            <Image
              src={logo}
              alt="logo"
              layout="intrinsic"
              objectFit="contain"
              width={120}
              height={120}
            />
          </LogoStyle>
          <div className="desc mb-5">
            <WrapperText width="80%">
              <Typography size="15px" color="#000">
                {languageData.desc_goal_about}
              </Typography>
            </WrapperText>
          </div>
          {/* <SocilaMedia>
            <Icon>
              <Image src={linkdin} alt="linkdin" />
            </Icon>
            <Icon>
              <Image src={telegram} alt="telegram" />
            </Icon>
            <Icon>
              <a
                target={`_blank`}
                href={`https://www.instagram.com/metanext.biz/`}
              >
                <Image src={instagram} alt="instagram" />
              </a>
            </Icon>
            <Icon>
              <a
                target={`_blank`}
                href={`https://api.whatsapp.com/send?phone=09352163631`}
              >
                <Image src={whatsapp} alt="whatsapp" width={27} height={27} />
              </a>
            </Icon>
          </SocilaMedia> */}
        </Right>
        <Left>
          <Typography size="16px" color="#053EFF" weight="bold">
            {languageData.contact_subTitle}
          </Typography>
          <List>
            <ListItem>
              <Typography size="13px">
                {languageData.title_phonenumber_footer}
              </Typography>
              <WrapperIcon>
                <Image
                  src={phone}
                  alt="phone number"
                  layout="fixed"
                  width={30}
                  height={30}
                />
                <div className="mx-2">
                  <Typography
                    size="13px"
                    en={router.locale === "en" ? "en" : ""}
                  >
                    <a href="tel:+98-9352163631">
                      {router.locale === "en" && "+"}98-9352163631
                      {router.locale === "fa" && "+"}
                    </a>
                  </Typography>
                </div>
              </WrapperIcon>
            </ListItem>
            <ListItem>
              <Typography size="13px">
                {languageData.address_company}
              </Typography>
              <WrapperIcon>
                <Image src={location} alt="phone number" layout="fixed" />
                <div className="mx-2">
                  <Typography size="13px">
                    {languageData.address_company_desc}
                  </Typography>
                </div>
              </WrapperIcon>
            </ListItem>
            <ListItem>
              <Typography size="13px">
                {languageData.title_email_footer}
              </Typography>
              <WrapperIcon>
                <Image src={email} alt="phone number" layout="fixed" />
                <div className="mx-2">
                  <Typography size="13px">info@metanext.biz</Typography>
                </div>
              </WrapperIcon>
            </ListItem>
          </List>
          {/* {width <= 768 && (
            <SocilaMedia>
              <Icon>
                <Image src={linkdin} alt="linkdin" />
              </Icon>
              <Icon>
                <Image src={telegram} alt="telegram" />
              </Icon>
              <Icon>
                <Image src={instagram} alt="instagram" />
              </Icon>
            </SocilaMedia>
          )} */}
        </Left>
      </div>
      <SubFooter>
        <div className="container">
          <Typography size="13px" weight="400">
            {languageData.alert_message}
          </Typography>
        </div>
      </SubFooter>
    </FooterStyle>
  );
};
export default Footer;
// "start": "NODE_ENV=production node server.js",
