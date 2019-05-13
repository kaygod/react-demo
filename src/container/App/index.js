import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Homepage from "../Homepage";
import Detailpage from "../Detailpage";
import Loginpage from "../Loginpage";
import Searchpage from "../Searchpage";

export default class App extends Component {
    render() {   
        return (
          
            <Router>
               <Switch>
                        <Route path="/" exact component={Homepage}/>
                        <Route path="/detail/:id" component={Detailpage}/>
                        <Route path="/login" component={Loginpage} />
                        <Route path="/search" component={Searchpage} />
               </Switch>
            </Router>    

        )
    }
}