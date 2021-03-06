import React from 'react'
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from 'axios'
import StarRatingComponent from 'react-star-rating-component';
import Popup from 'reactjs-popup'
import UnitEdit from "./UnitEdit";
import MedicEdit from "./MedicEdit";
import Cookies from 'universal-cookie';
const cookies = new Cookies();


class Admin extends React.Component{

    constructor() {
        super();
        this.state = {
            doctors: [],
            users:[],
            units:[],
            comments:[]
        };
    }

    componentDidMount() {
        var a = cookies.get("user_id");
        if ( a != null) {


            axios.defaults.withCredentials = true;
        axios.get('http://localhost:3002/doctors' )
            .then(res => {
                this.setState({doctors:res.data});
            });
        axios.get('http://localhost:3002/customUsers' )
            .then(res => {
                this.setState({users:res.data});
            });
        axios.get('http://localhost:3002/medical_units' )
            .then(res => {
                this.setState({units:res.data});
            });
        axios.get('http://localhost:3002/customComments' )
            .then(res => {
                this.setState({comments:res.data});
            });
        } else {
            this.props.history.push("/adminlogin");
        }
    }
    handleClick(data){
        console.log(data)
    }
    deleteUnits(data){
        console.log(data)
        axios({
            method: 'delete',
            url: 'http://localhost:3002/medical_units/'+data.id,
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {

            console.log(response);
            window.location.reload();

        });
    }

    deleteUser(data){
        console.log(data)
        axios({
            method: 'delete',
            url: 'http://localhost:3002/users/'+data.id,
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {

            console.log(response);
            window.location.reload();

        });
    }
    deleteDoctor(data){
        console.log(data)
        axios({
            method: 'delete',
            url: 'http://localhost:3002/doctors/'+data.id,
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {

            console.log(response);
            window.location.reload();

        });
    }

    deleteComment(data){
        console.log(data)
        axios({
            method: 'delete',
            url: 'http://localhost:3002/comments/'+data.id,
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {

            console.log(response);
            window.location.reload();

        });
    }
    hideComment(data, value){
        console.log(data)
        let body = {
            hide:value
        };
        axios({
            method: 'put',
            url: 'http://localhost:3002/comments/'+data.id,
            data: body,
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {

            console.log(response);
            window.location.reload();

        });
    }


    render(){

        return(
            <div>
                <div style={{margin:'50px auto', maxWidth:1000, textAlign:'center'}}>
                    <Popup
                        trigger={<button className="button"> Create </button>}
                        position="left top"
                        closeOnDocumentClick
                        contentStyle={{ width:420 }}
                        >
                        <MedicEdit id={-1}/>
                    </Popup>
                    <ReactTable
                        data={this.state.doctors}
                        columns={[
                            {
                                Header: "Doctors",
                                columns: [
                                    {
                                        Header: "Profile",
                                        Cell: (row) => {
                                            return <div><img height={50} src={row.original.image} alt="profile"/></div>
                                        },
                                        id: "status"
                                    },
                                    {
                                        Header: "Name",
                                        accessor: "name"
                                    },
                                    {
                                        Header: "Year",
                                        accessor: "year"
                                    },
                                    {
                                        Header: "Speciality",
                                        accessor: "speciality"
                                    },
                                    {
                                        Header: "Rating",
                                        Cell: (row) => {
                                            return <div>
                                                    <StarRatingComponent
                                                        name="rate1"
                                                        starCount={5}
                                                        value={row.original.rating / row.original.nr_comms >= 0 ? parseInt(row.original.rating / row.original.nr_comms) : 0} />
                                            </div>
                                        },
                                        id: "rating"
                                    },
                                    {
                                        Header:"",
                                        Cell:(row) => {return <button onClick={() => {this.deleteDoctor(row.original)}}>Delete</button>}
                                    },
                                    ,
                                    {
                                        Header:"",
                                        Cell:(row) => {return <Popup
                                            trigger={<button className="button"> Edit </button>}
                                            position="left top"
                                            closeOnDocumentClick
                                            contentStyle={{ width:420 }}
                                        ><MedicEdit id={row.original.id}/>
                                        </Popup>
                                        }
                                    }

                                ]
                            }

                        ]}
                        defaultSorted={[
                            {
                                id: "name",
                                desc: true
                            }
                        ]}
                        defaultPageSize={5}
                        className="-highlight"
                    />
                </div>
                <div style={{margin:'50px auto', maxWidth:1000, textAlign:'center'}}>
                    <Popup
                        trigger={<button className="button"> Create </button>}
                        position="left top"
                        closeOnDocumentClick
                        contentStyle={{ width:420 }}
                    >
                        <UnitEdit id={-1}/>
                    </Popup>
                    <ReactTable
                        data={this.state.units}
                        columns={[
                            {
                                Header: "Medical units",
                                columns: [
                                    {
                                        Header: "Profile",
                                        Cell: (row) => {
                                            return <div><img height={50} src={row.original.image} alt="profile"/></div>
                                        },
                                        id: "status"
                                    },
                                    {
                                        Header: "Name",
                                        accessor: "name"
                                    },
                                    {
                                        Header: "Speciality",
                                        accessor: "speciality"
                                    },
                                    {
                                        Header:"",
                                        Cell:(row) => {return <button onClick={() => {this.deleteUnits(row.original)}}>Delete</button>}
                                    },
                                    {
                                        Header:"",
                                        Cell:(row) => {return <Popup
                                            trigger={<button className="button"> Edit </button>}
                                            position="left top"
                                            closeOnDocumentClick
                                            contentStyle={{ width:420 }}
                                        ><UnitEdit id={row.original.id}/>
                                        </Popup>
                                        }
                                    }

                                ]
                            }

                        ]}
                        defaultSorted={[
                            {
                                id: "name",
                                desc: true
                            }
                        ]}
                        defaultPageSize={5}
                        className="-highlight"
                    />
                </div>
                <div style={{margin:'50px auto', maxWidth:1000, textAlign:'center'}}>

                    <ReactTable
                        data={this.state.users}
                        columns={[
                            {
                                Header: "Users",
                                columns: [
                                    {
                                        Header: "Profile",
                                        Cell: (row) => {
                                            return <div><img height={50} src={row.original.user_detail.image} alt="profile"/></div>
                                        },
                                        id: "status"

                                    },
                                    {
                                        Header: "Emai",
                                        accessor: "email"
                                    },
                                    {
                                        Header: "Name",
                                        accessor: d => d.user_detail.name,
                                        id: "name"

                                    },
                                    {
                                        Header: "Problem",
                                        accessor: d => d.user_detail.problem,
                                        id: "problem"

                                    },
                                    {
                                        Header: "Admin",
                                        accessor: "admin"
                                    },
                                    {
                                        Header:"",
                                        Cell:(row) => {return <button onClick={() => {this.deleteUser(row.original)}}>Delete</button>}
                                    }

                                ]
                            }

                        ]}
                        defaultSorted={[
                            {
                                id: "name",
                                desc: true
                            }
                        ]}
                        defaultPageSize={5}
                        className="-highlight"
                    />
                </div>
                <div style={{margin:'50px auto', maxWidth:1000, textAlign:'center'}}>
                    <ReactTable
                        data={this.state.comments}
                        columns={[
                            {
                                Header: "Comments",
                                columns: [
                                    {
                                        Header: "Content",
                                        accessor: "content"
                                    },
                                    {
                                        Header: "Rating",
                                        Cell: (row) => {
                                            return <div>
                                                <StarRatingComponent
                                                    name="rate1"
                                                    starCount={5}
                                                    value={row.original.rating} />
                                            </div>
                                        },
                                        id: "rating"
                                    },
                                    {
                                        Header: "Medic",
                                        accessor: d => d.doctor.name,
                                        id: "medic"

                                    },
                                    {
                                        Header:"",
                                        Cell:(row) => {return <button onClick={() => {this.deleteComment(row.original)}}>Delete</button>}
                                    },
                                    {
                                        Header:"",
                                        Cell:(row) => {return row.original.hide === 0 ? <button onClick={() => {this.hideComment(row.original, 1)}}>Hide</button> : <button onClick={() => {this.hideComment(row.original, 0)}}>Show</button>}
                                    }

                                ]
                            }

                        ]}
                        defaultSorted={[
                            {
                                id: "name",
                                desc: true
                            }
                        ]}
                        defaultPageSize={5}
                        className="-highlight"
                    />
                </div>
            </div>
        )
    }

}
export default Admin;