import React,{Component} from "react";
import "./style.scss";
export default class Logincontent extends Component{

    render(){
        const {username,password} = this.props;
        return (
            <div className="login-content">
         
               <div className="box item">
                   <p className="lt">用户名:</p>
                   <p className="gt"><input type="text" value={username} onChange={this.props.changeUsername}/></p>       
               </div>

               <div className="box item">
                  <p className="lt">密码:</p>
                  <p className="gt"><input type="text" value={password} onChange={this.props.changePassword} /></p>
                </div>

               <div className="btn"><button onClick={this.props.login}>登&nbsp;录</button></div>

            </div>    
        )
    }

}