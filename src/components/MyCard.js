
import React from 'react';

class MyCard extends React.Component{
    handleClick(id){
    // console.log(this.props.medic);
    this.props.onClick(id);
    };
    render(){

        return <div>
                <div className="card" style={{width: '18rem', padding:10}}>
                    <img className="card-img-top" src={this.props.medic.picture} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.medic.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" className="btn btn-primary" onClick={() => this.handleClick(this.props.medic.id)}>Details</a>
                    </div>
                </div>
        </div>


    }
}

export default MyCard;