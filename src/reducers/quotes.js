const ADD_QUOTE = "ADD_QUOTE"
const REMOVE_QUOTE = "REMOVE_QUOTE"
const UPVOTE_QUOTE = "UPVOTE_QUOTE"
const DOWNVOTE_QUOTE = "DOWNVOTE_QUOTE"

export default (state = [], action) => {
  let idx;
  switch(action.type) {
    case ADD_QUOTE:
      return [
        ...state,
        {
          id: action.quote.id,
          content: action.quote.content,
          author: action.quote.author,
          votes: action.quote.votes 
        }
      ]

    case REMOVE_QUOTE:
      idx = state.indexOf( state.find( (quote) => quote.id === action.id ) ) 
      return state.splice(idx, 1)
    
    case UPVOTE_QUOTE:
      idx = state.indexOf( state.find( quote => quote.id === action.quoteId ) )
      state[idx].votes++
      return state

    case DOWNVOTE_QUOTE:
      idx = state.indexOf( state.find( quote => quote.id === action.quoteId ) )
      if (state[idx].votes !== 0)
        state[idx].votes--
      return state

    default:
      return state
  }
}
