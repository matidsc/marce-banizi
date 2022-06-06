import React, { useState, useEffect } from "react";
import "../style/Servicios.css";
import Servicio from "../components/servicio";
import MainTitle from "../components/mainTitle";
import { useParams } from "react-router-dom";
import Loading from "../components/loading";
import PageWrapper from "../containers/pageWrapper";
const Servicios = () => {
  const [servicios, setServicios] = useState();
  const [imagenes, setImagenes] = useState([]);

  const { idServicios } = useParams();
  var ali=[]
  useEffect(() => {
    fetch(
      `https://api.marcebaniziestudio.com/servicios/${idServicios}/subservicios/`
    )
      .then((res) => res.json())

      .then((result) => {
        setServicios(result);

        result.forEach((subservicio,index) => {
          
          imagenes&&console.log(index)
          console.log(subservicio.ids)
          return fetch(
            `https://api.marcebaniziestudio.com/servicios/subservicios/${subservicio.ids}/imagenes`
          )
            .then((imgs) => imgs.json())
            .then((images) => {
              ali.push(images[index].url)
              
            });
        });
        setImagenes(ali)


      });
  }, [idServicios]);
  console.log(typeof imagenes[0])
  
  imagenes?.forEach(imagen => {
    console.log(imagen);

  });
  
  return servicios && imagenes!==[] ? (
    <PageWrapper xAnimation={true}>
      <div className="serviciosWrapper">
        <MainTitle title={"Servicios"} />

        {servicios?.map((subservicio, index) => (

          <Servicio
            key={index}
            id={subservicio.ids}
            idImage={index}
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
