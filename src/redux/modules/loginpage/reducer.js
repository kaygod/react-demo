
import {types} from "./actions";

const initailState={
    username:"",
    password:"",
    isFetching:1,
    loginState:0 //0未登录 1已登陆
}

export default (state=initailState,action)=>{
  
  switch(action.type){
   
     case types["LOGIN/REQUESTTING"]:

        return {...state,isFetching:2};
     
     case types["LOGIN/REQUEST_SUCCESS"]:
        
        storeStatus();
         
        return {...state,isFetching:3,loginState:1,username:"",password:""};
     
     case types["LOGIN/REQUEST_FAIL"]:
         
        return {...state,isFetching:0};

     case types["LOGINOUT/REQUESTTING"]:
         
        return {...state,isFetching:2};

     case types["LOGINOUT/REQUEST_SUCCESS"]:

         removeStatus();
         
        return {...state,isFetching:3,loginState:0};

     case types["LOGINOUT/REQUEST_FAIL"]:
         
        return {...state,isFetching:0};
        
     case types["LOGIN/UPDATE_USERNAME"]:
         
        return {...state,username:action.value};
     
     case types["LOGIN/UPDATE_PASSWORD"]:
     
        return {...state,password:action.value};
     
     case types["LOGIN/RESET_IS_FETCHING"]:

        return {...state,isFetching:1};

     case types["LOGIN/UPDATE_LOGIN_STATUS"]:
        
        return {...state,loginState:1};

     default:
         
        return state;

  }

}

const storeStatus=()=>{
   localStorage.setItem("loginStatus",1);
}

const removeStatus=()=>{
   localStorage.removeItem("loginStatus");
}