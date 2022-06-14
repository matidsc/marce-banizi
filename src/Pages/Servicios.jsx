import React, { useState, useEffect } from "react";
import "../style/Servicios.css";
import Servicio from "../components/servicio";
import MainTitle from "../components/mainTitle";
import { useParams } from "react-router-dom";
import Loading from "../components/loading";
import PageWrapper from "../containers/pageWrapper";
import NotFound from "./NotFound";
const Servicios = () => {
  const [servicios, setServicios] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [itemExists, setItemExists] = useState(true);
  const { idServicios } = useParams();

  useEffect(() => {
    fetch(
      `https://api.marcebaniziestudio.com/servicios/${idServicios}/subservicios/`
    )
      .then((res) => res.json())

      .then((result) =>
        result.length === 0
          ? setItemExists(false)
          : (setServicios(result), 
          setItemExists(true), 
          setIsLoading(false))
      );
  }, [idServicios]);

  return itemExists?(
    <PageWrapper xAnimation={true}>
      <div className="serviciosWrapper">

        { isLoading?<Loading/>
        
        :<>
          <MainTitle title={"Servicios"} />

          {servicios?.map((subservicio, index) => (
            <Servicio
              key={index}
              id={subservicio.ids}
              imagen={subservicio.url}
              servicio={subservicio.nombre}
              precio={subservicio.precio}
              descripcion={subservicio.descripcion}
            />
          ))}
          </>
        }
        
      
      </div>
    </PageWrapper>
  ):
    <NotFound mensaje='Servicio no encontrado' boton='Volver al inicio' ruta={"/"} />
};

export default Servicios;
