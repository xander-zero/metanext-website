import styled from "styled-components";
import { useSelector } from "react-redux";

import Button from "../../common/Button/Button";
import InputField from "../../common/InputField/InputField";
import Typography from "../../common/Typography/Typography";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import { requestContact } from "../../service/apiConfig";
import { useState } from "react";
import { successMessage } from "../../utils/message";
import HeadPage from "../../common/Head/Head";
import { useRouter } from "next/router";

const ContactPage = () => {
  const languageSelctor = useSelector((state) => state.language);
  const { languageData } = languageSelctor;

  const router = useRouter();

  console.log(router);

  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    subject_message: "",
    content_message: "از طریق متانکست برای پروژه",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await requestContact(form);
    successMessage(languageData.success_message);
    resetForm();
  };

  const resetForm = () => {
    setForm({
      full_name: "",
      phone: "",
      subject_message: "",
      content_message: "از طریق متانکست برای پروژه",
    });
  };

  return (
    <LoginStyle>
      <HeadPage
        title={languageData.contact_metanext}
        description={languageData.main_desc}
      />
      <Form onSubmit={handleSubmit}>
        <WrapperBtn>
          <HeaderTitle weight="bold" size="20px">
            {languageData.menu_item_contact}
          </HeaderTitle>
        </WrapperBtn>
        <div className="w-100">
          <InputField
            type="text"
            placeholder={languageData.contact_fullName}
            name="full_name"
            onChange={handleChange}
            value={form.full_name}
          />
          <InputField
            type="number"
            placeholder={languageData.contact_phoneNumber}
            name="phone"
            onChange={handleChange}
            value={form.phone}
          />
        </div>
        <FormControl>
          <Typography color="#000" weight="bold" size="16px">
            {languageData.question_contact}
          </Typography>
          <div className="my-4">
            <FormGroup>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value={languageData.question_contact_one}
                onChange={(event) =>
                  setForm({ ...form, subject_message: event.target.value })
                }
              />
              <label
                className="form-check-label label-request mx-2"
                htmlFor="flexRadioDefault1"
              >
                {languageData.question_contact_one}
              </label>
            </FormGroup>
          </div>
          <div className="my-1">
            <FormGroup>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value={languageData.question_contact_two}
                onChange={(event) =>
                  setForm({ ...form, subject_message: event.target.value })
                }
              />
              <label
                className="form-check-label label-request mx-2"
                htmlFor="flexRadioDefault1"
              >
                {languageData.question_contact_two}
              </label>
            </FormGroup>
          </div>
        </FormControl>
        <Button bgColor="#1F52FD" width="300px" color="#fff">
          {languageData.confirm_request}
        </Button>
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

  @media (max-width: 568px) {
    padding: 2rem 1rem;
  }
`;

const WrapperBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

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

const FormControl = styled.div`
  margin: 20px 0;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
`;

const FormGroup = styled.div`
  border: 1px solid #ededed;
  border-radius: 10px;
  padding: 0.5rem;
  .form-check-label {
    font-size: 12px !important;
    color: #757a86 !important;
  }
`;

export default ContactPage;
