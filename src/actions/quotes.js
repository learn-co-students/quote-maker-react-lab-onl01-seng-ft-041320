// TODO: Create action creators as defined in tests
export function addQuote(quote){
    return {type: "ADD_QUOTE", quote: quote}
}
export function removeQuote(quoteID){
    return {type: "REMOVE_QUOTE", quoteId: quoteID}
}
export function upvoteQuote(quoteID){
    return {type: "UPVOTE_QUOTE", quoteId: quoteID}
}
export function downvoteQuote(quoteID){
    return {type: "DOWNVOTE_QUOTE", quoteId: quoteID}
}