import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import getTheme from "./theme";
import { useState, useMemo } from "react";
import { initialImages } from "./data/ImageData";

function App() {
  const [images, setImages] = useState(initialImages);
  const [tabValue, setTabValue] = useState(0);
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => getTheme(mode), [mode]);
  const handleModeToggle = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleUpvote = (imageId) => {
    setImages((prevImages) =>
      prevImages.map((image) =>
        image.id === imageId
          ? {
              ...image,
              upvotes: image.upvotes + 1,
            }
          : image
      )
    );
  };

  const handleDownvote = (imageId) => {
    setImages((prevImages) =>
      prevImages.map((image) =>
        image.id === imageId
          ? {
              ...image,
              downvotes: image.downvotes + 1,
            }
          : image
      )
    );
  };

  const handleNewImage = (newID, newTitle, newURL) => {
    setImages((prevImages) => [
      ...prevImages,
      {
        id: newID,
        title: newTitle,
        upvotes: 0,
        downvotes: 0,
        image: newURL,
      },
    ]);
  };

  const handleFavorite = (imageId) => {
    setImages((prevImages) =>
      prevImages.map((image) =>
        image.id === imageId
          ? {
              ...image,
              favorite: !image.favorite,
            }
          : image
      )
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <NavBar
          tabValue={tabValue}
          handleTabChange={handleTabChange}
          mode={mode}
          handleModeToggle={handleModeToggle}
        />
        <AppRoutes
          images={images}
          setImages={setImages}
          handleDownvote={handleDownvote}
          handleUpvote={handleUpvote}
          handleNewImage={handleNewImage}
          handleFavorite={handleFavorite}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
