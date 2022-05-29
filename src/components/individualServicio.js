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

  useEffect(() => {
    fetch(
      idSubservicio
        ? `https://my-json-server.typicode.com/matidsc/SampleJSONPlaceholder/subservicios/${idSubservicio}`
        : `https://my-json-server.typicode.com/matidsc/SampleJSONPlaceholder/servicios/${idServicio}`
    )
      .then((res) => res.json())
      .then((result) => setServicio(result));
  }, [idServicio, idSubservicio]);

  return (
    <div id="pageWrapper">
      <div className="wrapperIndividualServicio">
        <Galeria ruta="Servicios/" imageList={servicio.imgs} />

        <div className="wrapperDetallesServicio">
          <h1>{servicio.nom}</h1>
          {typeof servicio.p != "undefined" && <h3>${servicio.p}</h3>}
          <h2>En qué consiste? </h2>
          <div
            ref={paragraphh}
            className={showMore ? "paragraph" : "paragraph infoHide"}
          >
            <p>{servicio.desc}</p>
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
export default IndividualServicio;
