import React from 'react'
import '../style/StyleServicios.css'
import Servicio from '../components/servicio'
import MainTitle from '../components/mainTitle'
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";

const Servicios=()=> {
    const info = useLocation();
    console.log(info.state.subservicios)

        return (
            
            <main id='pageWrapper'>
                <div className='serviciosWrapper'>
                    <MainTitle title={info.state.servicio}/>
                    
                    {info.state.subservicios.map((subservicio,index) => 
                        <Servicio key={index} ide={index}
                        servicio={subservicio.nombre}imagenes={subservicio.imagenes} precio={subservicio.precio} descripcion={subservicio.descripcion} subservicios={[]}
                    />)}        
                    
                </div>
            </main>
        )
    }
           
    

export default Servicios