import { get,dataResolve } from "../../../util/common";

export const types={
    "HOMEPAGE/LIKES_REQUESTTING":"likes_requestting",
    "HOMEPAGE/LIKES_REQUEST_SUCCESS":"likes_reuqest_success",
    "HOMEPAGE/LIKES_REQUEST_FAIL":"likes_request_fail",
    "HOMEPAGE/RECOM_REQUESTTING":"recom_requestting",
    "HOMEPAGE/RECOM_REQUEST_SUCCESS":"recom_request_success",
    "HOMEPAGE/RECOM_REQUEST_FAIL":"recom_request_fail"
}

export const initialState={
   likes:{
    likesIsFetching:1, //0 请求失败 1没有请求 2 请求中  3请求成功
    likes:[] 
   },
   recoms:{
    recomIsFetching:1,
    recommends:[]
   }
}

export const getLikes=(store)=>{
  return store.home.likes_name.likes;
}

export const getRecommends=(store)=>{
  return store.home.recoms_name.recommends;
}

export const getLoading=(store)=>{
     
    if(store.home.likes_name.likesIsFetching==2 || store.home.recoms_name.recomIsFetching==2){
       return true;
    }else{
       return false; 
    }
    
}

export const actions={
  loadLikes:()=>{
    
    return (dispatch,getState)=>{

        let params={
            url:"/data/likes.json",
            types:[
                types["HOMEPAGE/LIKES_REQUESTTING"],
                types["HOMEPAGE/LIKES_REQUEST_SUCCESS"],
                types["HOMEPAGE/LIKES_REQUEST_FAIL"]
            ]
        }

        dispatch(dataResolve(params));
   
    }

  },
  loadRecommends:()=>{

    return (dispatch,getState)=>{

        let params={
            url:"/data/recommends.json",
            types:[
                types["HOMEPAGE/RECOM_REQUESTTING"],
                types["HOMEPAGE/RECOM_REQUEST_SUCCESS"],
                types["HOMEPAGE/RECOM_REQUEST_FAIL"]
            ]
        }

        dispatch(dataResolve(params));

    }

  }     

}
