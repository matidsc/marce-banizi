import React, { useState, useEffect } from "react";
import "../style/Home.css";
import PageWrapper from "../containers/pageWrapper";
import HomeCard from "../components/homeCard";
import '../style/HomeCard.css'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import imagen from '../img/imgPrueba.jpeg'
const Home = () => {
  const [serviciosHome, setServiciosHome] = useState()
  const [imagesHome, setImagesHome] = useState()

  useEffect(() => {

    Promise.all([fetch(
      `https://api.marcebaniziestudio.com/servicios/subservicios/5`
    ).then((res) => res.json())
      , fetch(
        `https://api.marcebaniziestudio.com/servicios/5`
      ).then((res) => res.json())
      , fetch(
        `https://api.marcebaniziestudio.com/servicios/4`
      ).then((res) => res.json())
    ])
      .then((result) => {

        setServiciosHome(result)
      }

      );

    Promise.all([fetch(
      `https://api.marcebaniziestudio.com/servicios/subservicios/5/imagenes`
    ).then((res) => res.json())
      , fetch(
        `https://api.marcebaniziestudio.com/servicios/5/imagenes`
      ).then((res) => res.json())
      , fetch(
        `https://api.marcebaniziestudio.com/servicios/4/imagenes`
      ).then((res) => res.json())
    ])
      .then((result) => {
        setImagesHome(result)
      }
      );
  }, [])

  return (
    <PageWrapper xAnimation={true}>
      <div className="homePageWrapper">
        <div className="textoHome">
          <h1>Marce Banizi Estudio</h1>
          <h2>Servicios destacados</h2>
        </div>
        <div className="serviciosHome">
          {
            serviciosHome?.map((servicio, index) => (

              <HomeCard ruta={'/'} titulo={servicio.nombre} imagen={typeof imagesHome !== 'undefined' && imagesHome[index][index===0?2:0].url} />

            ))
          }

          <div className="portafolioBtn">
            <Link to='/portafolio'>
              <div className="cardContent">
                <span id='portafolioSpan'>
                  Ver portafolio 
                  <IoIosArrowForward />
                </span>
                <img src={imagen} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
