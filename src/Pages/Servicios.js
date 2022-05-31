import React, { useState,useEffect } from 'react'
import '../style/Servicios.css'
import Servicio from '../components/servicio'
import MainTitle from '../components/mainTitle'
import { useParams } from 'react-router-dom'

const Servicios=()=> {
    const [servicios,setServicios]=useState()
    const [imagenes,setImagenes]=useState()

    const {idServicios}=useParams()
    console.log(idServicios)

    useEffect(() => {
        fetch(`https://api.marcebaniziestudio.com/servicios/${idServicios}/subservicios/`)
          .then((res) => res.json())
          .then((result) => setServicios(result));
          fetch(`https://api.marcebaniziestudio.com/servicios/subservicios/${idServicios}/imagenes`)
          .then((imgs) => imgs.json())
          .then((images) => setImagenes(images[0].url));
      }, [idServicios]);
        return (
            
            <main id='pageWrapper'>
                <div className='serviciosWrapper'>
                    <MainTitle title={"Servicios"}/>
                    
                    {servicios?.map((subservicio,index) => 
                        <Servicio key={index} 
                        id={subservicio.ids}
                        imagen={imagenes}
                        servicio={subservicio.nombre}precio={subservicio.precio} descripcion={subservicio.descripcion}
                    />)}        
                    
                </div>
            </main>
        )
    }
           
    

export default Servicios