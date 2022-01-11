import React, { Component } from 'react'
import MainTitle from '../components/mainTitle'
import Galeria from '../components/galería'
import PropTypes from 'prop-types'

const Portafolio = () => {

    const imageList = []
    for (var i = 0; i < 25; i++) {
        imageList.push("" + i + ".jpg")
    }
    return (
        
        <div>
            <main className='HomeWrapper' id='pageWrapper'>
                <MainTitle title='Portafolio'/>
                <Galeria ruta="Portafolio/" imageList={imageList}/>
            </main>
        </div>
    )
}
Portafolio.propTypes = {
    ruta: PropTypes.string.isRequired
}
export default Portafolio