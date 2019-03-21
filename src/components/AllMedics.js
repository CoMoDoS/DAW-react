import React from 'react'

import MedicsAPI from "../MediciAPI";
import MyMedia from "./MyMedia";

const AllMedics = () => (
    <div>
        { MedicsAPI.all().map(
            function(medic){
                return <MyMedia medic = {medic} key = {medic.id} onClick = {handleClick}/>
            })
        }
    </div>
);

function handleClick(id) {
    console.log("adssssssad " + id);


}

export default AllMedics;