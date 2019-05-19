import React,{Component} from "react";

import { Route,Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { getLoginStatus } from "../../redux/global";

class Privateroute extends Component{

     
    render(){

        const {component:Component,loginState,...rest} = this.props;

      return (
        <Route {...rest} render={(props)=>{
          return (
            loginState?
            <Component {...props}/>
            :<Redirect
            to={{
              pathname:"/login",
              state:{from:props.location}
            }} 
            />
          )
        }}/>
      )

    }


}

const mapStateToProps=(store)=>{
  return {
    loginState:getLoginStatus(store)
  }
}



export default connect(mapStateToProps,null)(Privateroute); 