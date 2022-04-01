import styled from "styled-components";

const LogoStyles = styled.img`
  width: ${(props) => props.logoWidth || "2rem"};
  margin: ${(props) => props.logoMargin || "0"};
`;

export { LogoStyles };
