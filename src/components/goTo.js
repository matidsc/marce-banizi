import React from 'react'
import style from '../style/goTo.css'
import imag from '../img/logoSecundario.jpeg'
import { RoundedBtn } from './roundedBtn'
const GoTo=(props)=>{

    return(
        <div className='goToWrapper'>
            <h1>{props.title}</h1>
            <RoundedBtn width={"100px"} height={"50px"}text={'Ver más'}/>
        </div>
    )
}
export default GoTo