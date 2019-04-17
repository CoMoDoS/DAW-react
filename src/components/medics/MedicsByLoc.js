import React from 'react'

import MedicsAPI from "../../MediciAPI";
import MyMedia from "../aux/MyMedia";
import axios from 'axios';

const MedicsByLoc = (props) => (
    <div style={{background:"url('/images/bg.jpg')", height:920}}>
        { MedicsAPI.getByIdLoc(parseInt(props.match.params.idLoc)).map(
            function(medic){
                return <MyMedia medic = {medic} key = {medic.id} onClick = {handleClick}/>
            })
        }
    </div>
);

function handleClick(id) {
    console.log("adssssssad " + id);

    axios.get(`http://localhost/php/db.php`)
        .then(res => {
            // const posts = res.data.data.children.map(obj => obj.data);
            console.log(res.data);
        });

}

export default MedicsByLoc;