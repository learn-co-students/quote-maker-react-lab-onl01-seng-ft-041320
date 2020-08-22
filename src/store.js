import { createStore } from 'redux'
import rootReducer from './reducers/index'
console.log("0");
export function configureStore(){
  return createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

export const store = configureStore()
