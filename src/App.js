import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/Home'
import Locations from './components/locations/Locations'
import MyNavbar from './components/MyNavbar'
import Medics from './components/medics/Medics'
import MedicsByLoc from "./components/medics/MedicsByLoc";
import {IntlProvider} from "react-intl";
import Login from "./components/Login";
import Cookies from 'universal-cookie';
import Profile from "./components/Profile";
const cookies = new Cookies();
const deffault = cookies.get('language') == undefined ?'en':deffault ;

class App extends Component {
    constructor(props){
        super(props);
        this.state = {language : deffault};

    }

   componentDidUpdate(prevState) {
        if ( this.state.language !== prevState.language){
            this.setState({language:cookies.get('language')});
        }
   }

    render() {
    return (
        <IntlProvider locale='EN'>
            <Router>
              <MyNavbar/>
              <Route exact path="/" render={props => <Home {...props} />}/>
              <Route exact path="/profile/:id" render={props => <Profile {...props} />}/>
              {/*<Route path="/locations" component={Locations}/>*/}
              <Route path="/locations" render={props => <Locations {...props}/>} />
              <Route path="/medics" render={props => <Medics {...props}/>} />
              <Route path="/medicsByLoc/:idLoc" render={props => <MedicsByLoc {...props}/>} />
              <Route path="/login" render={props => <Login {...props}/>} />
              {/*<Route path={"/medics"} component={Medics}/>*/}
              {/*<Route path="/medicsByLoc/:idLoc" component={MedicsByLoc}/>*/}
            </Router>
        </IntlProvider>
    );
    }
    }

export default App;