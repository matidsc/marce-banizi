import React,{useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import '../style/Servicio.css'
import { Link } from 'react-router-dom';

const Servicio = (props) => {
   
    return (
        <div className='divServicio'>
            <h1 className='titleServicio'>{props.servicio}</h1>

            <img className='imgServicio' src={require("../img/Servicios/" + props.imagenes[0]).default} />
            <button className='btnMasInformacion'>
            <Link style={{display:'block',color:'white'}}to={
                      
                         `/marce-banizi/servicios/subservicio/${props.id}`
                       

            }>Más información</Link> </button>
        </div>

    )

}

Servicio.propTypes = {
    servicio: PropTypes.string.isRequired
}
export default Servicio