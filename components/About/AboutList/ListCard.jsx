import styled from "styled-components";
import { useSelector } from "react-redux";
import Card from "./AboutCard/AboutCard";

const ListCard = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  return (
    <List>
      <Card
        title={languageData.title_mention_about}
        desc={languageData.desc_mention_about}
      />
      <Card
        title={languageData.title_profecy_about}
        desc={languageData.desc_profecy_about}
      />
      <Card
        title={languageData.title_viewport_about}
        desc={languageData.desc_viewport_about}
      />
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

export default ListCard;
