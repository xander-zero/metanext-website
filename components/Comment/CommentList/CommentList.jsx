import { WrapperSlider } from "./commentListStyle";
import CommentCard from "./CommentCard/CommentCard";
import comment from "../../../public/assets/images/comment.png";

import Carousel from "react-elastic-carousel";

const CommentList = ({ languageData }) => {
  const products = [1, 2, 3, 4, 5, 6];
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  return (
    // <Wrapper>
    <WrapperSlider>
      <Carousel breakPoints={breakPoints}>
        {products.map((product, index) => (
          <CommentCard
            key={index + 1}
            src={comment}
            title={
              languageData.comment_person_name_1
                ? languageData.comment_person_name_1
                : ""
            }
            subTitle={
              languageData.comment_person_job_1
                ? languageData.comment_person_job_1
                : ""
            }
            desc={
              languageData.comment_person_desc_2
                ? languageData.comment_person_desc_2
                : ""
            }
          />
        ))}
      </Carousel>
    </WrapperSlider>
    // </Wrapper>
  );
};

export default CommentList;
