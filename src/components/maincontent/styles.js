import styled from "styled-components";

const MainContentStyles = styled.main`
  flex: 1;
  margin-top: 102.5px;

  @media only screen and (min-width: 768px) {
    margin-top: 61px;
  }
`;

const MainContentWrapper = styled.section`
  display: flex;
  margin-top: 2rem;
  position: relative;
`;

export { MainContentStyles, MainContentWrapper };
