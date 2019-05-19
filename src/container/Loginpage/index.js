import React, { Component } from 'react';
import Header from "../../components/header";
import Logincontent from "./components/Logincontent";
import Loginout from "./components/Loginout";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import { actions as loginAction,getPassword,getUsername,getFlag,getLoginState } from "../../redux/modules/loginpage/actions";

class Loginpage extends Component {

    jump(){
      let timer=setTimeout(() => {
        clearTimeout(timer);
        if(this.pathname){
          this.props.history.push(this.pathname);
        }else{
          this.props.history.push("/");
        }
        
      }, 10);
    }

    render() {
        
        const {username,password,flag,status,history} = this.props;

        if(this.noLogin && status==1){
          this.jump(); 
          return null; 
        }else{

          return (
            <div>
                
              <Header title="登录" history={history} />
              { status == 0 && 
              <Logincontent login={this.login} username={username} password={password} changeUsername={this.changeUsername} changePassword={this.changePassword}/>}
              { status == 1 && <Loginout loginout={this.loginout} />}
  
            </div> 
 
         )

        }
    }

    changeUsername=(e)=>{
       this.props.loginAction.updateUsername(e.target.value);
    }

    changePassword=(e)=>{
      this.props.loginAction.updatePassword(e.target.value);
    }
    
    componentDidMount(){
      if(this.props.location.state){ 
          this.pathname=this.props.location.state.from.pathname;
      }
      this.props.loginAction.resetIsFetching();
      if(localStorage.getItem("loginStatus")){
        this.props.loginAction.updateLoginStatus();
      }else{
        this.noLogin=true;
      }
    }

    login=()=>{
      this.props.loginAction.login();
    }

    loginout=()=>{
      this.props.loginAction.loginOut(); 
    }

}

const mapStateToProps=(store)=>{
  return {
     username:getUsername(store),
     password:getPassword(store),
     flag:getFlag(store),
     status:getLoginState(store)
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
     loginAction:bindActionCreators(loginAction,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Loginpage);
