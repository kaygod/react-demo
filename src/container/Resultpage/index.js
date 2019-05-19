import React,{Component} from "react";
import Header from "../../components/header";
import Searchcontent from "./components/Searchcontent";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./style.scss";
import { actions as resultAction,getList,getFlag } from "../../redux/modules/resultpage/actions";

class Resultpage extends Component{

   render(){
      
     const {list,match,history} = this.props;

      return (
          <div className="result-page">
              <Header title={match.params.name} history={history}/>
              <Searchcontent list={list}/>
          </div>
      )

   }

   componentDidMount(){
       this.props.resultAction.loadData();
   }

}

const mapStateToProps=(store)=>{
 return {
   list:getList(store),
   flag:getFlag(store)
 }
}

const mapDispatchToProps=(dispatch)=>{
  return {
      resultAction:bindActionCreators(resultAction,dispatch)
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Resultpage);




