import React, { Component } from 'react'
import imgprueba from '../img/imgHome.jpeg'
import style from '../style/styleIndividualImage.css'

const IndividualImage = (props) => {

    const imagesPool = [
        '0',
        '1'
    ]
    imagesPool.map(function (img) {

        console.log('LALAL' + img)

        const image = ('../img/Portafolio/' + img + '.jpg');
        console.log('ESTA ES LA RUTA:'+{image})
        
        return (<div>
            <img src={require(`${image}`)}/>
            </div>
        )
    })

    /* we put the image variable we made earlier into the src attribute */

}

export default IndividualImage

