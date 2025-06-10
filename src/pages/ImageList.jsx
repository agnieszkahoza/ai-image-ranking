import React from "react";
import AiList from "../components/AiList";
import { isHot } from "../utils/isHot";

function ImageList({
  images,
  showHotOnly,
  handleUpvote,
  handleDownvote,
  handleFavorite,
}) {
  const filteredImages = images.filter((img) =>
    showHotOnly ? isHot(img) : !isHot(img)
  );

  if (filteredImages.length === 0) {
    return <p>{showHotOnly ? "No hot images" : "No regular images"}</p>;
  }

  return (
    <AiList
      ai={filteredImages}
      handleUpvote={handleUpvote}
      handleDownvote={handleDownvote}
      handleFavorite={handleFavorite}
    />
  );
}

export default ImageList;
