import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from "./components/header";
import HotKey from "./components/hotKey";
import SearchHistory from "./components/searchHistory";
import { bindActionCreators } from 'redux';
import { actions as searchAction,getInputText,getHotKeys,getHistoryKeys,getSearchContent } from "../../redux/modules/searchpage/actions";


class Searchpage extends Component {

    constructor(props){
        
        super(props);
        
        this.timer=null;

        this.isRequesting=false;

    }    

    componentDidMount(){
        
        const { searchAction } = this.props;
        
        searchAction.loadHotKeys();

        searchAction.loadHistory();

    }

    updateContent=(text)=>{ //等输入完等待500ms才执行ajax操作

        text=text.trim();

        const { searchAction } = this.props;

        searchAction.updateKeyword(text);

        if(this.isRequesting){ 
            clearTimeout(this.timer);
            this.timer=null;
            this.isRequesting=false;
            this.updateContent(text);
            return false;
        }

        this.isRequesting=true;
    
        this.timer=setTimeout(()=>{
         clearTimeout(this.timer);
         this.timer=null;
         searchAction.getSearchContent();
        },500)
   
      
    }

    clear=()=>{
        const { searchAction } = this.props;
        searchAction.clearHistory();
    }

    jump=(kw)=>{
        if(!kw){
          kw=this.props.keyword;
        } 
        if(kw===""){
          return false;
        }
        let arr=[...this.props.historyKeys];
        let flag=arr.find((item)=>{
          return item.name==kw;
        })
        if(!flag){
            arr.unshift({name:kw});
            localStorage.setItem("search",JSON.stringify(arr));
            this.props.searchAction.addHistoryKeyword(kw);
        }
        this.props.history.push(`/resultpage/${kw}`);
    }

    close=()=>{
        const { searchAction } = this.props;
        searchAction.clearInput();
    }

    render() {
        const { historyKeys,hotKeys,searchContent,keyword} = this.props;
        return (
            <div className="search">
                <Header updateContent={this.updateContent} close={this.close} searchContent={searchContent} jump={this.jump} keyword={keyword}/>
                <HotKey hotKeys={hotKeys} jump={this.jump} />
                {historyKeys.length>0?<SearchHistory jump={this.jump} clear={this.clear} historyKeys={historyKeys} />:null}          
            </div>
        )
    }

}




const mapStateToProps=(store)=>{
    return {
       keyword:getInputText(store),
       hotKeys:getHotKeys(store),
       historyKeys:getHistoryKeys(store),
       searchContent:getSearchContent(store)
    }
}


const mapDispatchToProps = (dispatch)=>{
 
    return {
      searchAction:bindActionCreators(searchAction,dispatch)
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Searchpage);

