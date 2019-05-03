import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AllMedics from './AllMedics'
import Medic from '../aux/Medic'
import MedicsByLoc from "./MedicsByLoc";
import RateMedic from "./RateMedic";

const Medics = () => (
    <Switch>
        <Route exact path="/medics" component={AllMedics}/>

        <Route path="/medic/:id" component={MedicsByLoc}/>
        <Route path="/medicProfile/:id" component={RateMedic}/>>
    </Switch>
);

export default Medics;