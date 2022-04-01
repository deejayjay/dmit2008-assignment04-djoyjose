import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "libs/firebase";

import { PanelCardsContainer, PanelStyles, PanelTitle, PanelTitleBar } from "./styles";

function EditToyPanel({ title, ...props }) {
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

  if (isUser) {
    return (
      <>
        <PanelStyles>
          <PanelTitleBar>
            <PanelTitle>{title || "Panel Title"}</PanelTitle>
          </PanelTitleBar>
          <PanelCardsContainer>{/* Add Product Cards here */}</PanelCardsContainer>
        </PanelStyles>
      </>
    );
  }

  return null;
}

export default EditToyPanel;
