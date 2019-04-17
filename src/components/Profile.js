import React from 'react'
import '../css/Profile.css'

class Profile extends React.Component{

    componentDidMount() {
        axios.get(`http://localhost/php/getLocations.php`)
            .then(res => {

                const locations = res.data;
                this.setState({ locations });
            });
    }


    render() {
        return(
            <div className="container">
                <div className="fb-profile">
                    <img align="left" className="fb-image-lg" src="http://lorempixel.com/850/280/nightlife/5/"
                         alt="Profile image example"/>
                    <img align="left" className="fb-image-profile thumbnail"
                         src="http://lorempixel.com/180/180/people/9/" alt="Profile image example"/>
                    <div className="fb-profile-text">
                        <h1>Eli Macy</h1>
                        <p>Girls just wanna go fun.</p>
                    </div>
                </div>
            </div>
        );
    }

}
export default Profile;