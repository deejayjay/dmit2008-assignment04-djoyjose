import styled from "styled-components";

const PanelStyles = styled.section`
  width: 100%;
  margin: 1rem;
`;

const PanelTitleBar = styled.div`
  margin-top: 1rem;
`;

const PanelTitle = styled.h2`
  color: #5a5a5a;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1;
  padding: 0 1rem;

  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0;
  }
`;

const PanelCardsContainer = styled.section`
  box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.3);
  margin-top: 1rem;
  padding: 1.5rem;
  border-radius: 5px;
  min-height: 40rem;
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  gap: 1.5rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 1452px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (min-width: 1600px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export { PanelStyles, PanelTitleBar, PanelTitle, PanelCardsContainer };
