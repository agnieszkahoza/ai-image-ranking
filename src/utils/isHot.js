export function isHot(ai) {
    console.log("Image, ",ai.title, "has ", ai.upvotes, "and ", ai.downvotes, " which means its score is: ", ai.upvotes - ai.downvotes, "so it's status as hot is:", ai.upvotes - ai.dowvotes > 10);
    
    return ai.upvotes - ai.downvotes > 10;
}