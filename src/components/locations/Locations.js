import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Location from '../aux/Location'
import AllLocations from './AllLocations'


class Locations extends React.Component {
    render() {
        return <Switch>
            {/*<Route exact path="/locations" component={FullLocations}/>*/}
            <Route exact path="/locations" render={props => <AllLocations {...this.props}/>}/>
            {/*<Route path="/locations/:id" component={Location}/>*/}
            <Route path="/locations/:id" render={props => <Location {...this.props}/>}/>
        </Switch>
    }
}

export default Locations;