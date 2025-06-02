import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HotPage from "../pages/HotPage";
import RegularPage from "../pages/RegularPage";
import AddImagePage from "../pages/AddImagePage";

function AppRoutes({images, handleDownvote, handleUpvote, handleNewImage, handleFavorite}) {
    console.log(images);
    
    return (
        <Routes>            
            <Route path="/hot" element={<HotPage  images={images} handleDownvote={handleDownvote} handleUpvote={handleUpvote} handleFavorite={handleFavorite}/>} />
            <Route path="/regular" element={<RegularPage images={images} handleDownvote={handleDownvote} handleUpvote={handleUpvote} handleFavorite={handleFavorite}/>} />
            <Route path="/add" element={<AddImagePage handleNewImage={handleNewImage} />} />
            <Route path="*" element={<Navigate to="/regular" />} />
        </Routes>
    )
}

export default AppRoutes;