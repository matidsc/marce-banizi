import React from 'react'
import PropTypes from 'prop-types'
import '../style/StyleServicio.css'
import { RoundedBtn } from './roundedBtn'
const Servicio = (props) => {
/*console.log("LARGO DE SUBSERVICIOS"+props.subservicios.length)*/
console.log("LALALALLALALALALAL"+props)
return (
        <div className='divServicio'>
            <h1 className='titleServicio'>{props.servicio}</h1>
            
    <img className='imgServicio' src={require("../img/Servicios/" + props.imagenes[0]).default}/> 
            <RoundedBtn width={"100%"} height={"53px"}text={'Más información'} color='black'
            linkTo={
                {pathname:`/servicio`, 
                    state:{
                        nombre:props.servicio,
                        imageList:props.imagenes,
                        precio:props.precio,
                        descripcion:props.descripcion
                    }
                    
            }}/>
        </div>

    )

}

Servicio.propTypes = {
    servicio: PropTypes.string.isRequired   
}
function verMas(){
    

}
export default Servicio