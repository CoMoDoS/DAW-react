import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AllMedics from './AllMedics'
import Medic from '../aux/Medic'

const Medics = () => (
    <Switch>
        <Route exact path="/medics" component={AllMedics}/>

        <Route path="/medic/:id" component={Medic}/>
    </Switch>
);

export default Medics;