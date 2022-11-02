import Typography from "../../../../common/Typography/Typography";
import { CardTitle, CardWrapper } from "./aboutCardStyle";

const Card = ({ title, desc }) => {
  return (
    <CardWrapper>
      <CardTitle>
        <Typography size="14px" weight="bold" color="#053EFF">
          {title}
        </Typography>
      </CardTitle>
      <Typography height="true" size="14px" color="#000">
        {desc}
      </Typography>
    </CardWrapper>
  );
};
export default Card;
