import React from "react";
import './login.css'


class Login extends React.Component{
    render(){
        return(<div style={{background:"url('/images/bg.jpg')", height:920}}>
                <div className="wrapper fadeInDown" backgroundImage="/images/banner-bg.jpg">
                    <div id="formContent">

                        <div className="fadeIn first">
                            <img src="/images/login.png" id="icon" alt="User Icon"/>
                        </div>

                        <form>
                            <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>
                                <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
                                    <input type="submit" className="fadeIn fourth" value="Log In"/>
                        </form>


                        <div id="formFooter">
                            <a className="underlineHover" href="#">Forgot Password?</a>
                        </div>

                    </div>
            </div>
            </div>
        )
    }

}
export default Login;