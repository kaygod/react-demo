import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Lazyload from "../../util/asyncLoad";
import Privateroute from "../../container/Privateroute";
const Homepage = Lazyload(()=>import("../Homepage"));
const Detailpage = Lazyload(()=>import("../Detailpage"));
const Loginpage = Lazyload(()=>import("../Loginpage"));
const Searchpage = Lazyload(()=>import("../Searchpage"));
const Resultpage = Lazyload(()=>import("../Resultpage"))

export default class App extends Component {
    render() {   
        return (
          
            <Router>
               <Switch>
                        <Route path="/" exact component={Homepage}/>
                        <Route path="/detail/:id" component={Detailpage}/>
                        <Route path="/login" component={Loginpage} />
                        <Route path="/search" component={Searchpage} />
                        <Privateroute path="/resultpage/:name" component={Resultpage} />
               </Switch>
            </Router>    

        )
    }
}