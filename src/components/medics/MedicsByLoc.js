import React from 'react'
import axios from 'axios';
import MedicCard from "./MedicCard";
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class MedicsByLoc extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            doctors: [],
            rating:[]

        };
        // this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount = () => {

        axios.get('http://localhost/php/getDoctorsByIdLoc.php?id=' + this.props.match.params.idLoc)
            .then(res => {

                const doctors = res.data;
                this.setState({ doctors });
            });

        axios({
            method: 'get',
            url: 'http://localhost/php/unitsDoctorRating.php',
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {
            var a = response.data;
            var b = a.filter( aux => aux.id_unit == this.props.match.params.idLoc);
            var c = b.map( (aux) => {
                    return {
                        'name': aux.unitname,
                        'doctor': aux.doctor,
                        'rating': aux.rating / aux.nr_comms
                    }

            });

            console.log(c);
            this.setState({rating:c})


        });
    };

    handleClick = (id) => {
        console.log("adssssssad " + id);
        this.props.history.push('/medicDetails/' + id)

    };

    render(){
        return(
            <div>
                <div style={{background: "url('/images/bg.jpg')", height: 920, display: 'flex', flexWrap: 'wrap', padding: '7%'}}>
                    {this.state.doctors.map(
                        medic => {
                            return <MedicCard medic={medic} key={medic.id} onClick={this.handleClick}/>
                        })
                    }
                </div>
                <div style={{margin:'20px auto', width:500}}>
                    <BarChart
                        width={500}
                        height={300}
                        data={this.state.rating}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="doctor" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="rating" fill="#8884d8" />

                    </BarChart>
                </div>
            </div>

        )
    }

};


export default MedicsByLoc;