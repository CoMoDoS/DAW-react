import React from 'react'
import LocationCard from "./LocationCard";
import t from '../../locale';
import Cookies from 'universal-cookie';
import axios from 'axios';


const cookies = new Cookies();


class AllLocations extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            locations: []
        };
    }


    componentDidMount() {
        axios.get(`http://localhost/php/getLocations.php`)
            .then(res => {

                const locations = res.data;
                this.setState({ locations });
            });
    }



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
                                { this.state.locations.map(
                                    (location) => {
                                        return <LocationCard location = {location} key = {location.id} onClick = {this.handleClick}/>
                                    })
                               }
                    </div>
                </div>
            </div>

        )
    }
}

export default AllLocations;