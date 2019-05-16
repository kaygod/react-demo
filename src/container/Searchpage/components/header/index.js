import React,{Component} from "react";

import "./style.scss";

export default class Header extends Component {


     render(){
         
        const { searchContent,keyword } = this.props;

         return (
             <div className="search-header">
                <div className="top">

                    <div className="back">返回</div>
                    <div className="center">
                        <input type="text" onChange={this.setInput} value={keyword}/>
                        {keyword.length>0 && <span className="close" onClick={this.props.close}>x</span> } 
                    </div>
                    <div className="search" onClick={()=>{this.props.jump(false)}}>Go</div>

                </div>
                
               { searchContent && this.renderSearchResult() }
               
             </div>
         )
     }

     setInput=(e)=>{
       this.props.updateContent(e.target.value);
     }

     renderSearchResult(){

        const { searchContent } = this.props;

        return (
            <div className="bottom">
                <ul>
                    {
                        searchContent.map((item,index)=>(

                            <li className="item box" key={index}>
                                <div className="lt">{item.name}</div>
                                <div className="gt">{item.number}</div>
                           </li>

                        ))
                    }                 
                </ul>    
            </div>
        )
     
    }

}