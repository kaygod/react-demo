import React,{Component} from "react";
import "./style.scss";

export default class Loginout extends Component{

  render(){
      return (
          <div className="Loginout">
             <button onClick={this.props.loginout}>退出登录</button>
          </div>
      )
  }

}