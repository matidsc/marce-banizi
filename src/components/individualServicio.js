import React from 'react'
import { useLocation } from "react-router-dom";
import style from '../style/styleServicioIndividual.css'
import { RoundedBtn } from './roundedBtn';
import { AiOutlineWhatsApp } from "react-icons/ai";

/* <RoundedBtn text='Ver detalles'linkTo='' height='60px'backColor='#FF1717' color='#FFFFFF' />
 */
const IndividualServicio = () => {
    const info = useLocation();
    return (
        <div className='wrapperIndividualServicio'>
            <div style ={ { backgroundImage: "url("+info.state.imagen+")" } }className='parallaxWrapper'></div>
            <div className='wrapperDetallesServicio'>
                <h1>{info.state.nombre}</h1>
                <h3>${info.state.precio}</h3>
                <h2>¿En qué consiste? </h2>
                <p>{info.state.descripcion}
                <a href="#" className="showMore"> <span>(more…)</span> </a>

                </p>
                <button className='btnFlotante'>
                <AiOutlineWhatsApp size="40" className='iconFooter'/>
                Consultame sobre el servicio
                </button>
            </div>

        </div>

    )

}
export default IndividualServicio