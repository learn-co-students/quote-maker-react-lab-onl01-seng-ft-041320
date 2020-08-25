
export const addQuote = (quote) => {
    //? Is this because we want the key of quote equal to the quote object?
    //? is it the same as doing 'quote: quote'
    return {type: 'ADD_QUOTE', quote}
}

export const removeQuote = (quoteId) => {
    //? would we/should we do this as return {type: "REMOVE_QUOTE", payload: quoteId}
    return {type: 'REMOVE_QUOTE', quoteId}
}

export const upvoteQuote = (quoteId) => {
    return {type: "UPVOTE_QUOTE", quoteId}
}

export const downvoteQuote = (quoteId) => {
    return {type: "DOWNVOTE_QUOTE", quoteId}
}
