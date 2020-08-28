export default (state = [], action) => {
  console.log(action)
  console.log(state)
  switch(action.type){
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    //   {
    //     text: action.text,
    //     completed: false
    //   }
    
    

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId) 
      
    case 'UPVOTE_QUOTE':
     return state.map(quote => quote.id === action.quoteId ? {...quote, votes: quote.votes + 1}  : quote)

    case 'DOWNVOTE_QUOTE':
     return state.map(quote => quote.id === action.quoteId ? {...quote, votes: quote.votes === 0 ? quote.votes : quote.votes - 1}  : quote)

  default:
  return state};
}


// The quotes reducer should have an initial state of:

// ```javascript
// []
// ```  [x]


// export default function manageTodo(state = {
//   todos: [],
// }, action) {
//   switch (action.type) {
//     case 'ADD_TODO':

//       return { todos: state.todos.concat(action.payload.text) };

//     default:
//       return state;
//   }
// }