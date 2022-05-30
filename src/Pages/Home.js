import React from 'react'
import '../style/Home.css'
import imgHome from '../img/ef908db4-4e22-4030-bd87-445dfadd13e1.jpeg'

const Home = () => {

    return (

        <main className='HomeWrapper' id='pageWrapper'>
            <img src={imgHome} className='imgHome'></img>
        </main>
    )

}

export default Home