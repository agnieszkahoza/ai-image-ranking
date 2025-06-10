import { Button, Card, CardActions, CardHeader, CardMedia, IconButton } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function AiCard ({ai, handleDownvote, handleUpvote, handleFavorite}) {

    return (
        <Card variant="elevation" elevation={6} sx={{ display: "inline-block", mx: "auto" }}>
            <CardHeader
            titleTypographyProps={{ variant: "h6" }}
            title={ai.title}
            action={<IconButton color="primary" onClick={() => handleFavorite(ai.id)}>{ai.favorite ? <StarIcon/> : <StarBorderIcon/>}</IconButton>}
            />
            <CardMedia
            component="img"
            height="400"
            image={ai.image}
            alt={ai.title}
            />
            <CardActions>
            <Button variant="contained" onClick={() => handleUpvote(ai.id)}>UP {ai.upvotes} </Button>
            <Button variant="outlined" onClick={() => handleDownvote(ai.id)}>DOWN {ai.downvotes}</Button>
            </CardActions>
        </Card>
    );
}

export default AiCard;
