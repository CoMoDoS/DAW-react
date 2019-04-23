import React from 'react';
import Comment from './Comment';
import '../css/Comm.css';
import axios from 'axios'

class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }
    // componentWillMount() { // [2]
        // const db = firebase.database().ref('comments');
        // const MAX_COUNT = 9;
        // db.on('value', (snapshot) => {
        //     if (snapshot.numChildren() > MAX_COUNT) {
        //         let childCount = 0;
        //         let updates = {};
        //         snapshot.forEach((child) => {
        //             if (++childCount < snapshot.numChildren() - MAX_COUNT) {
        //                 updates[child.key] = null;
        //             }
        //         });
        //         db.update(updates);
        //     }
        // });
    // }
    componentDidMount() {
        axios.get(`http://localhost/php/getComentsByIdDoc.php?id=9`)
            .then(res => {

                const comments = res.data;
                this.setState({comments});
            });
    }
    render() {
        return (
            <div className="comments-list">
                {
                    this.state.comments.map((comment)=> {
                        return <Comment
                            key={comment.rating}
                            username={comment.rating}
                            comment={comment.content}

                        />
                    }
                    )
                }
            </div>
        )
    }
}

export default CommentList;