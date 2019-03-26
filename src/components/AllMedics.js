import React from 'react'
import MedicsAPI from "../MediciAPI";
import t from "./locale";
import Cookies from 'universal-cookie';
import MedicCard from "./MedicCard";
const cookies = new Cookies();


const AllMedics = () => (
    <div style={{background:"url('/images/bg.jpg')", height:'920px'}}>
        <div style={{position:'relative', top:30, left:'40%', width:'22%'}}>
            <h1> {t('docH',cookies.get('language'))}</h1>
            <p>{t('docP', cookies.get('language'))}</p>
        </div>
        <div style={{display: 'flex',flexWrap: 'wrap', padding: '7%'}}>
            { MedicsAPI.all().map(
                function(medic){
                    return <MedicCard medic = {medic} key = {medic.id} onClick = {handleClick}/>
                })
            }
        </div>
    </div>
);

function handleClick(id) {
    console.log("adssssssad " + id);


}

export default AllMedics;