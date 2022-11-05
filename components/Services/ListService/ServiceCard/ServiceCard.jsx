import Image from "next/image";
import { useSelector } from "react-redux";
import Typography from "../../../../common/Typography/Typography";

import {
  Card,
  CardDesc,
  CardImg,
  CardTitle,
  ServiceCardStyle,
} from "./serviceCardStyle";

import play from "../../../../public/assets/images/play.png";
import playellow from "../../../../public/assets/images/play-yellow.png";
import Account from "../../../../public/assets/icon/Account";
import { useState } from "react";
import Manage from "../../../../public/assets/icon/Manage";
import Crm from "../../../../public/assets/icon/Crm";
import Provider from "../../../../public/assets/icon/Provider";
import Shop from "../../../../public/assets/icon/Shop";
import Chat from "../../../../public/assets/icon/Chat";

const ServiceCard = ({ title, src, desc, color, name }) => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  const [colors, setColors] = useState({
    gray: "#09539f",
    blue: "#AFB7CA",
    status: false,
  });
  return (
    <ServiceCardStyle>
      <Card
        onMouseEnter={() =>
          setColors({ gray: "#FFBA08", blue: "#FFBA08", status: true })
        }
        onMouseLeave={() =>
          setColors({ gray: "#AFB7CA", blue: "#09539f", status: false })
        }
      >
        <div className="card-wrapper">
          <div className="card-service">
            <CardImg>
              {name === "account" ? (
                <Account gray={colors.gray} blue={colors.blue} />
              ) : name === "service" ? (
                <Manage gray={colors.gray} blue={colors.blue} />
              ) : name === "crm" ? (
                <Crm gray={colors.gray} blue={colors.blue} />
              ) : name === "provider" ? (
                <Provider gray={colors.gray} blue={colors.blue} />
              ) : name === "shop" ? (
                <Shop gray={colors.gray} blue={colors.blue} />
              ) : name === "chat" ? (
                <Chat gray={colors.gray} blue={colors.blue} />
              ) : null}
            </CardImg>
            <CardTitle>
              <Typography size="15px" weight="bold" color="#000">
                {title}
              </Typography>
            </CardTitle>
            <CardDesc color="#757A86">
              <Typography size="14px">{desc}</Typography>
            </CardDesc>
          </div>
          <div
            className="my-2 "
            style={{ display: "flex", alignItems: "center" }}
          >
            {/* <Play /> */}
            {colors.status ? (
              <Image src={playellow} alt="play" layout="fixed" />
            ) : (
              <Image src={play} alt="play" layout="fixed" />
            )}

            <div className="mx-3 free-learn">
              <Typography
                color={color ? color : "#09539f"}
                // color="#053EFF"
                size="12px"
                weight="bold"
              >
                {languageData.free_watch_video}
              </Typography>
            </div>
          </div>
          <div
            className="line"
            style={{ backgroundColor: color ? color : "#09539f" }}
          ></div>
        </div>
      </Card>
    </ServiceCardStyle>
  );
};
export default ServiceCard;
