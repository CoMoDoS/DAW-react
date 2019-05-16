import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import '../../css/Comm.css';

class MyMedia extends React.Component{
    handleClick(id){
        // console.log(this.props.medic);
        this.props.onClick(id);
    };
    render(){
        return(
            <div>
                <div className="media" style={{padding:'5%'}}>
                    <img className="align-self-center mr-3"
                         src={this.props.medic.image}
                         alt="Generic placeholder"
                         style={{width:200, height:200, borderRadius:50 }}
                         onClick={() => this.handleClick(this.props.medic.id)}
                    />
                    <div className="media-body" style={{marginTop: '4%', marginRight:'17%'}}>
                        <div>
                            <h5 className="mt-0">{this.props.medic.name}</h5>
                            <p>{this.props.medic.type}</p>
                            <p>{this.props.medic.year}</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={parseInt(this.props.medic.rating / this.props.medic.nr_comms) }

                            />
                        </div>

                    </div>
                </div>


            </div>

        );


    }
}

export default MyMedia;