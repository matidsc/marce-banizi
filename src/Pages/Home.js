import React from 'react'
import '../style/Home.css'
import imgHome from '../img/imgHome.jpeg'

const Home = () => {

    return (

        <main className='HomeWrapper' id='pageWrapper'>
            <img src={imgHome} className='imgHome'></img>
        </main>
    )

}

export default Home