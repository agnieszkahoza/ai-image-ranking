import { Box } from "@mui/material";
import AiCard from "./AiCard";

function AiList({ ai, handleUpvote, handleDownvote, handleFavorite}) {
  
  return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "center",
        mt: 6,
      }}>
      {ai.map((ai) => (
        <AiCard key={ai.id} ai={ai} handleUpvote={handleUpvote} handleDownvote={handleDownvote} handleFavorite={handleFavorite}/>
      ))}
    </Box>
  );
}

export default AiList;
