import thunkMiddleware from "redux-thunk";
import api from "./middleware/api"
import { compose,createStore,applyMiddleware } from "redux";
import rootReducer from "./reducer";
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunkMiddleware,api))); 

export default store;