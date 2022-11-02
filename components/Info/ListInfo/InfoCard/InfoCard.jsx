import Image from "next/image";
import { useRouter } from "next/router";
import Typography from "../../../../common/Typography/Typography";
import { Card, CardImg, Wrapper } from "./infoCardStyle";
import CountUp from "react-countup";
const InfoCard = ({ src, title, desc }) => {
  const router = useRouter();

  const { locale } = router;

  return (
    <Card>
      <CardImg>
        <Image src={src} alt={title} layout="fixed" />
      </CardImg>
      <Wrapper>
        <Typography
          en={locale === "en" ? "en" : ""}
          size="24px"
          weight="bold"
          color="#053EFF"
        >
          {/* <CountUp duration={1} start={0} end={+title} /> */}
          <CountUp
            duration={10}
            enableScrollSpy={true}
            end={+title}
            useEasing={true}
            separator={","}
            scrollSpyDelay={5}
            scrollSpyOnce={true}
          />
          +
        </Typography>
        <Typography size="14px" color="#000">
          {desc}
        </Typography>
      </Wrapper>
    </Card>
  );
};
export default InfoCard;
