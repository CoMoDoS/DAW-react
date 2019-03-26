import React from 'react';
import {Link} from 'react-router-dom'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class MyNavbar extends React.Component {

    handleEnClick(){
        if ( cookies.get('language') != 'en' ) {
            cookies.set('language', 'en');
            console.log(cookies.get('language'));
            window.location.reload();
        }
    }

    handleRoClick(){
        if ( cookies.get('language') != 'ro' ) {
            cookies.set('language', 'ro');
            console.log(cookies.get('language'));
            window.location.reload();
        }

    }

    render() {
        return(
            <nav className="navbar  navbar-expand-sm  navbar-dark bg-dark">
                <a className="navbar-brand" href="/">DAW</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={'/locations'} className="nav-link"> Locations </Link><span className="sr-only">(current)</span>
                        </li>
                        <li className="nav-item">
                            <Link to={'/medics'} className="nav-link"> Medics </Link><span className="sr-only">(current)</span>
                        </li>
                    </ul>

                    <button type="button" className="btn btn-light" >
                        <img src="/images/en.jpg" style={{height: '20px'}} onClick={this.handleEnClick}/>
                    </button>
                    <div style={{width:'10px'}}></div>
                    <button type="button" className="btn btn-light">
                        <img src="/images/ro.png" style={{height: '20px'}} onClick={this.handleRoClick}/>
                    </button>
                    <div style={{width:'20px'}}></div>
                    <Link to={'/login'} className="btn btn-light">Login </Link>

                </div>
            </nav>
        )

    }
}

export default MyNavbar;

// return (
//     <div>
//         <Navbar color="light" light expand="md">
//             <NavbarBrand href="/">DAW</NavbarBrand>
//             <div>
//                 <Nav pills>
//                     <NavItem>
//                         {/*<NavLink href="#" onClick={this.change.bind(this,'medici')} active={(this.props.currentPage === 'medici') ? true : false}>Medici</NavLink>*/}
//                         <Link to={'/locations'} className="nav-link"> Locations </Link>
//                     </NavItem>
//                     <NavItem>
//                         <Link to={'/medics'} className="nav-link"> Medics </Link>
//                     </NavItem>
//<button type="button" className="btn btn-light">Login</button>
//                 </Nav>
//             </div>
//         </Navbar>
//     </div>
// )