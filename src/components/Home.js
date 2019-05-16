import React from 'react'
import t from '../locale'
import Cookies from 'universal-cookie';

import axios from 'axios'

const cookies = new Cookies();
//

class Home extends React.Component{
    // constructor(){
    //     super()
    //     this.state = {logged:""}
    //
    // }
    //
    // componentDidMount() {
    //     axios.defaults.withCredentials = true;
    //     axios({
    //         method: 'post',
    //         url: 'http://localhost:3002/find_user',
    //         data: {
    //             "email":"ilie@gmail.com",
    //             "password":"ilie"
    //         },
    //
    //         headers: { 'Content-Type': 'application/json' }
    //     }).then((response) => {
    //         debugger;
    //         console.log(response);
    //         this.state.logged = "dasdasd";
    //
    //     });
    // }


    render() {
        const lang= cookies.get('language');
        return (
            <div style={{background:"url('/images/bg.jpg')", height:920}}>
                <div style={{position:'relative', top:200, left:200, width:'22%'}}>
                    <h1> {t('homeH',lang)}</h1>
                    {/*<p>{t('homeP', lang)}  </p>*/}
                </div>

            </div>
        )
    }
}

export default Home;
