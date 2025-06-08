import React from "react";
import ImagesList from "./ImagesList";

function RegularPage(props) {
  return <ImagesList {...props} showHotOnly={false} />;
}

export default RegularPage;