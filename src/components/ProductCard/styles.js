import styled from "styled-components";

const ProductCardStyles = styled.div`
  width: 100%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 1.5rem;
  font-family: "Open Sans", sans-serif;
  color: #5a5a5a;
  position: relative;
  background-color: #efefef;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  & > i {
    position: absolute;
    visibility: hidden;
  }

  &:hover > i {
    visibility: visible;

    &:hover {
      cursor: pointer;
    }
  }
`;

const ProductCardPrice = styled.p`
  font-size: 2.25rem;
  font-weight: 700;
  text-align: right;
`;

const ProductCardImage = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 230px;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  }
`;

const ProductCardName = styled.h2`
  margin-top: 1rem;
`;

const ProductCardAgeGroup = styled.p`
  font-size: 1.125rem;
`;

const ProductCardDescription = styled.p`
  font-size: 0.875rem;
  margin-top: 1rem;
`;

export { ProductCardStyles, ProductCardPrice, ProductCardName, ProductCardAgeGroup, ProductCardDescription, ProductCardImage };
