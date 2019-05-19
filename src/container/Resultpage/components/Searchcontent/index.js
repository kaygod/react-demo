import React,{Component} from "react";

import "./style.scss";

export default class Searchcontent extends Component{

   render(){

      const {list} = this.props;

      return (
          <div className="searchContent">

             <ul className="wrapper">

               
                         
                <li className="box">
                    <div className="lt">名称:</div>
                    <div className="gt">{list.length>0 && list[0].name}</div>
                </li>

                <li className="box">
                    <div className="lt">数量:</div>
                    <div className="gt">{list.length>0 && list[0].number}</div>
                </li>

                <li className="box">
                    <div className="lt">产地:</div>
                    <div className="gt">{list.length>0 && list[0]["产地"]}</div>
                </li>

                     
                 
                
             </ul>

          </div>
      )

   }

}