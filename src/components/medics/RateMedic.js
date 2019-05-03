import React from 'react'
import MyMedia from "./MyMedia";
import axios from 'axios'
import Comment from "../Comment";
import CommentForm from "../CommentForm";
import '../../css/Comm.css';

class RateMedic extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            medic: [],
            comments:[]

        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        axios.get(`http://localhost/php/getDoctorById.php?id=` + this.props.match.params.id)
            .then(res => {

                const medic = res.data;
                this.setState({medic:medic[0]});
            });
        axios.get(`http://localhost/php/getComentsByIdDoc.php?id=`+this.props.match.params.id )
            .then(res => {

                const comments = res.data;
                this.setState({comments:comments});
            });
    }

    render()
    {
        return(
            <div style={{marginLeft:'5%', marginRight:'5%'}}>
                <MyMedia medic={this.state.medic} key={this.state.medic.id} />
                   <div>
                        <CommentForm doc_id={this.props.match.params.id}/>
                        <div className="comments-list">
                            {this.state.comments.map(
                                (comm,index) => {
                                    return <Comment key={index} username={comm.user} comment={comm.content}/>
                                })
                            }
                        </div>
                   </div>

            </div>


        )
    }
}

export default RateMedic;