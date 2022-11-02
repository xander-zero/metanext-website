import Image from "next/image";
import Typography from "../../../../common/Typography/Typography";
import { Card, CardImg } from "./securityCardStyle";

const SecurityCard = ({ src, title, desc }) => {
  return (
    <Card>
      <CardImg>
        <Image src={src} alt={title} layout="fixed" />
        <div className="mx-2">
          <Typography color="#fff" size="15px">
            {title}
          </Typography>
        </div>
      </CardImg>
      <div className="my-2">
        <Typography size="12px" color="#fff">
          {desc}
        </Typography>
      </div>
    </Card>
  );
};
export default SecurityCard;
