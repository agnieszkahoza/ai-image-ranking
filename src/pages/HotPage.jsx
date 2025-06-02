import React from "react";
import AiList from "../components/AiList";
import { isHot } from "../utils/isHot";


function HotPage({images, handleUpvote, handleDownvote}) {

  return images.length > 0 ? <AiList ai={images.filter((ai) => isHot(ai))} handleDownvote={handleDownvote} handleUpvote={handleUpvote} />: <p>No hot images</p>;

}

export default HotPage;