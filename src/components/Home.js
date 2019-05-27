import React from 'react'
import t from '../locale'
import Cookies from 'universal-cookie';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from 'axios'
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api'

const cookies = new Cookies();
//

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            rating1:[],
            lat:0,
            long:0,
            addresses:[]
        };


    }

    componentDidMount() {

        axios({
            method: 'get',
            url: 'http://localhost/php/unitsRating.php',
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {
            var a = response.data;
            var b = a.map( (aux) => {
                return {
                    'unitname':aux.unitname,
                    'rating':aux.rating/aux.nr_comms
                }
            });
            console.log(response);
            this.setState({rating1:b})

        });
        var startPos;
        var geoSuccess = (position) => {
            startPos = position;

            this.setState({
                lat:startPos.coords.latitude,
                long:startPos.coords.longitude
            });

        };

        navigator.geolocation.getCurrentPosition(geoSuccess);


        var locations = [];
        axios({
            method: 'get',
            url: 'http://localhost/php/getLocations.php',
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {
            locations = response.data;
            var aux = locations.map( loc => loc.location.split('+') );
            this.setState({addresses:aux});


        });

    }




    render() {
        const lang= cookies.get('language');
        return (
            <div>
                <div style={{background:"url('/images/bg.jpg')", height:920}}>
                    <div style={{ width:'24%', margin:'0 auto'}}>
                        <h1> {t('homeH',lang)}</h1>
                        {/*<p>{t('homeP', lang)}  </p>*/}
                    </div>

                    <div style={{margin:'100px auto', width:1000}}>
                        <LoadScript
                            id="script-loader"
                            googleMapsApiKey="AIzaSyDaXe06Cr_zS4ITlQaHbH93eNqlQ6xapII"

                        >
                            <GoogleMap
                                id="circle-example"
                                mapContainerStyle={{
                                    height: "600px",
                                    width: "1000px"
                                }}
                                zoom={7}
                                center={{
                                    lat: 45.806549,
                                    lng: 24.988066
                                }}

                            >
                                <Marker
                                    onLoad={marker => {
                                        console.log('marker: ', marker)
                                    }}
                                    position={{
                                        lat: this.state.lat,
                                        lng: this.state.long
                                    }}
                                />
                                {this.state.addresses.map( loc => {
                                    return (
                                        <Marker key={loc[0]}
                                        onLoad={marker => {
                                            console.log('marker: ', marker)
                                        }}
                                        position={{
                                            lat: parseFloat(loc[0]),
                                            lng: parseFloat(loc[1])
                                        }}
                                    />)
                                })}
                            </GoogleMap>
                        </LoadScript>
                    </div>

                </div>
                <div style={{ width:'24%', margin:'0 auto'}}>
                    <h1> Ratingul clinicilor</h1>
                    {/*<p>{t('homeP', lang)}  </p>*/}
                </div>
                <div style={{margin:'20px auto', width:500}}>
                    <BarChart
                    width={500}
                    height={300}
                    data={this.state.rating1}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="unitname" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="rating" fill="#8884d8" />

                    </BarChart>
                </div>




            </div>
        )
    }
}

export default Home;
// const data = [
//     {
//         name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
//     },
//     {
//         name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
//     },
//     {
//         name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
//     },
//     {
//         name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//     },
//     {
//         name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
//     },
//     {
//         name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
//     },
//     {
//         name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//     },
// ];