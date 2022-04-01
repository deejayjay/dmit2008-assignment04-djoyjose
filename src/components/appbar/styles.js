import styled from "styled-components";

const AppBarStyles = styled.header`
  background-color: #fff;
  box-shadow: 0 0 10px 0 #5a5a5a;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
`;

const AppBarWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const AppBarBrand = styled.div`
  margin-bottom: 0.5rem;

  a {
    display: flex;

    &:hover {
      text-decoration: none;
    }
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const BrandName = styled.h1`
  font-size: 0;

  span {
    font-size: 1.875rem;
    font-weight: 700;
    font-family: Roboto, sans-serif;
  }

  span:first-of-type {
    color: #ff635c;
  }

  span:nth-of-type(2) {
    color: #64a64e;
  }

  span:last-of-type {
    color: #4992ec;
  }
`;

const AppBarIconGroup = styled.nav`
  color: #5a5a5a;
`;

const AppBarIcons = styled.ul`
  display: flex;
  align-items: center;

  li {
    margin-right: 1.5rem;

    &.toggle-menu {
      margin-right: auto;

      &:hover {
        cursor: pointer;
      }

      @media only screen and (min-width: 768px) {
        display: none;
      }
    }
  }

  li:last-of-type {
    margin-right: 0;
  }
`;

export { AppBarStyles, AppBarWrapper, AppBarBrand, BrandName, AppBarIconGroup, AppBarIcons };
