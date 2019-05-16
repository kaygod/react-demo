import "./style.scss";

import React, { Component } from 'react';

export default class Header extends Component {

    static defaultProps={
        title:"公共头部",
        goBack:true,
        goSearch:false
    }
    
    goBack=()=>{
        this.props.history.goBack();
    }

    goSearchPage=()=>{
       this.props.history.push("/search");
    }

    render() {
        
        const {title,goBack,goSearch} = this.props;

        return (
            <div className="header">
                {
                    goBack?(<div className="back" onClick={this.goBack}>Back</div>):null
                }        
                 <div className="content">
                   {title}
                 </div>
                 {
                     goSearch?(<div className="search" onClick={this.goSearchPage}>搜索</div>):null
                 }     
            </div>    
        );
    }
}