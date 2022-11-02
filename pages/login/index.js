import styled from "styled-components";
import { useSelector } from "react-redux";

import Button from "../../common/Button/Button";
import InputField from "../../common/InputField/InputField";
import Typography from "../../common/Typography/Typography";
import HeadPage from "../../common/Head/Head";

const LoginPage = () => {
  const languageSelctor = useSelector((state) => state.language);
  const { languageData } = languageSelctor;

  return (
    <LoginStyle>
      <HeadPage
        title={languageData.header_login}
        description={languageData.main_desc}
      />
      <Form>
        <WrapperBtn>
          <Wrapper>
            <Typography weight="bold">{languageData.login_label}</Typography>
            <Line blue></Line>
          </Wrapper>
          <Wrapper>
            <Typography weight="bold">
              {languageData.singup_label_button}
            </Typography>
            <Line></Line>
          </Wrapper>
        </WrapperBtn>
        <div className="my-3 w-100">
          <InputField
            type="text"
            placeholder={languageData.contact_phoneNumber}
          />
          <InputField
            type="text"
            placeholder={languageData.login_label_password}
          />
        </div>
        <Button bgColor="#1F52FD" width="300px" color="#fff">
          {languageData.login_label}
        </Button>
        <Typography size="10px">
          {languageData.change_login_mode}{" "}
          <span style={{ color: "#1F52FD", fontWeight: "bold" }}>
            {languageData.singup_label_button}
          </span>
        </Typography>
      </Form>
    </LoginStyle>
  );
};

const LoginStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 1px solid #ecf1ff;
  border-radius: 15px;
  @media (max-width: 567px) {
    padding: 2rem 1rem;
  }
`;

const WrapperBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ blue }) =>
    blue ? "#053EFF" : "rgba(117, 122, 134, 0.5)"};
`;

export default LoginPage;
