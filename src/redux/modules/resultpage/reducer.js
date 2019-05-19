import {types} from "./actions";

const initialState={
  list:[],
  isFetching:1
}

export default (state=initialState,action)=>{

    switch(action.type){
      
     case types["RESULT/REQUESTTING"]:

     return {...state,isFetching:2};

     case types["RESULT/REQUEST_SUCCESS"]:

     return {...state,isFetching:3,list:action.response};

     case types["RESULT/REQUEST_FAIL"]:

     return {...state,isFetching:0};

     default:

       return state;

    }

}