import React from "react";

import { Link } from "react-router-dom";
import { FaIcon } from "../../ui/FaIcon";

import { Logo } from "../logo";
import { AppBarStyles, AppBarWrapper, AppBarBrand, BrandName, AppBarIconGroup, AppBarIcons } from "./styles";

function AppBar(props) {
  function onToggleMenuClick() {
    const currentWidth = document.querySelector(".sidebar-wrapper").style.width;
    if (currentWidth === "0px" || currentWidth === "") document.querySelector(".sidebar-wrapper").style.width = "100%";
    else document.querySelector(".sidebar-wrapper").style.width = "0";
  }

  return (
    <>
      <AppBarStyles>
        <AppBarWrapper>
          <AppBarBrand>
            <Link to="/dashboard">
              <Logo />
              <BrandName className="header-title__wrapper">
                <span className="header-title header-title--pink">Toys</span>
                <span className="header-title header-title--green">Wonder</span>
                <span className="header-title header-title--blue">Land</span>
              </BrandName>
            </Link>
          </AppBarBrand>

          <AppBarIconGroup>
            <AppBarIcons>
              <li className="toggle-menu">
                <FaIcon className="fas fa-bars" size="1.25rem" onClick={onToggleMenuClick} />
              </li>
              <li>
                <FaIcon className="fas fa-envelope" size="1.25rem" />
              </li>
              <li>
                <FaIcon className="fas fa-bell" size="1.25rem" />
              </li>
              <li>
                <FaIcon className="fa-user-circle fas" size="2rem" color="#ecad0d" />
              </li>
              <li>
                <FaIcon className="fas fa-ellipsis-v" size="1.25rem" />
              </li>
            </AppBarIcons>
          </AppBarIconGroup>
        </AppBarWrapper>
      </AppBarStyles>
    </>
  );
}

export default AppBar;
