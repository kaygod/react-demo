import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from "../../components/header";
import Likes from "./components/likes";
import Recommends from "./components/recommends";
import Loading from "../../components/loading";
import { bindActionCreators } from 'redux';
import { actions as homeAction,getLikes,getRecommends,getLoading} from "../../redux/modules/homepage/actions";

class Homepage extends Component {
  
  jump=()=>{
    this.props.history.push("/search")
  }

  render() {
    const { likes,recommends,loadingFlag } = this.props;
    return (
      <div className="home">
            <Header/>
            <Likes likes={likes}/>
            <Recommends recommends={recommends}/>
            <Loading is_show={loadingFlag}/>
      </div>
    )
  }

  componentDidMount(){
    
    const { homeAction } = this.props;
    
    homeAction.loadLikes()
    homeAction.loadRecommends();

  }


}

const mapStateToProps = (state,props)=>{
  return {
    likes:getLikes(state),
    recommends:getRecommends(state),
    loadingFlag:getLoading(state)
  }
}

const mapDispatchToProps = (dispatch)=>{
 
  return {
    homeAction:bindActionCreators(homeAction,dispatch)
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(Homepage);