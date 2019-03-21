import React from 'react'

import MedicsAPI from "../MediciAPI";
import MyMedia from "./MyMedia";

const MedicsByLoc = (props) => (
    <div>
        { MedicsAPI.getByIdLoc(parseInt(props.match.params.idLoc)).map(
            function(medic){
                return <MyMedia medic = {medic} key = {medic.id} onClick = {handleClick}/>
            })
        }
    </div>
);

function handleClick(id) {
    console.log("adssssssad " + id);

}

export default MedicsByLoc;