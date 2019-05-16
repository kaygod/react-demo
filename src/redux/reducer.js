import { combineReducers } from "redux";
import home from "./modules/homepage/reducer";
import search  from "./modules/searchpage/reducer";
import detail from "./modules/detailpage/reducer";
import login from "./modules/loginpage/reducer";
import result from "./modules/resultpage/reducer";

export default combineReducers({
    home,
    search,
    detail,
    login,
    result
})