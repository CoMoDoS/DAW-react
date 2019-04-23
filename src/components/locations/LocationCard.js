import React from 'react';
import t from '../../locale'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class LocationCard extends React.Component{
    handleClick(id){
        // console.log(this.props.medic);
        this.props.onClick(id);
    };
    render(){
        const lang= cookies.get('language');
        return <div className="card" style={{width: '23rem', margin:'0 auto'}}>
            <img className="card-img-top" src={this.props.location.image} alt="Card cap"/>
            <div className="card-body">
                <h5 className="card-title">{this.props.location.name}</h5>
                <div>
                    <div>{t('locAddr', lang)}: {this.props.location.address}</div>
                    <div>{t('locType', lang)}: {this.props.location.type}</div>
                </div>
                <a className="btn btn-primary" onClick={() => this.handleClick(this.props.location.id)} style={{marginTop:'10%', marginLeft:'30%'}}>Details</a>
            </div>
        </div>



    }
}

export default LocationCard;