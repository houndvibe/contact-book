import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import contactsReducer from "../store/reducers/contactsReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const initialState = {}


export const store = createStore(combineReducers({
  contacts: contactsReducer,
}), initialState, composeEnhancers(applyMiddleware(thunk)));
