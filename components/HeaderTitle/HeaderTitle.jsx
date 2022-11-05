import styled from "styled-components";

const HeaderTitle = ({ size, color, children, weight, en }) => {
  return (
    <Text size={size} color={color} weight={weight} en={en}>
      {children}
    </Text>
  );
};

const Text = styled.h1`
  font-size: ${({ size }) => size};
  color: ${({ color }) => (color ? color : "#09539f")};
  font-weight: bold;
  font-family: ${({ en }) => (en ? "sans-serif" : "")};
  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 568px) {
    font-size: 18px;
  }
`;

export default HeaderTitle;
