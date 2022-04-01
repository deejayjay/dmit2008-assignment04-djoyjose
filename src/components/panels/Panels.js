import React from "react";
import { PanelCardsContainer, PanelStyles, PanelTitle, PanelTitleBar } from "./styles";

function Panels({ isUser, ...props }) {
  if (isUser) {
    return (
      <>
        <PanelStyles>
          <PanelTitleBar>
            <PanelTitle>All Toys</PanelTitle>
          </PanelTitleBar>
          <PanelCardsContainer>{/* Add Product Cards here */}</PanelCardsContainer>
        </PanelStyles>
      </>
    );
  }
  return null;
}

export default Panels;
