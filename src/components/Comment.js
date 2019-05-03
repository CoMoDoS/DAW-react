import React from 'react'
import '../css/Comm.css'

const Comment = ({username, comment}) => (
    <div className="comment">
        <h4 className="h4_comm">{username} </h4>
        <p className="timestamp"></p>
        <p>{comment}</p>
    </div>
);

export default Comment;