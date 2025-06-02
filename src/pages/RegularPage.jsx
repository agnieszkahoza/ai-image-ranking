import React from "react";
import AiList from "../components/AiList";
import { isHot } from "../utils/isHot";


function RegularPage({images, handleUpvote, handleDownvote}) {
  console.log("In Regular Page:", images);
  

  return <AiList ai={images.filter((ai) => !isHot(ai))} handleDownvote={handleDownvote} handleUpvote={handleUpvote} />;
}

export default RegularPage;