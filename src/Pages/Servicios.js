import React, { useState,useEffect } from 'react'
import '../style/Servicios.css'
import Servicio from '../components/servicio'
import MainTitle from '../components/mainTitle'
import { useParams } from 'react-router-dom'

const Servicios=()=> {
    const [servicios,setServicios]=useState()

    const {idServicios}=useParams()
    console.log(idServicios)

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/matidsc/SampleJSONPlaceholder/servicios/${idServicios}/subservicios`)
          .then((res) => res.json())
          .then((result) => setServicios(result));
      }, [idServicios]);

        return (
            
            <main id='pageWrapper'>
                <div className='serviciosWrapper'>
                    <MainTitle title={"Servicios"}/>
                    
                    {servicios?.map((subservicio,index) => 
                        <Servicio key={index} 
                        id={subservicio.id}
                        servicio={subservicio.nom}imagenes={subservicio.imgs} precio={subservicio.precio} descripcion={subservicio.descripcion} subservicios={[]}
                    />)}        
                    
                </div>
            </main>
        )
    }
           
    

export default Servicios