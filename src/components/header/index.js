import "./style.scss";

import React, { Component } from 'react';

export default class Header extends Component {

    static defaultProps={
        title:"公共头部",
        goBack:true
    }
    
    goBack=()=>{
        this.props.history.goBack();
    }

    render() {
        
        const {title,goBack} = this.props;

        return (
            <div className="header">
                {
                    goBack?(<div className="back" onClick={this.goBack}>Back</div>):null
                }        
                 <div className="content">
                   {title}
                 </div>
            </div>    
        );
    }
}