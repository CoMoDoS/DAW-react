import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Home'
import Locations from './Locations'
import MyNavbar from './MyNavbar'
import Medics from './Medics'
import MedicsByLoc from "./MedicsByLoc";
import {IntlProvider} from "react-intl";

class App extends Component {
  render() {
    return (
        <IntlProvider locale='EN'>
            <Router>
              <MyNavbar/>
              <Route path="/" exact component={Home}/>
              {/*<Route path="/locations" component={Locations}/>*/}
              <Route path="/locations" render={props => <Locations {...props}/>} />
              <Route path="/medics" render={props => <Medics {...props}/>} />
              <Route path="/medicsByLoc/:idLoc" render={props => <MedicsByLoc {...props}/>} />
              {/*<Route path={"/medics"} component={Medics}/>*/}
              {/*<Route path="/medicsByLoc/:idLoc" component={MedicsByLoc}/>*/}
            </Router>
        </IntlProvider>
    );
  }
}

export default App;