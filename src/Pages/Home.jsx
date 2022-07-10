import React, { useState, useEffect } from "react";
import "../style/Home.css";
import imgHome from "../img/ef908db4-4e22-4030-bd87-445dfadd13e1.jpeg";
import PageWrapper from "../containers/pageWrapper";
import HomeCard from "../components/homeCard";
import '../style/HomeCard.css'
import {IoIosArrowForward} from 'react-icons/io'
import {Link} from 'react-router-dom'
const Home = () => {
  const [img, setimg] = useState()
  useEffect(() => {

    fetch(
      `https://api.marcebaniziestudio.com/servicios/subservicios/4/imagenes`
    )
      .then((res) => res.json())

      .then((result) =>
        setimg(result[0].url)

      );


  }, [])

  return (
    <PageWrapper xAnimation={true}>
      <div className="homePageWrapper">
      <div className="textoHome">
        <h1>Marce Banizi Estudio</h1>
        <h2>Estudio de belleza texto texto texto</h2>
      </div>
      <div className="serviciosHome">

        <HomeCard  imagen={img} />
        <HomeCard imagen={img} />
        <HomeCard imagen={img} />
        <div className="portafolioBtn">
          <Link to='/'>
          <div className="portafolioBtnContent">
          <span>Ver portafolio</span>
          <IoIosArrowForward/>
          </div>
          </Link>
        </div>
      </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
