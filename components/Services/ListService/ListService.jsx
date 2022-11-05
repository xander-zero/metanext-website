import ServiceCard from "./ServiceCard/ServiceCard";

import { ListServiceStyle } from "./listServiceStyle";

import useWindowSize from "../../../hook/useViewPort";

import account from "../../../public/assets/images/account.png";
import manage from "../../../public/assets/images/manage.png";
import crm from "../../../public/assets/images/crm.png";
import provider from "../../../public/assets/images/provider.png";
import shop from "../../../public/assets/images/shop.png";
import chat from "../../../public/assets/images/chat.png";
import Carousel from "react-elastic-carousel";

const ListService = ({ languageData }) => {
  const { width } = useWindowSize();

  const services = [
    {
      id: "1",
      title: languageData.title_account_service,
      desc: languageData.desc_account_service,
      src: account,
      name: "account",
    },
    {
      id: "2",
      title: languageData.title_all_services,
      desc: languageData.desc_all_services,
      src: manage,
      name: "service",
    },
    {
      id: "3",
      title: languageData.title_crm_service,
      desc: languageData.desc_crm_service,
      src: crm,
      name: "crm",
    },
    {
      id: "4",
      title: languageData.title_provider,
      desc: languageData.desc_provider,
      src: provider,
      name: "provider",
    },
    {
      id: "5",
      title: languageData.title_shop_service,
      desc: languageData.desc_shop_service,
      src: shop,
      name: "shop",
    },
    {
      id: "6",
      title: languageData.title_mangeContent_service,
      desc: languageData.desc_manageContent_service,
      src: chat,
      name: "chat",
    },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <ListServiceStyle>
      {width <= 560 ? (
        <div className="slide-container text-center show-slide mt-4">
          <Carousel breakPoints={breakPoints}>
            {services.map((item) => (
              <ServiceCard
                key={item.id}
                title={item.title}
                desc={item.desc}
                src={item.src}
                color={item?.color}
                name={item?.name}
              />
            ))}
          </Carousel>
        </div>
      ) : (
        <>
          {services.map((item) => (
            <ServiceCard
              key={item.id}
              title={item.title}
              desc={item.desc}
              src={item.src}
              color={item.color}
              name={item?.name}
            />
          ))}
        </>
      )}
    </ListServiceStyle>
  );
};
export default ListService;
