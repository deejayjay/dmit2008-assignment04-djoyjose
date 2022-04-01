/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

import { signOut } from "firebase/auth";

import { auth } from "libs/firebase";
import { IconButton } from "ui/IconButton";
import { FaIcon } from "ui/FaIcon";

import { SideBarStyles, SideBarItems, SideBarItem } from "./styles";

function SideBar({ isUser, ...props }) {
  function signOutHandler(e) {
    console.log("Here");
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully.");
      })
      .catch((err) => {
        console.log(`Unexpected error occurred while signing out the user: ${err.message}`);
      });
  }

  // Checks the value of isUser state variable
  // which is passed from MainContent component
  if (isUser) {
    return (
      <>
        <SideBarStyles className="sidebar-wrapper">
          <SideBarItems>
            <SideBarItem>
              <IconButton iconPosition="before" iconName="fas fa-sign-out-alt" iconMargin="0 0.75rem 0 0" text="Sign Out" onClick={signOutHandler} />
            </SideBarItem>
            <SideBarItem>
              <Link to="/dashboard">
                <FaIcon className="fas fa-eye" margin="0 0.75rem 0 0" />
                View all toys
              </Link>
            </SideBarItem>
            <SideBarItem>
              <Link to="add">
                <FaIcon className="fas fa-plus-circle" margin="0 0.75rem 0 0" />
                Add new toy
              </Link>
            </SideBarItem>
            <SideBarItem>
              <Link to="edit">
                <FaIcon className="fas fa-edit" margin="0 0.75rem 0 0" />
                Edit toy
              </Link>
            </SideBarItem>
            <SideBarItem>
              <a href="#">
                <FaIcon className="fas fa-list" margin="0 0.75rem 0 0" />
                Categories
              </a>
            </SideBarItem>
            <SideBarItem>
              <a href="#">
                <FaIcon className="fas fa-cube" margin="0 0.75rem 0 0" />
                Brands
              </a>
            </SideBarItem>
            <SideBarItem>
              <a href="#">
                <FaIcon className="fas fa-shipping-fast" margin="0 0.75rem 0 0" />
                Coming Soon
              </a>
            </SideBarItem>
            <SideBarItem>
              <a href="#">
                <FaIcon className="fas fa-hand-holding-usd" margin="0 0.75rem 0 0" />
                Deals
              </a>
            </SideBarItem>
            <SideBarItem>
              <a href="#">
                <FaIcon className="fas fa-coins" margin="0 0.75rem 0 0" />
                Clearance
              </a>
            </SideBarItem>
            <SideBarItem>
              <a href="#">
                <FaIcon className="fas fa-undo" margin="0 0.75rem 0 0" />
                Rollback
              </a>
            </SideBarItem>
            <SideBarItem>
              <a href="#">
                <FaIcon className="fab fa-playstation" margin="0 0.75rem 0 0" />
                Popular Toys
              </a>
            </SideBarItem>
            <SideBarItem>
              <a href="#">
                <FaIcon className="fas fa-shopping-cart" margin="0 0.75rem 0 0" />
                Orders
              </a>
            </SideBarItem>
            <SideBarItem>
              <a href="#">
                <FaIcon className="fas fa-search-location" margin="0 0.75rem 0 0" />
                Store Locations
              </a>
            </SideBarItem>
            <SideBarItem>
              <a href="#">
                <FaIcon className="fas fa-envelope-open-text" margin="0 0.75rem 0 0" />
                Subscribe to Emails
              </a>
            </SideBarItem>
            <SideBarItem>
              <a href="#">
                <FaIcon className="fas fa-address-card" margin="0 0.75rem 0 0" />
                Contact Us
              </a>
            </SideBarItem>
            <SideBarItem>
              <a href="#">
                <FaIcon className="fas fa-info-circle" margin="0 0.75rem 0 0" />
                About Us
              </a>
            </SideBarItem>
          </SideBarItems>
        </SideBarStyles>
      </>
    );
  }
  return null;
}

export default SideBar;
