import styled from "styled-components";

const Select = ({ items, onChange, value }) => {
  return (
    <SelectStyle value={value} onChange={onChange}>
      {/* {items?.map((item) => (
        <Option key={item.id} value={item.value}>
          {item?.label}
        </Option>
      ))} */}
    </SelectStyle>
  );
};

const SelectStyle = styled.select`
  border: none;
  outline: none;
  font-size: 14px;
`;

const Option = styled.option`
  width: 50px;
  height: 50px;
  display: flex;
`;

export default Select;
