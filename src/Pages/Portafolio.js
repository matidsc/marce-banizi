import React, { Component } from 'react'
import MainTitle from '../components/mainTitle'
import IndividualImage from '../components/individualImage'
const Portafolio = () => {

    return (

        <div>
            <main className='HomeWrapper' id='pageWrapper'>
                <MainTitle title='Portafolio'/>
                <IndividualImage/>
            </main>
        </div>
    )
}
export default Portafolio