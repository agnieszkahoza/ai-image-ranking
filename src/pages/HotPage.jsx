import React from "react";
import ImagesList from "./ImagesList";

function HotPage(props) {
  return <ImagesList {...props} showHotOnly={true} />;
}

export default HotPage;