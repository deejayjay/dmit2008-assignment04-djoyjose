import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "libs/firebase";
import { AppBar } from "components/appbar";
import { MainContent } from "components/maincontent";

function DashBoardPage(props) {
  const [isUser, setIsUser] = useState(false);
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    // A user has logged in
    if (user) {
      setIsUser(true);
    } else {
      // No valid user is logged in. Redirect to login page.
      setIsUser(false);
      navigate("/");
    }
  });

  // Display the component once the onAuthStateChanged is done checking
  // the user's sign-in state
  if (isUser) {
    return (
      <>
        <AppBar />
        <MainContent isUser={isUser} />
      </>
    );
  }
  // Don't display anything until the onAuthStateChanged is done checking
  // the user's sign-in state
  return null;
}

export default DashBoardPage;
