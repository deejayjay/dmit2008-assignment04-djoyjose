import styled from "styled-components";

const ProductDataEntryFormStyles = styled.form`
  width: 380px;

  input,
  textarea {
    border: 2px solid transparent;
    padding: 0.25rem 0.5rem;
  }

  input:focus,
  textarea:focus {
    border-color: cornflowerblue;
    background-color: #eff6ff;
    outline: none;
  }

  fieldset {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const ProductImage = styled.div``;

const ProductName = styled.div`
  flex: 3.5;
`;

const ProductPrice = styled.div`
  flex: 1.5;
`;

const ProductDescription = styled.div`
  textarea {
    resize: none;
    font-size: 0.875rem;
  }
`;

export { ProductDataEntryFormStyles, ProductImage, ProductName, ProductPrice, ProductDescription };
