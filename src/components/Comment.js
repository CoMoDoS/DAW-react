import React from 'react'
import '../css/Comm.css'
import StarRatingComponent from 'react-star-rating-component';


class Comment extends React.Component{
    render()
    {
        return (
            <div className="comment">
                <h4 className="h4_comm">{this.props.username} </h4>
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={this.props.rating}

                />

                <p>{this.props.comment}</p>
            </div>
        );
    }

}

export default Comment;