import Image from "next/image";
import { useSelector } from "react-redux";

import ListInfo from "./ListInfo/ListInfo";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import Typography from "../../common/Typography/Typography";

import { InfoStyle, WrapperTitle } from "./infoStyle";

import point from "../../public/assets/images/point.png";

const Info = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  return (
    <InfoStyle id="features">
      <WrapperTitle>
        <Image src={point} alt="quote" layout="fixed" />
        <HeaderTitle size="24px">{languageData.support_title}</HeaderTitle>
        <div className="my-3">
          <Typography size="15px">{languageData.support_subTitle}</Typography>
        </div>
      </WrapperTitle>
      <ListInfo languageData={languageData} />
    </InfoStyle>
  );
};
export default Info;
