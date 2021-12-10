import React, { Component } from 'react'
import imgprueba from '../img/imgHome.jpeg'
import style from '../style/styleIndividualImage.css'

const IndividualImage = (props) => {

    const imageList = []
    for (var i=0;i<27;i++){
        imageList.push(""+i+"")
    }
    return (<div className='imgWrapper'>

        {
            imageList.map((img,index) => {
                return <img key={index} className='imgMain' src={require("../img/Portafolio/" + img + ".jpg").default} />
            })
        }
    </div>
    )
    /*<img src={require('../images/' + fileName + '.jpg')} />
           <img src={require(`../images/${fileName}.jpg`)} />*/

    /* we put the image variable we made earlier into the src attribute */

}

export default IndividualImage

