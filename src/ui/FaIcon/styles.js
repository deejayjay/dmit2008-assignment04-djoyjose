import styled from "styled-components";

const FaIconStyles = styled.i`
  font-size: ${(props) => props.size || "1rem"};
  color: ${(props) => props.color || "#5a5a5a"};
  margin: ${(props) => props.margin || "0"};
`;

export { FaIconStyles };
