import React from 'react'
import logo from '../img/logoSecundario.jpeg'
import style from '../style/StyleServicios.css'
import Servicio from '../components/servicio'
import MainTitle from '../components/mainTitle'
import imagen from '../img/Servicios/S0101.jpeg'
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";

const Servicios=()=> {
    
    const{ varShow } =useSelector((state)=>state.navState)
    const info = useLocation();

        return (
            
            <main id='pageWrapper'>  
                <div className='serviciosWrapper'>
                    <MainTitle title={info.state.servicio}/>
                    
                    {info.state.subservicios.map((subservicio,index) => 
                        <Servicio key={index}
                        servicio={subservicio.nombre}imagen={imagen} precio={subservicio.precio} descripcion={subservicio.descripcion} subservicios={[]}
                    />)}        
                    
                </div>
            </main>
        )
    }
           
    

export default Servicios