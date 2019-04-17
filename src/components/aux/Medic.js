import React from 'react'
import MedicAPI from "../../MediciAPI";

const Medic = (props) => {
    const loc = MedicAPI.getById(parseInt(props.match.params.id, 10));

    if ( !loc ) {
        return <div> Error 404 {props.match.params.id} </div>
    }

    return(
        <div className="media">
            <img className="align-self-center mr-3"
                 src={loc.picture}
                 alt="Generic placeholder"
                 style={{width:200, height:200 }}
                 onClick={() => handleClick(loc)}
            />
            <div className="media-body">
                <h5 className="mt-0">{loc.name}</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
        </div>
    )
};

function handleClick(loc){
    console.log(loc);
}

export default Medic;