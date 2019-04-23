import React from 'react';
import '../css/Comm.css';
import Test from "../test";
import '../css/Comm.css';


class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            comment: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    formatTime() {
        const options = {
            month: '2-digit',
            day: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute:'2-digit'
        };
        let now = new Date().toLocaleString('en-US', options);
        return now;
    }
    escapeHTML(html) { // [1]
        const div = document.createElement('div');
        div.textContent = html;
        return div.innerHTML;
    }
    handleSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.escapeHTML(this.state.username),
            comment: this.escapeHTML(this.state.comment),
            time: this.formatTime(),
        }

        // const db = firebase.database().ref('comments');
        // db.push(user);

        this.setState({
            username: '',
            comment: ''
        })
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="comments-form">
                <form onSubmit={this.handleSubmit}>
                    <ul className="ul_comm">
                        <li className="li_comm">
                            <input
                                className="input_comm"
                                name="username"
                                type="text"
                                placeholder="Name"
                                value={this.state.username}
                                onChange={this.handleChange}
                                required
                            />
                            {/*<Test/>*/}
                        </li>
                        <li className="li_comm">
                          <textarea
                              className="textarea_comm"
                              name="comment"
                              placeholder="Comment"
                              value={this.state.comment}
                              onChange={this.handleChange}
                              required
                          ></textarea>
                        </li>
                        <li className="li_comm">
                            <input type="submit" value="Post &#9998;" className="submit_comm" />
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}

export default CommentForm;