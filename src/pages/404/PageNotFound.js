import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBackspace } from "react-icons/fa";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "libs/firebase";
import ghostImg from "static/images/404.svg";
import { PageNotFoundWrapper, PageNotFoundStyles, PageNotFoundLeft, PageNotFoundRight } from "./styles";
import { Logo } from "components/logo";

function PageNotFound(props) {
  const [isUser, setIsUser] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  });

  return (
    <>
      <PageNotFoundWrapper>
        <PageNotFoundStyles>
          <PageNotFoundLeft>
            <img src={ghostImg} alt="Page not found error" />
          </PageNotFoundLeft>
          <PageNotFoundRight>
            <div>
              <Logo logoWidth="4rem" logoMargin="0 0 1rem" />
              <h1>Page Not Found</h1>
              <p>Trust me, you don't want to be here...</p>
              <p>
                {/* Using terenary operator to do conditional rendering */}
                <Link to={isUser ? "/dashboard" : "/"}>
                  <FaBackspace size="2rem" /> Take me Home.
                </Link>
              </p>
            </div>
          </PageNotFoundRight>
        </PageNotFoundStyles>
      </PageNotFoundWrapper>
    </>
  );
}

export default PageNotFound;
