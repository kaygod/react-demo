import React,{Component} from "react";
import "./style.scss";

export default class SearchHistory extends Component{

   
    render(){

        const { historyKeys } = this.props;

        return (
            <div className="search-history">
                 <p className="title">历史词汇<span className="clear" onClick={()=>{this.props.clear()}}>清除</span></p>
                 <div className="container box">
                    {
                       historyKeys.map((item,index)=>{
                           return <span key={index} onClick={()=>{this.props.jump(item.name)}}>{item.name}</span>;
                       }) 
                    }                  
                 </div>
            </div>
        )

        
    }


}