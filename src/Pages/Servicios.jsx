import React, { useState, useEffect } from "react";
import "../style/Servicios.css";
import Servicio from "../components/servicio";
import MainTitle from "../components/mainTitle";
import { useParams } from "react-router-dom";
import Loading from "../components/loading";
import PageWrapper from "../containers/pageWrapper";
const Servicios = () => {
  const [servicios, setServicios] = useState();
  const [imagenes, setImagenes] = useState();

  const { idServicios } = useParams();

  useEffect(() => {
    fetch(
      `https://api.marcebaniziestudio.com/servicios/${idServicios}/subservicios/`
    )
      .then((res) => res.json())
      .then((result) => setServicios(result));
    fetch(
      `https://api.marcebaniziestudio.com/servicios/subservicios/${idServicios}/imagenes`
    )
      .then((imgs) => imgs.json())
      .then((images) => setImagenes(images[0].url));
  }, [idServicios]);
  return servicios ? (
    <PageWrapper xAnimation={true}>
      <div className="serviciosWrapper">
        <MainTitle title={"Servicios"} />

        {servicios?.map((subservicio, index) => (
          <Servicio
            key={index}
            id={subservicio.ids}
            imagen={imagenes}
            servicio={subservicio.nombre}
            precio={subservicio.precio}
            descripcion={subservicio.descripcion}
          />
        ))}
      </div>
    </PageWrapper>
  ) : (
    <Loading />
  );
};

export default Servicios;
