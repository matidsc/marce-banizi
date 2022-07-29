import React from "react";
import "../style/Servicio.css";
import PrimaryButton from "./primaryButton";
const Servicio = (props) => {
  
  return (
    
    <div className="divServicio">
      <img className="imgServicio" alt={props.servicio} src={props.imagen} />
      <div className="wrapperServicio">
      <h1 className="titleServicio">{props.servicio}</h1>

      <PrimaryButton className='btnServicio' ruta={`/servicios/subservicio/${props.id}`} texto='Más información' />
      </div>
      
    </div>
  );
};

export default Servicio;
