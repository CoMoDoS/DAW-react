import React from 'react';
import {Link} from 'react-router-dom'
import Cookies from 'universal-cookie';
import t from '../locale'
import axios from 'axios'
import '../css/navbar.css'
const cookies = new Cookies();




class MyNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logged:"",
            admin:""
        }
    }


    handleEnClick(){
        if ( cookies.get('language') !== 'en' ) {
            cookies.set('language', 'en');
            console.log(cookies.get('language'));
            window.location.reload();
        }
    }

    handleRoClick(){
        if ( cookies.get('language') !== 'ro' ) {
            cookies.set('language', 'ro');
            console.log(cookies.get('language'));
            window.location.reload();
        }

    }

    // componentDidUpdate(prevState) {
    //     if ( this.state.logged !== prevState.logged){
    //         this.setState({language:cookies.get('PHPSESSID')});
    //     }
    // }

    logout = () => {
        axios.get('http://localhost/php/logout.php')
            .then(res => {
                cookies.remove("PHPSESSID",{ path: '/' });
                window.location.reload();
                // this.setState({logged:false})
            })


    };
    logoutAdmin = () => {
        axios.get('http://localhost:3002/logout')
            .then(res => {
                cookies.remove("user_id",{ path: '/' });
                window.location.reload();
                // this.setState({logged:false})
            })


    };

    componentDidMount() {
        if ( cookies.get("PHPSESSID") != null ){
            this.setState({
                logged:true
            });
            document.getElementById("id_login_btn").style.visibility = 'hidden';
        } else  {
            this.setState({
                logged:false
            });
        }
        if ( cookies.get("user_id") != null ){
            this.setState({
                admin:true
            });
            document.getElementById("id_loginadmin_btn").style.visibility = 'hidden';
        } else  {
            this.setState({
                admin:false
            });
        }


    }

    // componentDidUpdate() {
    //     if ( cookies.get("PHPSESSID") != null ){
    //
    //         document.getElementById("id_login_btn").style.visibility = 'hidden';
    //     } else  {
    //         document.getElementById("id_login_btn").style.visibility = 'visible';
    //     }
    //
    // }

    render() {
        const lang= cookies.get('language');
        return(
            <nav className="navbar  navbar-expand-sm  navbar-dark bg-dark" >
                <a className="navbar-brand" href="/">DAW</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={'/locations'} className="nav-link"> {t('navbar1', lang)} </Link><span className="sr-only">(current)</span>
                        </li>
                        <li className="nav-item">
                            <Link to={'/medics'} className="nav-link"> {t('navbar2', lang)} </Link><span className="sr-only">(current)</span>
                        </li>
                        <li className="nav-item">
                            <div>{this.state.logged ? <Link to={'/profile'} className="nav-link"> {t('navbar3', lang)} </Link> : ""}</div><span className="sr-only">(current)</span>
                        </li>


                    </ul>

                    <button type="button" className="btn btn-light"  style={{padding: '5px'}}>
                        <img src="/images/en.jpg" style={{height: '20px'}} onClick={this.handleEnClick} alt='EN'/>
                    </button>
                    <div style={{width:'10px'}}></div>
                    <button type="button" className="btn btn-light" style={{padding: '5px'}}>
                        <img src="/images/ro.png" style={{height: '20px'}} onClick={this.handleRoClick} alt='RO'/>
                    </button>
                    <div style={{width:'20px'}}></div>



                    <div className="dropdown">
                        <button className="dropbtn">
                            <img src="/images/button.png" style={{height: '25px'}} alt="menu"/>
                        </button>
                        <div className="dropdown-content">
                            <div>{this.state.logged ? ""  : <Link to={'/login'} className="btn btn-light" id="id_login_btn" >Login </Link> }</div>
                            <div>{this.state.admin ? ""  : <Link to={'/adminlogin'} className="btn btn-light" id="id_loginadmin_btn" >Login admin </Link> }</div>
                            {/*<div>{this.state.logged ? ""  : <div style={{width:'20px'}}></div> }</div>*/}
                            <div>{this.state.logged ? ""  : <Link to={'/register'} className="btn btn-light" id="id_register_btn">Register </Link> }</div>
                            {/*<div style={{width:'20px'}}></div>*/}
                            <div>{this.state.logged ? <button type="button" className="btn btn-light" onClick={() => this.logout()}>Logout</button> : ""  }</div>
                            <div>{this.state.admin ? <button type="button" className="btn btn-light" onClick={() => this.logoutAdmin()}>Logout admin</button> : ""  }</div>
                        </div>
                    </div>

                </div>
            </nav>
        )

    }
}

export default MyNavbar;