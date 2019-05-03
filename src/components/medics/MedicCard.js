import React from 'react';
import t from '../../locale'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class MedicCard extends React.Component{
    handleClick(id){
        // console.log(this.props.medic);
        this.props.onClick(id);
    };
    render(){
        const lang= cookies.get('language');
        return <div className="card" style={{width: '20rem', margin:'0 auto', height:500, borderRadius: '100px'}}>
            <img className="card-img-top" src={this.props.medic.image} alt="Card cap" style={{height:'60%', borderRadius:'75%'}}/>
            <div className="card-body">
                <h5 className="card-title">{this.props.medic.name}</h5>
                <div>
                    <div>{t('docSpec', lang)}: {this.props.medic.spec}</div>
                    <div>{t('docYear', lang)}: {this.props.medic.year}</div>


                </div>

                <button className="btn btn-primary" onClick={() => this.handleClick(this.props.medic.id)} style={{marginTop:'10%', marginLeft:'30%'}}>Details</button>
            </div>
        </div>



    }
}

export default MedicCard;