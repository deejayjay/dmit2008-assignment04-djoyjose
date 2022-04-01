import styled from "styled-components";

const ButtonStyles = styled.button`
  background-color: ${(props) => props.bgColor || "#ecad0d"};
  color: ${(props) => props.color || "#333333"};
  border: 2px solid ${(props) => props.bgColor || "#ecad0d"};
  display: ${(props) => props.display || "inline-block"};
  width: ${(props) => props.width || "auto"};
  margin: ${(props) => props.margin || "0"};
  border-radius: 5px;
  font-size: 1.125rem;
  outline: none;
  padding: 0.5rem 1rem;
  text-align: center;
  transition: all 0.3s ease-in;

  &:hover {
    cursor: pointer;
    border-color: ${(props) => props.color || "#333333"};
  }
`;

export { ButtonStyles };
