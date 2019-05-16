import {types,initailState} from "./actions";
import { combineReducers } from "redux";

const hotkeyword = (state=initailState.hotkeyword,action)=>{

    switch(action.type){

      case types["SEARCH/REQUETTING"]:

        return {...state,isFetching:2};
      
      case types["SEARCH/REQUEST_SUCCESS"]:
      
        return {...state,isFetching:3,list:action.response};

      case types["SEARCH/REQUEST_FAIL"]:
      
        return {...state,isFetching:0}
      

      default:return state;

    }

}

const history = (state=initailState.history,action)=>{

    switch(action.type){
      
      case types["SEARCH/GET_HISTORY"]:

      return action.value;

      case types["SEARCH/ADD_HISTORY_KEYWORD"]:

       
      return [action.value,...state];


      case types["SEARCH/CLEAR_HISTORY_KEYWORD"]:

      return [];

      default:return state;

    }

}

const fuzzysearch = (state=initailState.fuzzysearch,action)=>{

    switch(action.type){
      
      case types["SEARCH/GET_SEARCH_CONTENT"]:

         return {...state,[action.keyword]:action.value,lastsearchcontent:action.value};
    
      default:return state;

    }

}

const keyword = (state=initailState.keyword,action)=>{

    switch(action.type){
      
      case types["SEARCH/UPDATE_TEXT"]:

      return action.value;

      case types["SEARCH/CLEAR_INPUT_TEXT"]:

      return "";

      default:return state;

    }

}

export default combineReducers({
    hotkeyword,
    history,
    fuzzysearch,
    keyword
})