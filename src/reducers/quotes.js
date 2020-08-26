export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id != action.quoteId)
    // case 'UPDATE_QUOTE':
    //   skipping for now
    // case 'DOWNVOTE_QUOTE':
    // skipping for now

    default:
      return state;
  }
}