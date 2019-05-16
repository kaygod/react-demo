
import { get,dataResolve } from "../../../util/common";

export const initailState={

   hotkeyword:{
       isFetching:1,
       list:[]
   },
   history:[],
   fuzzysearch:{
    lastsearchcontent:null
   },
   keyword:"",
}

export const types={
    "SEARCH/REQUETTING":"search/requestting",
    "SEARCH/REQUEST_SUCCESS":"search/request_success",
    "SEARCH/REQUEST_FAIL":"search/request_fail",
    "SEARCH/GET_HISTORY":"search/get_history",
    "SEARCH/UPDATE_TEXT":"search/update_text",
    "SEARCH/GET_SEARCH_CONTENT":"search/get_search_content",
    "SEARCH/ADD_HISTORY_KEYWORD":"search/add_history_keyword",
    "SEARCH/CLEAR_HISTORY_KEYWORD":"search/clear_history_keyword",
    "SEARCH/CLEAR_INPUT_TEXT":"search/clear_input_text"
}

export const actions={

  loadHotKeys(){
      return (dispatch,getState)=>{
         
          let params={
              url:"/data/hotkeyword.json",
              types:[types["SEARCH/REQUETTING"],types["SEARCH/REQUEST_SUCCESS"],types["SEARCH/REQUEST_FAIL"]]
          }
          
          dispatch(dataResolve(params));

      }
  },
  loadHistory(){
      return (dispatch,getState)=>{
         
        let data=localStorage.getItem("search");

        if(data){
           data=JSON.parse(data);
        }

        dispatch(historyActionType(data))

      }
  },
  updateKeyword(text){
      return (dispatch,getState)=>{
          dispatch(updateInput(text));
      }
  },
  getSearchContent(){

     return (dispatch,getState)=>{
        
        let keyword=getInputText(getState());

        if(keyword.startsWith("西")){

            get({url:"/data/watermelon.json"}).then((res)=>{
                 dispatch(searchActionType(res,keyword));
            })

        }else if(keyword.startsWith("苹")){

           get({url:"/data/apple.json"}).then((res)=>{
                dispatch(searchActionType(res,keyword));
           })

        }else if(keyword.startsWith("梨")){

           get({url:"/data/pear.json"}).then((res)=>{
                dispatch(searchActionType(res,keyword));
           })

        }else if(keyword===""){
            //dispatch(searchActionType(null,keyword));
        }else{

           get({url:"/data/other.json"}).then((res)=>{
                dispatch(searchActionType(res,keyword));
           })

        }

     }

  },
  clearHistory(){
      return (dispatch,getState)=>{
        
        localStorage.removeItem("search");
        dispatch(clearHistory());  

      }
  },
  addHistoryKeyword(kw){
      return (dispatch,getState)=>{
        if(!kw){      
          kw=getInputText(getState())
        }  
        dispatch(addHistoryKeyword(kw));

      }
  },
  clearInput(){
    return (dispatch,getState)=>{
      dispatch(clearInputType())
    }
  }

}



const updateInput=(text)=>{
    return {
        type:types["SEARCH/UPDATE_TEXT"],
        value:text
    }
}

const clearInputType=()=>{
  return {
    type:types["SEARCH/CLEAR_INPUT_TEXT"]
  }
}

const historyActionType=(data)=>{
  if(!data){
     data=[];
  }  
  return { 
    type:types["SEARCH/GET_HISTORY"],
    value:data 
  }
}

const searchActionType=(data,kw)=>{
    return {
        type:types["SEARCH/GET_SEARCH_CONTENT"],
        value:data,
        keyword:kw
    }
}

const clearHistory=()=>{
    return {
        type:types["SEARCH/CLEAR_HISTORY_KEYWORD"]
    }
}

const addHistoryKeyword=(kw)=>{
  return {
      type:types["SEARCH/ADD_HISTORY_KEYWORD"],
      value:{
          name:kw
      }
  }
}

export const getInputText=(store)=>{
    return store.search.keyword;
}

export const getHotKeys=(store)=>{
   return store.search.hotkeyword.list;
}

export const getHistoryKeys=(store)=>{
   return store.search.history;
}

export const getSearchContent=(store)=>{
    let content=store.search.fuzzysearch[getInputText(store)];
    let lastContent=store.search.fuzzysearch.lastsearchcontent;
    let keyword=getInputText(store);
    if(content){
      return content;
    }else if(keyword===""){
      return null;  
    }else if(content === undefined && lastContent){
      return lastContent;   
    }else{
      return null;  
    }
}
