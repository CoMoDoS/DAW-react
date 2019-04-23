import React from 'react';
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";
import '../../css/Comm.css';
import Test from "../../test";

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
                        </div>
                        <button type="button" className="btn btn-info" onClick={() => this.handleClick(this.props.medic.id)} style={{marginLeft:'110%', marginTop:'-20%'}}> Info</button>
                    </div>


                </div>
                <div className="wrap_comm">
                    <div className="comments">
                        <h2 className="h2_comm">Leave a comment below!</h2>
                        {/*<Test/>*/}
                        <CommentForm />
                        <CommentList />


                    </div>
                </div>
            </div>

        );


    }
}

export default MyMedia;