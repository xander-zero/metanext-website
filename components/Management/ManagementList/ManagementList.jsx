import { Fragment } from "react";
import pack from "../../../public/assets/images/pack.png";
import conversation from "../../../public/assets/images/conversation.png";
import develop from "../../../public/assets/images/develop.png";
import marketing from "../../../public/assets/images/marketing.png";
import support from "../../../public/assets/images/support.png";
import manageHuman from "../../../public/assets/images/manageHuman.png";
import { ManagementListStyle } from "./managementListStyle";
import ManagementsCard from "./ManagementCard/ManagementCard";
import useWindowSize from "../../../hook/useViewPort";
import Carousel from "react-elastic-carousel";

const ManagementList = ({ languageData }) => {
  const { width } = useWindowSize();

  const managements = [
    {
      id: "1",
      src: pack,
      title: languageData.service_one_pannel,
      desc: languageData.service_one_pannel_desc,
    },
    {
      id: "2",
      src: conversation,
      title: languageData.service_two_pannel,
      desc: languageData.service_two_pannel_desc,
    },
    {
      id: "3",
      src: develop,
      title: languageData.service_three_pannel,
      desc: languageData.service_three_pannel_desc,
    },
    {
      id: "4",
      src: marketing,
      title: languageData.service_four_pannel,
      desc: languageData.service_four_pannel_desc,
    },
    {
      id: "5",
      src: support,
      title: languageData.service_five_pannel,
      desc: languageData.service_five_pannel_desc,
    },
    {
      id: "6",
      src: manageHuman,
      title: languageData.service_six_pannel,
      desc: languageData.service_six_pannel_desc,
    },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <Fragment>
      {width <= 1022 ? (
        <div className="text-center show-slide my-4 w-100">
          <Carousel breakPoints={breakPoints}>
            {managements.map((item) => (
              <ManagementsCard
                key={item.id}
                title={item.title}
                desc={item.desc}
                src={item.src}
              />
            ))}
          </Carousel>
        </div>
      ) : (
        <>
          <ManagementListStyle>
            {managements.map((item) => (
              <ManagementsCard
                key={item.id}
                src={item.src}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </ManagementListStyle>
        </>
      )}
    </Fragment>
  );
};

export default ManagementList;
