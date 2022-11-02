import Image from "next/image";
import { useSelector } from "react-redux";

import ManagementList from "./ManagementList/ManagementList";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

import { ManagementStyle, WrapperTitle } from "./managementStyle";

import point from "../../public/assets/images/point.png";
import Typography from "../../common/Typography/Typography";
import { WrapperText } from "../../styles/GlobalStyle";

const Management = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  return (
    <div className="container">
      <ManagementStyle>
        <WrapperTitle>
          <Image src={point} alt="point" layout="fixed" />
          <HeaderTitle size="24px">
            {languageData.title_pannel_management}
          </HeaderTitle>
        </WrapperTitle>
        <div className="my-1">
          <WrapperText width="60%" margin="auto">
            <Typography color="#000" textAlign="center">
              {languageData?.desc_pannel_management}
            </Typography>
          </WrapperText>
        </div>
        <ManagementList languageData={languageData} />
      </ManagementStyle>
    </div>
  );
};

export default Management;
