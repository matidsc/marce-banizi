import React, { Component } from 'react'
import imgprueba from '../img/imgHome.jpeg'
import style from '../style/styleIndividualImage.css'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import { useState } from 'react';
const IndividualImage = (props) => {
  
    const [actual, setActual] = useState(0)
    const imageList = []
    for (var i = 0; i < 25; i++) {
        imageList.push("" + i + "")
    }

    var length = imageList.length
    const nextImg = () => {
        setActual(actual === length - 1 ? 0 : actual + 1)
    }
    const prevImg = () => {
        setActual(actual === 0 ? length - 1 : actual - 1)
    }
    console.log(actual)

    return (
        <div className='imgWrapper'>
            <IoIosArrowDropleftCircle  className='arrow arrowL' size="40" onClick={prevImg} />
            <IoIosArrowDroprightCircle className='arrow arrowR' size="40" onClick={nextImg} />

            {
                imageList.map((img, index) => {

                    return (
                        <div key={index} className={index === actual ? 'imgActiva' : 'slide'}>
                            
                            {index === actual && <img key={index} className='imgMain' src={require("../img/Portafolio/" + img + ".jpg").default} />
                            }
                        </div>
                        
                    )
                })
            }

        </div>
    )

    /*<img src={require('../images/' + fileName + '.jpg')} />
           <img src={require(`../images/${fileName}.jpg`)} />*/

    /* we put the image variable we made earlier into the src attribute */

}

export default IndividualImage

