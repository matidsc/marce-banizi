import React, { useState,useRef,useEffect } from 'react'
import { useLocation } from "react-router-dom";
import '../style/styleServicioIndividual.css'
import { AiOutlineWhatsApp } from "react-icons/ai";
import Galeria from './galería';
const IndividualServicio = () => {
    const [showMore, setShowMore] = useState(false);
    const info = useLocation();
    console.log(showMore)
    const paragraphh = useRef(null)
    useEffect(() => {
      
        console.log("NYA"+paragraphh.current)
    }, [paragraphh]);
    function handleBackClick() {
        paragraphh.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div id='pageWrapper'>
            <div className='wrapperIndividualServicio'>
                <Galeria ruta="Servicios/" imageList={info.state.imageList} />

                <div className='wrapperDetallesServicio'>
                    <h1>{info.state.nombre}</h1>
                    {typeof info.state.precio != 'undefined' ? <h3>${info.state.precio}</h3> : null}
                    <h2>En qué consiste? </h2>
                    <div ref={paragraphh}className={showMore ? 'paragraph' : 'paragraph infoHide'}>
                        <p>{separador(info.state.descripcion)}</p>
                    </div>
                    <button onClick={() => {setShowMore(!showMore); handleBackClick() }} className="showMore">{ showMore? "Mostrar menos": "Mostrar más"}</button>

                   <a href={'https://wa.me/59895457744/?text=Hola, quisiera consultarte sobre el servicio de '+info.state.nombre}><button  className='btnFlotante'>
                        <AiOutlineWhatsApp size="40" className='iconFooter' />
                        Consultame sobre el servicio
                    </button> </a> 

                </div>

            </div>
        </div>
    )

}
function separador(descripcion) {

    return descripcion.split('.').join("." + "\n");

}
export default IndividualServicio