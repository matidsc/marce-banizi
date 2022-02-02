import React from 'react'
import PropTypes from 'prop-types'
import '../style/StyleServicio.css'
import { Link } from 'react-router-dom';
const Servicio = (props) => {
   
    return (
        <div className='divServicio'>
            <h1 className='titleServicio'>{props.servicio}</h1>

            <img className='imgServicio' src={require("../img/Servicios/" + props.imagenes[0]).default} />
            <button className='btnMasInformacion'>
            <Link style={{display:'block',color:'white'}}to={{
                      
                        pathname: `/servicio`,
                        state: {
                            nombre: props.servicio,
                            imageList: props.imagenes,
                            precio: props.precio,
                            descripcion: props.descripcion
                        }

            }}>Más información</Link> </button>
        </div>

    )

}

Servicio.propTypes = {
    servicio: PropTypes.string.isRequired
}
function verMas() {


}
export default Servicio