import { Button, TextField, Stack, Box, Snackbar, Alert } from "@mui/material";
import React, { useState } from "react";

function AddAiPage({handleNewImage}) {
  const [title, setTitle] = useState("");
  const [URL, setImg] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewImage(Math.floor(Math.random() * 1000), title, URL);
    setOpenSnackbar(true);
    setTitle("");
    setImg("");
  };

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
     <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ 
        width: "80%", 
        mx: "auto", 
        mt: 6, 
        p: 3, 
        boxShadow: 3, 
        borderRadius: 2, 
        backgroundColor: "background.paper" 
      }}
    >
      <Stack spacing={2}>
        <TextField
          label="Image Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Image URL"
          variant="outlined"
          fullWidth
          value={URL}
          onChange={(e) => setImg(e.target.value)}
        />
        <Button variant="contained" type="submit" fullWidth>
          Add New Image
        </Button>
      </Stack>
    </Box>

    <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Your new image has been added: {title}
        </Alert>
      </Snackbar>
      </>
  );
}

export default AddAiPage;