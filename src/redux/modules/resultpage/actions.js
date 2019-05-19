
import { get,dataResolve } from "../../../util/common";

export const types={
    "RESULT/REQUESTTING":"result/requestting",
    "RESULT/REQUEST_SUCCESS":"result/request_success",
    "RESULT/REQUEST_FAIL":"result/request_fail"
}

export const actions ={
 
    loadData(){
        return (dispatch,getState)=>{
            
           let params={
               url:"/data/other.json",
               types:[types["RESULT/REQUESTTING"],types["RESULT/REQUEST_SUCCESS"],types["RESULT/REQUEST_FAIL"]]
           }

           dispatch(dataResolve(params));

        }
    }

}

export const getList=(store)=>{

  return store.result.list;

}

export const getFlag=(store)=>{
   
    let isFetching=store.result.isFetching;

    if(isFetching==2){
      return true;
    }else{
       return false;
    }

}