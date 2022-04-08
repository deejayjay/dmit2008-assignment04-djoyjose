import styled from "styled-components";

const EditorFeedBackStyles = styled.aside`
  grid-column: 1 / -1;
  width: 80%;
  margin: 4rem auto 0;
  text-align: center;
`;

const FeedBackMessage = styled.figcaption`
  font-size: 1.75rem;
  font-weight: 600;
  color: #a3e635;
`;

const FeedBack = styled.figure``;

const FeedBackOptions = styled.footer`
  margin-top: 1.5rem;

  button {
    margin: 0.25rem;
    width: fit-content;

    &:hover {
      cursor: pointer;
    }
    &.btn-add-another:hover {
      background-color: rgba(100, 166, 78, 0.9);
    }
    &.btn-view-all:hover {
      background-color: #808080bd;
    }
  }
`;

export { EditorFeedBackStyles, FeedBackMessage, FeedBack, FeedBackOptions };
