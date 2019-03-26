import React from 'react'
import LocationAPI from "../LocationAPI";
import LocationCard from "./LocationCard";
import t from './locale';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


class AllLocations extends React.Component{

    handleClick  = (id) => {
        this.props.history.push('/medicsByLoc/' + id)

    };

    render(){
        const lang= cookies.get('language');
        return(<div style={{background:"url('/images/bg.jpg')", height:920}}>
                <div style={{position:'relative', top:60, left:'40%', width:'22%', textAlign:'center'}}>
                    <h1>{t('locH', lang)}</h1>
                    <p>{t('locP', lang)}</p>
                </div>
                <div style={{position:'relative', }}>
                    <div style={{display: 'flex', flexWrap: 'wrap',   padding: '7%'}}>
                                { LocationAPI.all().map(
                                    (medic) => {
                                        return <LocationCard medic = {medic} key = {medic.id} onClick = {this.handleClick}/>
                                    })
                               }
                    </div>
                </div>
            </div>

        )
    }
}

export default AllLocations;