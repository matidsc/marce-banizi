import React from "react";
import "../style/Servicio.css";
import PrimaryButton from "./primaryButton";
const Servicio = (props) => {
  
  return (
    
    <div className="divServicio">
      <h1 className="titleServicio">{props.servicio}</h1>
      <img className="imgServicio" alt={props.servicio} src={props.imagen} />

      <PrimaryButton className='btnServicio' ruta={`/servicios/subservicio/${props.id}`} texto='Más información' />

      
    </div>
  );
};

export default Servicio;
