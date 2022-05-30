import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../style/ServicioIndividual.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Galeria from "./galería";
const IndividualServicio = () => {
  const [showMore, setShowMore] = useState(false);
  const paragraphh = useRef();
  const [servicio, setServicio] = useState({});
  const { idServicio, idSubservicio } = useParams();
  const [imagenes,setImagenes]=useState([])
  useEffect(() => {
    fetch(
      idSubservicio
        ? `https://api.marcebaniziestudio.com/servicios/subservicios/${idSubservicio}`
        : `https://api.marcebaniziestudio.com/servicios/${idServicio}`
    )
      .then((res) => res.json())
      .then((result) => setServicio(result));
      fetch(
        idSubservicio
          ? `https://api.marcebaniziestudio.com/servicios/subservicios/${idSubservicio}/imagenes`
          : `https://api.marcebaniziestudio.com/servicios/${idServicio}/imagenes`
      )
        .then((imgs) => imgs.json())
        .then((imagenes) => setImagenes(imagenes));
  }, [idServicio, idSubservicio]);

  return (
    <div id="pageWrapper">
      <div className="wrapperIndividualServicio">
      <Galeria imageList={imagenes} />

        <div className="wrapperDetallesServicio">
          <h1>{servicio.nombre}</h1>
          {servicio.precio !==0 && <h3>${servicio.precio}</h3>}
          <h2>En qué consiste? </h2>
          <div
            ref={paragraphh}
            className={showMore ? "paragraph" : "paragraph infoHide"}
          >
            <p>{separador(servicio.descripcion)}</p>
          </div>
          <button
            onClick={() => {
              setShowMore(!showMore);
              paragraphh.current.scrollTop = 0;
            }}
            className="showMore"
          >
            {showMore ? "Mostrar menos" : "Mostrar más"}
          </button>

          <a
            rel="noreferrer"
            target="_blank"
            href={
              "https://wa.me/59895457744/?text=Hola, quisiera consultarte sobre el servicio de " +
              servicio.nom
            }
          >
            <button className="btnFlotante">
              <AiOutlineWhatsApp size="40" className="iconFooter" />
              Consultame sobre el servicio
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
function separador(descripcion) {

  return descripcion.split('.').join("."+"\n");

}
export default IndividualServicio;
