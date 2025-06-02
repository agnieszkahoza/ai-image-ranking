import React from "react";
import AiList from "../components/AiList";
import { isHot } from "../utils/isHot";


function RegularPage({images, handleUpvote, handleDownvote, handleFavorite}) {
  console.log("In Regular Page:", images);
  

  return <AiList ai={images.filter((ai) => !isHot(ai))} handleDownvote={handleDownvote} handleUpvote={handleUpvote} handleFavorite={handleFavorite}/>;
}

export default RegularPage;