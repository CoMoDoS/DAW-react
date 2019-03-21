import React from 'react'
import LocationAPI from "../LocationAPI";
import MyMedia from "./MyMedia";
import MyCard from "./MyCard";
import Example from "./test";

class AllLocations extends React.Component{
    // constructor(props){
    //     super(props)
    //     // this.handleClick = this.handleClick.bind(this)
    // }

    handleClick  = (id) => {
        this.props.history.push('/medicsByLoc/' + id)

    };

    render(){
        return(
            <div>
                <div style={{columnCount: 3,    padding: '2%'}}>
                            { LocationAPI.all().map(
                                (medic) => {
                                    return <MyCard medic = {medic} key = {medic.id} onClick = {this.handleClick}/>
                                })
                            }

                </div>

                <div style={{    padding: '2%'}}>
                    { LocationAPI.all().map(
                        (medic) => {
                            return <MyMedia medic = {medic} key = {medic.id} onClick = {this.handleClick}/>
                        })
                    }
                </div>
            </div>

        )
    }
}

export default AllLocations;