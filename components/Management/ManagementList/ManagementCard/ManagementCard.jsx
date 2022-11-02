import Image from "next/image";
import { useRouter } from "next/router";
import Typography from "../../../../common/Typography/Typography";
import HeaderTitle from "../../../HeaderTitle/HeaderTitle";
import { ServiceCardStyle } from "../../../Services/ListService/ServiceCard/serviceCardStyle";
import { Card, CardDesc, CardImg, CardTitle } from "./managementCardStyle";

const ManagementsCard = ({ src, title, desc }) => {
  const router = useRouter();

  const { locale } = router;

  return (
    <ServiceCardStyle>
      <Card>
        <CardImg>
          <Image src={src} alt={title} layout="fixed" />
        </CardImg>
        <CardTitle>
          <HeaderTitle en={locale === "en" ? "en" : ""} size="18px">
            {title}
          </HeaderTitle>
        </CardTitle>
        <CardDesc>
          <Typography textAlign="center" size="14px">
            {desc}
          </Typography>
        </CardDesc>
      </Card>
    </ServiceCardStyle>
  );
};
export default ManagementsCard;
