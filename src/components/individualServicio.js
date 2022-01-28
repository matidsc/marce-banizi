import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import '../style/styleServicioIndividual.css'
import { AiOutlineWhatsApp } from "react-icons/ai";
import Galeria from './galería';
/*  <RoundedBtn text='Ver detalles'linkTo='' height='60px'backColor='#FF1717' color='#FFFFFF' />
    <div style ={ { backgroundImage: "url("+info.state.imagen+")" } }className='parallaxWrapper'></div>
*/

const IndividualServicio = () => {
    const [showMore, setShowMore] = useState(false);
    const info = useLocation();
    console.log(showMore)
    
    return (
        <div id='pageWrapper'>
        <div className='wrapperIndividualServicio'>
        <Galeria ruta="Servicios/" imageList={info.state.imageList}/>

            <div className='wrapperDetallesServicio'>
                <h1>{info.state.nombre}</h1>
                {typeof info.state.precio !='undefined' ? <h3>${info.state.precio}</h3>: null } 
                <h2>En qué consiste? </h2>
                <div className={showMore ? 'infoShow':'infoHide'}>
                    <p>{separador(info.state.descripcion)}</p>
                </div>
                <button onClick={()=>setShowMore(!showMore)} className="showMore"></button>

                <button className='btnFlotante'>
                <AiOutlineWhatsApp size="40" className='iconFooter' />
                
                Consultame sobre el servicio
                
                </button>
                
            </div>

        </div>
        </div>
    )

}
function separador(descripcion) {

    return descripcion.split('.').join("."+"\n");

}
export default IndividualServicio