export default (state = [], action) => {
  switch (action.type){
    case "ADD_QUOTE":
      state.push(action.payload)
      return state;
    case "REMOVE_QUOTE":
      
      return state.filter(quote => quote.id !== action.payload);
    default:
      return state;
  }
}
