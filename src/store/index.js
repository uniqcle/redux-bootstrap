import { createStore, combineReducers } from "redux"
import { counterReducer } from './counterReducer'
import { customerReducer } from './customerReducer'
import { composeWithDevTools } from "redux-devtools-extension";


const rootReducer = combineReducers({
    counter: counterReducer,
    customer: customerReducer
})

export const store = createStore(rootReducer, composeWithDevTools());

