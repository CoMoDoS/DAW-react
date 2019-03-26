import React from 'react'
import Login from "./Login";
import Example from "./MyCarousel";
import t from './locale'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

//

class Home extends React.Component{

    render() {
        const lang= cookies.get('language');
        return (<div style={{background:"url('/images/bg.jpg')", height:920}}>
            <div style={{position:'relative', top:200, left:200, width:'22%'}}>
                <h1> {t('homeH',lang)}</h1>
                <p>{t('homeP', lang)}</p>
            </div>
        </div>)
    }
}

export default Home;

{/*<div style={{background:"url('/images/banner-bg2.jpg')", height:703,backgroundRepeat:'no-repeat'}}> ceva text </div>*/}