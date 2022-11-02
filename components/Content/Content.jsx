import Image from "next/image";
import { Main } from "./contentStyle";

// images
import profile from "../../public/assets/images/mr-noori.jpg";

const Content = () => {
  return (
    <div className="container">
      <Main>
        <div className="left">
          <Image src={profile} alt="image profile" objectFit="contain" />
        </div>
        <div className="right"></div>
      </Main>
    </div>
  );
};

export default Content;
