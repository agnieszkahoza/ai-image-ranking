import AiCard from "./AiCard";

function AiList({ ai, handleUpvote, handleDownvote, handleFavorite}) {
  

  return (
    <div className="ai-list">
      {ai.map((ai) => (
        <AiCard key={ai.id} ai={ai} handleUpvote={handleUpvote} handleDownvote={handleDownvote} handleFavorite={handleFavorite}/>
      ))}
    </div>
  );
}

export default AiList;
