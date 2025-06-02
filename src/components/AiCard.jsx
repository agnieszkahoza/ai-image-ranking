import { Button } from "@mui/material";

function AiCard ({ai, handleDownvote, handleUpvote}) {
    console.log("In Card: ", ai);
    
    const cardStyle = {
        backgroundImage: `url("${ai.image}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        minHeight: "200px",
    };

    return (
        <div className="ai-card" style={cardStyle}>
            <h3>{ai.title}</h3>
            <p>UP {ai.upvotes} | DOWN {ai.downvotes}</p>
            <div>
            <Button variant="contained" onClick={() => handleUpvote(ai.id)}>Upvote</Button>
            <Button variant="outlined" onClick={() => handleDownvote(ai.id)}>Downvote</Button>
            </div>
        </div>
    );
}

export default AiCard;
