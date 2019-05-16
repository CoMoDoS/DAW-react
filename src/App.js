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
import Register from "./components/Register";
import RateMedic from "./components/medics/RateMedic";
import Admin from "./components/admin";
import UserEdit from "./components/UnitEdit";
import AdminLogin from "./components/AdminLogin";
const cookies = new Cookies();
// const deffault1 = cookies.get('language') === undefined ? 'en':deffault1 ;
// const deffault2 = cookies.get('PHPSESSID') === undefined ? false : true ;

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            language : cookies.get('language') === undefined ? 'en':'ro',
            logged:cookies.get('PHPSESSID') === undefined ? false : true
        };

    }

   componentDidUpdate(prevState) {
        if ( this.state.language !== prevState.language){
            this.setState({
                language:cookies.get('language'),
                logged:cookies.get('PHPSESSID') === undefined ? false : true
            });
        }
        if ( this.state.logged !== prevState.logged){
            this.setState({
                language:cookies.get('language'),
                logged:cookies.get('PHPSESSID') === undefined ? false : true
            });
        }
   }

    render() {
    return (
        <IntlProvider locale='EN'>
            <Router>
              <MyNavbar/>
              <Route exact path="/" render={props => <Home {...props} />}/>
              <Route exact path="/profile" render={props => <Profile {...props} />}/>
              <Route path="/admin" component={props => <Admin {...props}/>}/>
              <Route path="/locations" render={props => <Locations {...props}/>} />
              <Route path="/medics" render={props => <Medics {...props}/>} />
              <Route path="/medicsByLoc/:idLoc" render={props => <MedicsByLoc {...props}/>} />
              <Route path="/login" render={props => <Login {...props}/>} />
              <Route path="/register" render={props => <Register {...props}/>} />
              <Route path="/medicDetails/:id" render={props => <RateMedic {...props}/>} />
              <Route path="/adminlogin" component={props => <AdminLogin {...props}/>}/>
            </Router>
        </IntlProvider>
    );
    }
    }

export default App;