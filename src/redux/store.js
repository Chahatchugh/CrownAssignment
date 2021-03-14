import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../redux/reducers';
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

// Middleware used for redux flow ---> Promis and Thunk
const middleware = applyMiddleware(promise, thunk);  

// rootReducer is combineReducer here given to create reducer
export default createStore(rootReducer, middleware);