import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AddImagePage from "../pages/AddImagePage";
import ImageList from "../pages/ImageList";

function AppRoutes({
  images,
  handleDownvote,
  handleUpvote,
  handleNewImage,
  handleFavorite,
}) {
  return (
    <Routes>
      <Route
        path="/hot"
        element={
          <ImageList
            showHotOnly={true}
            images={images}
            handleDownvote={handleDownvote}
            handleUpvote={handleUpvote}
            handleFavorite={handleFavorite}
          />
        }
      />
      <Route
        path="/regular"
        element={
          <ImageList
            showHotOnly={false}
            images={images}
            handleDownvote={handleDownvote}
            handleUpvote={handleUpvote}
            handleFavorite={handleFavorite}
          />
        }
      />
      <Route
        path="/add"
        element={<AddImagePage handleNewImage={handleNewImage} />}
      />
      <Route path="*" element={<Navigate to="/regular" />} />
    </Routes>
  );
}

export default AppRoutes;