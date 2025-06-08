export function isHot(ai) {
    
    return ai.upvotes - ai.downvotes > 10;
}