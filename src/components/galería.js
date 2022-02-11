import React from 'react'
import '../style/styleGaleria.css'
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import PropTypes from 'prop-types'

import { useState } from 'react';
const Galeria = (props) => {
  
    const [actual, setActual] = useState(0)
    
    var length = props.imageList.length
    const nextImg = () => {
        setActual(actual === length - 1 ? 0 : actual + 1)
    }
    const prevImg = () => {
        setActual(actual === 0 ? length - 1 : actual - 1)
    }
    return (
        <div className='galeriaWrapper'>
            <IoIosArrowBack  style={props.imageList.length===1 ? { display:"none"} : {display:"block" }} className='arrow arrowL' size="40" onClick={prevImg} />

            {
                props.imageList.map((img, index) => {
                    return (
                        <div key={index} className={index === actual ? 'imgActiva' : 'slide'}>
                            
                            {index === actual && <img key={index} className='imgMain' src={require("../img/"+props.ruta+img).default} />
                            
                            }
                        </div>
                        
                    )
                })
            }
            <IoIosArrowForward style={props.imageList.length===1 ? { display:"none"} : {display:"block" }} className='arrow arrowR' size="40" onClick={nextImg} />

        </div>
    )

    /*<img src={require('../images/' + fileName + '.jpg')} />
           <img src={require(`../images/${fileName}.jpg`)} />*/

    /* we put the image variable we made earlier into the src attribute */

}
Galeria.propTypes = {
    ruta: PropTypes.string.isRequired
}
export default Galeria

