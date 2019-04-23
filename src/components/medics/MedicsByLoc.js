import React from 'react'
import MyMedia from "./MyMedia";
import axios from 'axios';

class MedicsByLoc extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            doctors: []
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {

        axios.get('http://localhost/php/getDoctorsByIdLoc.php?id=' + this.props.match.params.idLoc)
            .then(res => {

                const doctors = res.data;
                this.setState({ doctors });
            });
    }

    render(){
        return(
            <div style={{background: "url('/images/bg.jpg')", height: 920}}>
                {this.state.doctors.map(
                    function (medic) {
                        return <MyMedia medic={medic} key={medic.id} />
                    })
                }
            </div>
        )
    }

};
//
// function handleClick(id) {
//     console.log("adssssssad " + id);
//
//     axios.get(`http://localhost/php/getDoctorsByIdLoc.php`)
//         .then(res => {
//             // const posts = res.data.data.children.map(obj => obj.data);
//             console.log(res.data);
//         });
//
// }

export default MedicsByLoc;