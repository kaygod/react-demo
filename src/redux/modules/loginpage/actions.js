import { dataResolve } from "../../../util/common";
export const types={
    "LOGIN/REQUESTTING":"login/requestting",
    "LOGIN/REQUEST_SUCCESS":"login/request_success",
    "LOGIN/REQUEST_FAIL":"login/request_fail",
    "LOGINOUT/REQUESTTING":"loginout/requestting",
    "LOGINOUT/REQUEST_SUCCESS":"loginout/request_success",
    "LOGINOUT/REQUEST_FAIL":"loginout/request_fail",
    "LOGIN/UPDATE_USERNAME":"login/update_usernam",
    "LOGIN/UPDATE_PASSWORD":"login/update_password",
    "LOGIN/RESET_IS_FETCHING":"login/reset_is_fetching",
    "LOGIN/UPDATE_LOGIN_STATUS":"login/update_login/status"
}

export const actions = {

  login(){
     return (dispatch,getState)=>{
        let params={
            url:"/data/login.json",
            types:[types["LOGIN/REQUESTTING"],types["LOGIN/REQUEST_SUCCESS"],types["LOGINOUT/REQUEST_FAIL"]]
        }
        dispatch(dataResolve(params));
    }
  },
  loginOut(){
    return (dispatch,getState)=>{
       let params={
           url:"/data/login.json",
           types:[types["LOGINOUT/REQUESTTING"],types["LOGINOUT/REQUEST_SUCCESS"],types["LOGINOUT/REQUEST_FAIL"]]
       }
       dispatch(dataResolve(params));
    }
  },
  updateUsername(username){
    return (dispatch,getState)=>{
       
        dispatch(userActionType(username));

    }
  },
  updatePassword(password){
    return (dispatch,getState)=>{
     
       dispatch(passwordActionType(password));

    }
  },
  resetIsFetching(){

     return (dispatch,getState)=>{
       
         dispatch(resetIsFetchingActionType());

     }

  },
  updateLoginStatus(){
     
    return (dispatch,getState)=>{
       
        dispatch(updateLoginStatusActionType());

    }

  }


}

const userActionType=(v)=>{
    return {
        type:types["LOGIN/UPDATE_USERNAME"],
        value:v
    }
}

const passwordActionType=(v)=>{
   return {
       type:types["LOGIN/UPDATE_PASSWORD"],
       value:v
   }
}

const resetIsFetchingActionType=()=>{
    return {
        type:types["LOGIN/RESET_IS_FETCHING"]
    }
}

const updateLoginStatusActionType=()=>{
    return {
        type:types["LOGIN/UPDATE_LOGIN_STATUS"]
    }
}

export const getUsername=(store)=>{
   
   return store.login.username;

}

export const getPassword=(store)=>{
  
    return store.login.password;

}

export const getLoginState=(store)=>{
    return store.login.loginState;
}

export const getFlag=(store)=>{
    if(store.login.isFetching == 2){
        return true;
    }else{
        return false;
    }
}