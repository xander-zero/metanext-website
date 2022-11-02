import Image from "next/image";
import { useSelector } from "react-redux";

import CommentList from "./CommentList/CommentList";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

import { CommentStyle, WrapperTitle } from "./commentStyle";

import point from "../../public/assets/images/point.png";

const Comment = () => {
  const languageSelctor = useSelector((state) => state.language);
  const { languageData } = languageSelctor;

  return (
    <div className="container" id="comment">
      <CommentStyle>
        <WrapperTitle>
          <Image src={point} alt="point" layout="fixed" />
          <HeaderTitle size="24px">
            {languageData.menu_item_comment}
          </HeaderTitle>
        </WrapperTitle>
        <CommentList languageData={languageData} />
      </CommentStyle>
    </div>
  );
};
export default Comment;
