import React from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineCloudUpload, AiOutlineCheckCircle } from "react-icons/ai";
import { Button } from "ui/buttons";

import { EditorFeedBackStyles, FeedBack, FeedBackMessage, FeedBackOptions } from "./styles";

function EditorFeedBack({ children, uploadStatus, writeCompleted, ...props }) {
  const navigator = useNavigate();

  return (
    <EditorFeedBackStyles {...props}>
      {!uploadStatus ? (
        <FeedBack>
          <AiOutlineCheckCircle color="#d9f99d" size="12rem" />
          <FeedBackMessage>Product was Uploaded Successfully</FeedBackMessage>
        </FeedBack>
      ) : (
        <FeedBack>
          <AiOutlineCloudUpload color="#d9f99d" size="12rem" />
          <FeedBackMessage>Uploading New Product</FeedBackMessage>
        </FeedBack>
      )}

      <FeedBackOptions>
        <Button className="btn-add-another" bc="#64a64e" color="white" onClick={() => writeCompleted(false)} disabled={uploadStatus}>
          Add Another Product
        </Button>
        <Button className="btn-view-all" bc="grey" color="white" onClick={() => navigator("/dashboard")}>
          View All Products
        </Button>
      </FeedBackOptions>
    </EditorFeedBackStyles>
  );
}

export default EditorFeedBack;
