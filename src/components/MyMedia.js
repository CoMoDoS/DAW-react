import React from 'react';

class MyMedia extends React.Component{
    handleClick(id){
        // console.log(this.props.medic);
        this.props.onClick(id);
    };
    render(){
        return <div className="media" style={{padding:'5%'}}>
            <img className="align-self-center mr-3"
                 src={this.props.medic.picture}
                 alt="Generic placeholder"
                 style={{width:200, height:200 }}
                 onClick={() => this.handleClick(this.props.medic.id)}
            />
            <div className="media-body" style={{marginTop: '4%', marginRight:'17%'}}>
                <div>
                    <h5 className="mt-0">{this.props.medic.name}</h5>
                    <p>{this.props.medic.spec}</p>
                    <p>{this.props.medic.year}</p>
                </div>
                <button type="button" className="btn btn-info" onClick={() => this.handleClick(this.props.medic.id)} style={{marginLeft:'110%', marginTop:'-20%'}}> Info</button>
            </div>
        </div>


    }
}

export default MyMedia;