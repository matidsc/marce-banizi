import React from 'react'
import PropTypes from 'prop-types'
import style from '../style/StyleServicio.css'
import { Link } from 'react-router-dom'
import img from '../img/logoPrincipal.jpeg'
import { RoundedBtn } from './roundedBtn'

 const Servicio = (props) => {
/*console.log("LARGO DE SUBSERVICIOS"+props.subservicios.length)*/
console.log(props.subservicios.length)
return (
        <div className='divServicio'>
            <h1 className='titleServicio'>{props.servicio}</h1>
            <img className='imgServicio' src={props.imagen} />
            
            <RoundedBtn width={"100%"} height={"53px"}text={'Más información'} color='black'
            linkTo={
                {pathname:'/servicio', 
                    state:{
                        nombre:props.servicio,
                        imagen:props.imagen,
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