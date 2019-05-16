import React from 'react';
import '../css/Comm.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
import StarRatingComponent from 'react-star-rating-component';
const cookies = new Cookies();



class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            comment: '',
            rating:1
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
        var a = cookies.get("PHPSESSID");

        if ( a != null) {
            axios.defaults.withCredentials = true;
            axios.get('http://localhost/php/getUserById.php')
                .then(res => {

                    console.log(res);
                    var aux = {
                        id: res.data[0].id,
                        email: res.data[0].email,
                        password: res.data[0].password,
                        type: res.data[0].type,
                        name: res.data[0].name,
                        problem: res.data[0].problem,
                        image: res.data[0].image
                    };
                    var data = {
                        doc_id:this.props.doc_id,
                        content:this.state.comment,
                        rating:this.state.rating,
                        user_id:aux.id
                    };

                    axios({
                        method: 'post',
                        url: 'http://localhost/php/insertComment.php',
                        data: data,
                        headers: { 'Content-Type': 'application/json' }
                    }).then((response) => {

                        console.log(response);
                        if ( response.data[0].response === "OK" ) {
                            alert("Comment posted");
                            window.location.reload();
                        }

                    });
                });
        } else {
            alert("You have to be logged in!")
        }

    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
        console.log(this.state.rating)
    }

    render() {
        return (
            <div className="comments-form">
                <form onSubmit={this.handleSubmit}>
                    <ul className="ul_comm">

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
                        <li>
                            <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={this.state.rating}
                                onStarClick={this.onStarClick.bind(this)}
                            />
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}

export default CommentForm;