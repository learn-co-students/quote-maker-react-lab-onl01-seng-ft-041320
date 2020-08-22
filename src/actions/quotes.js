// TODO: Create action creators as defined in tests
console.log("5/6");
export const addQuote = (quote) => {
    console.log("7");
    return {
      type: 'ADD_QUOTE',
      quote  
    };
  };
  
  export const removeQuote = (quoteId) => {
    return {
      type: 'REMOVE_QUOTE',
      quoteId  
    };
  };
  
  export const upvoteQuote = (quoteId) => {
    return {
      type: 'UPVOTE_QUOTE',
      quoteId
    };
  };
  
  export const downvoteQuote = (quoteId) => {
    return {
      type: 'DOWNVOTE_QUOTE',
      quoteId
    };
  };