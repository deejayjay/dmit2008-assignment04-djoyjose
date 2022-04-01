import styled from "styled-components";

const LoginStyles = styled.div`
  background-color: #ededed;
  font-family: "Open Sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;

  .Toastify__toast {
    background-color: #fafafa;
    color: crimson;
  }

  .Toastify__progress-bar {
    background-color: crimson;
  }

  .Toastify__close-button > svg {
    fill: crimson;
  }
`;

const LoginContainer = styled.section`
  width: 100%;
  border-radius: 5px;
  background-color: #fefefe;
  box-shadow: 0 0 5px 2px #ababab;

  @media only screen and (min-width: 768px) {
    min-width: 40rem;
    max-width: 50rem;
    display: flex;
  }
`;

const LoginLeft = styled.div`
  padding: 1rem 1rem 10rem;
  background: url(${(props) => props.bgImg}) no-repeat 0% 60% / cover;
  color: #fefefe;
  border-radius: 5px 0 0 5px;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    width: 50%;
    padding: 3rem 1rem 17rem;
    background: url(${(props) => props.bgImg}) no-repeat 0% 0% / cover;
  }

  section {
    background: rgba(0, 0, 0, 0.5);
    padding: 1rem;
    border-radius: 5px;
    position: relative;

    &::before {
      content: "";
      width: 3rem;
      height: 3rem;
      border-left: 2px solid rgba(0, 0, 0, 0.5);
      border-top: 2px solid rgba(0, 0, 0, 0.5);
      border-radius: 5px 0 0 0;
      display: block;
      position: absolute;
      top: -0.5rem;
      left: -0.5rem;
    }

    &::after {
      content: "";
      width: 3rem;
      height: 3rem;
      border-right: 2px solid rgba(0, 0, 0, 0.5);
      border-bottom: 2px solid rgba(0, 0, 0, 0.5);
      border-radius: 0 0 5px 0;
      display: block;
      position: absolute;
      bottom: -0.5rem;
      right: -0.5rem;
    }
  }

  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 2.25rem;
  }

  p {
    margin-top: 0;
    font-style: italic;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: "Caveat", cursive;
  }
`;

const LoginRight = styled.div`
  color: #5a5a5a;

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;

const LoginForm = styled.form`
  padding: 2rem 1.5rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1rem 0;
    text-align: center;
  }

  .link-forgot {
    color: #5a5a5a;
    text-decoration: none;
    border-bottom: 2px dotted #5a5a5a;
    padding-bottom: 0.25rem;

    &:hover {
      border-bottom: none;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InputControl = styled.div`
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 1.5rem;
  }
`;

const FormLabel = styled.label`
  display: ${(props) => props.display || "block"};
  margin: ${(props) => props.margin || "0"};
`;

const FormInput = styled.input`
  width: ${(props) => props.width || "100%"};
  padding: ${(props) => props.padding || "0.5rem 1rem"};
  font-size: ${(props) => props.fontSize || "1rem"};
  border-radius: ${(props) => props.borderRadius || "5px"};
  border: ${(props) => props.border || "1px solid #bcbcbc"};
  color: ${(props) => props.color || "#5a5a5a"};
  transition: all 0.3s ease-in;
`;

export { LoginStyles, LoginContainer, LoginLeft, LoginRight, LoginForm, InputControl, FormLabel, FormInput, LogoContainer };
