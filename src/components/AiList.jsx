import AiCard from "./AiCard";

function AiList({ ai, handleUpvote, handleDownvote }) {
  

  return (
    <div className="ai-list">
      {ai.map((ai) => (
        <AiCard key={ai.id} ai={ai} handleUpvote={handleUpvote} handleDownvote={handleDownvote} />
      ))}
    </div>
  );
}

export default AiList;
