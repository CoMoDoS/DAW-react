import React from 'react'
import MedicsAPI from "../../MediciAPI";
import t from "../../locale";
import Cookies from 'universal-cookie';
import MedicCard from "./MedicCard";
import axios from 'axios';
const cookies = new Cookies();


class AllMedics extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            medics: []
        };
    }




    componentDidMount() {
        axios.get(`http://localhost/php/getDoctors.php`)
            .then(res => {

                const medics = res.data;
                this.setState({medics});
            });
    }

    handleClick = (id) => {
        console.log("adssssssad " + id);

    };

    render() {
        return (

            <div style={{background: "url('/images/bg.jpg')", height: '920px'}}>
                <div style={{position: 'relative', top: 30, left: '40%', width: '22%'}}>
                    <h1> {t('docH', cookies.get('language'))}</h1>
                    <p>{t('docP', cookies.get('language'))}</p>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', padding: '7%'}}>
                    {this.state.medics.map(
                         (medic) => {
                            return <MedicCard medic={medic} key={medic.id} onClick={this.handleClick}/>
                        })
                    }
                </div>
            </div>
        )
    }
}


export default AllMedics;