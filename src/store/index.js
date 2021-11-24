import { createStore, combineReducers, applyMiddleware } from "redux"
import { counterReducer } from './counterReducer'
import { customerReducer } from './customerReducer'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    counter: counterReducer,
    customer: customerReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

