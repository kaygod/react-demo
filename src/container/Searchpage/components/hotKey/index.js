import React,{Component} from "react";
import "./style.scss";

export default class HotKey extends Component{

   
    render(){
        
        const { hotKeys } =this.props;

        return (
            <div className="hot-key">
                 <p className="title">热门词汇</p>
                 <div className="container">
                    {
                        hotKeys.map((item,index)=>(
                            <span key={index} onClick={()=>{this.props.jump(item.name)}}>{item.name}</span>
                        ))
                    }
                 </div>
            </div>
        )

    }


}