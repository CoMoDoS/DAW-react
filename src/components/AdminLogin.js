import React from "react";
import axios from 'axios';
// import Cookies from 'universal-cookie';
// const cookies = new Cookies();
import '../css/login.css'

class AdminLogin extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            login: "",
            password: ""
        };
        // this.handleLogin = this.handleLogin.bind(this);
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleLogin = (username, password) => {
            axios.defaults.withCredentials = true;
            axios({
                method: 'post',
                url: 'http://localhost:3002/find_user',
                data: {
                    "email":username,
                    "password":password
                },

                headers: { 'Content-Type': 'application/json' }
            }).then((response) => {

                console.log(response);
                if ( response.data.length === 0 ){
                    alert("Not enough rights");
                } else {
                    // this.state.logged = "dasdasd";
                    this.props.history.push("/admin");
                    window.location.reload();
                }
            })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                    alert("Wrong data");
                });



    };
//"3o694cg639o4vrf0ra7esgh8uq"
    render(){
        return(<div style={{background:"url('/images/bg.jpg')", height:920}}>
                <div className="wrapper fadeInDown" backgroundimage="/images/banner-bg.jpg">
                    <div id="formContent">

                        <div className="fadeIn first">
                            <img src="/images/login.png" id="icon" alt="User Icon"/>
                        </div>

                        <div>
                            <input type="text" id="login" className="fadeIn second" name="login" placeholder="username" value={this.state.login} onChange = {this.handleChange}/>
                            <input type="password" id="password" className="fadeIn third" name="password" placeholder="password" value={this.state.password} onChange = {this.handleChange}/>
                            <button className="fadeIn fourth" onClick={() => this.handleLogin(this.state.login, this.state.password)}> Log In </button>
                        </div>


                        <div id="formFooter">
                            <button className="underlineHover" >Forgot Password?</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}
export default AdminLogin;