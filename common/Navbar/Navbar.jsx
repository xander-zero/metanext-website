import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import {
  ListItem,
  LogoStyle,
  MenuList,
  Nav,
  ResponsiveBtn,
  ResponsiveLogo,
  StyleNav,
  WrapperButton,
  WrapperLogo,
} from "./navbarStyle";
import Select from "../Select/Select";
import Button from "../Button/Button";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import useWindowSize from "../../hook/useViewPort";
import timebar from "../../public/assets/images/timebar.png";
import close from "../../public/assets/images/close.png";
import logo from "../../public/assets/images/logo.png";
import iran from "../../public/assets/images/iran.png";
import iraq from "../../public/assets/images/iraq.png";
import kingdom from "../../public/assets/images/kingdom.png";
import { handleScroll } from "../../helper/smoothScroll";
import Dropdown from "react-bootstrap/Dropdown";
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [flag, setFlag] = useState(iran);
  const languages = [
    {
      id: "1",
      label: "ایران",
      value: "fa",
    },
    {
      id: "2",
      label: "انگلیسی",
      value: "en",
    },
    {
      id: "3",
      label: "عربی",
      value: "ar",
    },
  ];

  const router = useRouter();
  const type = router.locale;

  const { width } = useWindowSize();

  const onChange = (event) => {
    const lng = event.target.value;
    router.push("/", "/", { locale: lng });
  };

  const languageSelector = useSelector((state) => state.language);

  const { languageData } = languageSelector;

  const navigateToHomePage = (route) => {
    router.push("/", "/", { locale: route });
    setShowSidebar(true);
    if (route === "fa") {
      setFlag(iran);
    } else if (route === "en") {
      setFlag(kingdom);
    } else if (route === "ar") {
      setFlag(iraq);
    }
  };

  return (
    <StyleNav>
      <div className="container">
        <Nav>
          <LogoStyle>
            <Link href="/">
              <>
                <Image
                  src={logo}
                  alt="logo"
                  layout="fixed"
                  objectFit="contain"
                  width={120}
                  height={120}
                />
              </>
            </Link>
          </LogoStyle>
          <WrapperLogo showSidebar={showSidebar}>
            <MenuList>
              {width <= 1022 && (
                <ListItem
                  onClick={() => {
                    handleScroll("home", "start");
                    setShowSidebar(true);
                  }}
                >
                  <ResponsiveLogo>
                    <Image
                      src={logo}
                      alt="logo"
                      layout="fixed"
                      objectFit="contain"
                      width={120}
                      height={50}
                    />
                  </ResponsiveLogo>
                </ListItem>
              )}
              <ListItem
                border={type === "en" ? "true" : ""}
                onClick={() => {
                  handleScroll("about", "start");
                  setShowSidebar(true);
                }}
              >
                {width <= 1022 ? null : (
                  <Image
                    src={timebar}
                    alt="timebar"
                    layout="fixed"
                    onClick={() => setShowSidebar(!showSidebar)}
                  />
                )}
                {/* <Link href="#"> */}
                {languageData.menu_item_about
                  ? languageData.menu_item_about
                  : ""}
                {/* </Link> */}
              </ListItem>
              <ListItem
                border={type === "en" ? "true" : ""}
                onClick={() => {
                  handleScroll("service", "start");
                  setShowSidebar(true);
                }}
              >
                {/* <Link href="#"> */}
                {languageData.menu_item_service
                  ? languageData.menu_item_service
                  : ""}
                {/* </Link> */}
              </ListItem>
              <ListItem
                border={type === "en" ? "true" : ""}
                onClick={() => {
                  handleScroll("features", "start");
                  setShowSidebar(true);
                }}
              >
                {/* <Link href="#"> */}
                {languageData.menu_item_features
                  ? languageData.menu_item_features
                  : ""}
                {/* </Link> */}
              </ListItem>
              <ListItem
                border={type === "en" ? "true" : ""}
                onClick={() => {
                  handleScroll("comment", "start");
                  setShowSidebar(true);
                }}
              >
                {/* <Link href="#"> */}
                {languageData.menu_item_comment
                  ? languageData.menu_item_comment
                  : ""}
                {/* </Link> */}
              </ListItem>
            </MenuList>
            {width <= 1022 ? (
              <WrapperButton>
                <div className="language">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <Image
                        src={flag}
                        alt="kingdom"
                        layout="intrinsic"
                        objectFit="contain"
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        href=""
                        onClick={() => navigateToHomePage("fa")}
                      >
                        <Image src={iran} alt="iran" layout="intrinsic" />
                      </Dropdown.Item>
                      <Dropdown.Item
                        href=""
                        onClick={() => navigateToHomePage("ar")}
                      >
                        <Image src={iraq} alt="iraq" layout="intrinsic" />
                      </Dropdown.Item>
                      <Dropdown.Item
                        href=""
                        onClick={() => navigateToHomePage("en")}
                      >
                        <Image src={kingdom} alt="kingdom" layout="intrinsic" />
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div
                  className="close"
                  onClick={() => setShowSidebar(!showSidebar)}
                >
                  <Image src={close} alt="close" layout="fixed" />
                </div>
                <ResponsiveBtn>
                  <div className="mx-1"></div>
                  <div className="mx-1">
                    <Button
                      size="13px"
                      radius="true"
                      bgColor="#fff"
                      color="#053EFF"
                    >
                      <Link href="/login">
                        {languageData.login_label_button
                          ? languageData.login_label_button
                          : ""}
                      </Link>
                    </Button>
                  </div>
                </ResponsiveBtn>
              </WrapperButton>
            ) : null}
          </WrapperLogo>
          {width <= 1022 ? (
            <Image
              src={timebar}
              alt="timebar"
              layout="fixed"
              onClick={() => setShowSidebar(!showSidebar)}
            />
          ) : (
            <WrapperButton>
              {/* <Select items={languages} onChange={onChange} value={type} /> */}
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <Image
                    src={flag}
                    alt="kingdom"
                    layout="intrinsic"
                    objectFit="contain"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    href=""
                    onClick={() => navigateToHomePage("fa")}
                  >
                    <Image src={iran} alt="iran" layout="intrinsic" />
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={() => navigateToHomePage("ar")}
                  >
                    <Image src={iraq} alt="iraq" layout="intrinsic" />
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={() => navigateToHomePage("en")}
                  >
                    <Image src={kingdom} alt="kingdom" layout="intrinsic" />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="mx-2"></div>
              <div className="mx-2">
                <Button radius="true" bgColor="#fff" color="#053EFF">
                  <Link href="/login">
                    {languageData.login_label_button
                      ? languageData.login_label_button
                      : ""}
                  </Link>
                </Button>
              </div>
            </WrapperButton>
          )}
        </Nav>
      </div>
    </StyleNav>
  );
};
export default Navbar;
