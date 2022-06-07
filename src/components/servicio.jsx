import React from "react";
import "../style/Servicio.css";
import { Link } from "react-router-dom";

const Servicio = (props) => {
  return (
    
    <div className="divServicio">
      <h1 className="titleServicio">{props.servicio}</h1>
      <img className="imgServicio" src={props.imagen} />

      <button className="btnMasInformacion">
        <Link
          style={{ display: "block", color: "white" }}
          to={`/servicios/subservicio/${props.id}`}
        >
          Más información
        </Link>
      </button>
    </div>
  );
};

export default Servicio;
