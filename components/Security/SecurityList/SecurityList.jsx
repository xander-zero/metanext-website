import styled from "styled-components";
import SecurityCard from "./SecurityCard/SecurityCard";
import tik from "../../../public/assets/images/tik.png";

const SecurityList = ({ languageData }) => {
  return (
    <SecurityListStyle>
      <SecurityCard
        src={tik}
        title={languageData.title_smart_security}
        desc={languageData.desc_smart_security}
      />
      <SecurityCard
        src={tik}
        title={languageData.title_encrypt_security}
        desc={languageData.desc_encrypt_security}
      />
      <SecurityCard
        src={tik}
        title={languageData.title_backup_security}
        desc={languageData.desc_backup_security}
      />
      <SecurityCard
        src={tik}
        title={languageData.title_xander_security}
        desc={languageData.desc_xander_security}
      />
    </SecurityListStyle>
  );
};

const SecurityListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export default SecurityList;
