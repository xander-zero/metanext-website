import styled from "styled-components";

const Typography = ({
  children,
  size,
  color,
  weight,
  textAlign,
  en,
  height,
}) => {
  return (
    <Text
      size={size}
      color={color}
      weight={weight}
      textAlign={textAlign}
      en={en}
      height={height}
    >
      {children}
    </Text>
  );
};

const Text = styled.p`
  color: ${({ color }) => (color ? color : "#6F6F6F")};
  font-size: ${({ size }) => (size ? size : "14px")};
  font-weight: ${({ weight }) => (weight ? weight : "")};
  line-height: ${({ height }) => (height ? "25px" : "35px")};
  text-align: ${({ textAlign }) => textAlign};
  font-family: ${({ en }) => (en ? "sans-serif" : "IRANSans")};

  @media (max-width: 768px) {
    font-size: 16px !important;
  }

  @media (max-width: 568px) {
    font-size: 14px !important;
  }
`;

export default Typography;
