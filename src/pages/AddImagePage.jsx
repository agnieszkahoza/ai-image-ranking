import { Button } from "@mui/material";
import React, { useState } from "react";

function AddAiPage({handleNewImage}) {
  const [title, setTitle] = useState("");
  const [URL, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your new image has been added: ${title}`);
    handleNewImage (Math.floor(Math.random(10,1000)), title, URL)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Image title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL"
        value={URL}
        onChange={(e) => setImg(e.target.value)}
      />
      <Button variant="contained" type="submit">Add new image</Button>
    </form>
  );
}

export default AddAiPage;