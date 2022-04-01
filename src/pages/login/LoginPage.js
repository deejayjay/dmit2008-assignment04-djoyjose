import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { BiErrorAlt } from "react-icons/bi";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { auth } from "libs/firebase";
import { Logo } from "components/logo";
import banner from "static/images/banner.webp";
import { Button } from "ui/Button/";
import { LoginContainer, LoginStyles, LoginLeft, LoginRight, LoginForm, InputControl, FormLabel, FormInput, LogoContainer } from "./styles";

function LoginPage(props) {
  // State declarations for email & password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Display the authentication error toast message
  function notify(errorCode) {
    const message = getErrorMessage(errorCode);

    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon: <BiErrorAlt />,
      transition: Zoom
    });
  }

  // Returns appropriate error message for the firebase authentication error code
  function getErrorMessage(errorCode) {
    let message = "";
    switch (errorCode) {
      case "auth/user-not-found":
        message = "User does not exist";
        break;
      case "auth/invalid-email":
        message = "Email is invalid";
        break;
      case "auth/wrong-password":
        message = "Password is incorrect";
        break;

      default:
        message = "Unexpected error occured";
        break;
    }
    return message;
  }

  // Handles the Login form submit event
  function onSignInHandler(e) {
    e.preventDefault();

    // Send the email and password to firebase to authenticate
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Authentication is successful, redirect to dashboard
        navigate("/dashboard");
      })
      .catch((error) => {
        // Authentication has failed, show a toast message with appropriate error
        notify(error.code);
      });
  }

  return (
    <>
      <LoginStyles>
        <ToastContainer />
        <LoginContainer>
          <LoginLeft bgImg={banner}>
            <section>
              <h1>ToysWonderLand</h1>
              <p>We write your child's ToyStory</p>
            </section>
          </LoginLeft>
          <LoginRight>
            <LoginForm onSubmit={onSignInHandler} autoComplete="off">
              <LogoContainer>
                <Logo logoWidth="3rem" />
              </LogoContainer>
              <h2>Member Sign In</h2>
              <InputControl>
                <FormLabel htmlFor="userEmail" margin="0 0 0.25rem">
                  Email
                </FormLabel>
                <FormInput type="email" id="userEmail" name="userEmail" placeholder="janesmith@mail.com" required onChange={(e) => setEmail(e.target.value.trim())} />
              </InputControl>
              <InputControl>
                <FormLabel htmlFor="userPassword" margin="0 0 0.25rem">
                  Password
                </FormLabel>
                <FormInput type="password" id="userPassword" name="userPassword" placeholder="your account password" required onChange={(e) => setPassword(e.target.value.trim())} />
              </InputControl>
              <Button text="Sign In" display="block" width="100%" margin="0 0 1rem" />
              <Link to="/" className="link-forgot">
                Forgot your password?
              </Link>
            </LoginForm>
          </LoginRight>
        </LoginContainer>
      </LoginStyles>
    </>
  );
}

export default LoginPage;
