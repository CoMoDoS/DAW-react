import React from 'react';
import {Link} from 'react-router-dom'


class MyNavbar extends React.Component {

    render() {
        return(
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
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
//
//                 </Nav>
//             </div>
//         </Navbar>
//     </div>
// )