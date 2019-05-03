import React from 'react'
import MyMedia from "./MyMedia";
import axios from 'axios';
import CommentForm from "../CommentForm";
import CommentList from "../CommentList";
import Comment from "../Comment";
import MedicCard from "./MedicCard";

class MedicsByLoc extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            doctors: [],

        };
        // this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount = () => {
        debugger;
        axios.get('http://localhost/php/getDoctorsByIdLoc.php?id=' + this.props.match.params.idLoc)
            .then(res => {

                const doctors = res.data;
                this.setState({ doctors });
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
            </div>

        )
    }

};


export default MedicsByLoc;