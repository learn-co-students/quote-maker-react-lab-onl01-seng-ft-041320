// TODO: Create action creators as defined in tests
export const addQuote = (payload) => {
  return {type: "ADD_QUOTE", quote: payload}
}

export const removeQuote = (payload) => {
  return {type: "REMOVE_QUOTE", quoteId: payload}
}

export const upvoteQuote = payload => {
  return {type: "UPVOTE_QUOTE", quoteId: payload}
}

export const downvoteQuote = payload => {
  return {type: "DOWNVOTE_QUOTE", quoteId: payload}
}