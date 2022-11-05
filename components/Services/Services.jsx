import Image from "next/image";
import { useSelector } from "react-redux";

import Typography from "../../common/Typography/Typography";
import ListService from "./ListService/ListService";

import { ServiceStyle, WrapperTitle } from "./servicesStyle";

import point from "../../public/assets/images/point.png";

const Services = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  return (
    <div className="container mt-1" id="service">
      <ServiceStyle>
        <WrapperTitle>
          <Image src={point} alt="point" layout="fixed" />
          <Typography color="#09539f" weight="bold" size="24px">
            {languageData.title_service}
          </Typography>
        </WrapperTitle>
        <ListService languageData={languageData} />
      </ServiceStyle>
    </div>
  );
};

export default Services;
