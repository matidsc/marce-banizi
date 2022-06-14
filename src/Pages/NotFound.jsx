import React from 'react'
import { Link } from "react-router-dom";
import '../style/NotFound.css'
import AnimatedPage from './AnimatedPage';
const NotFound = ({mensaje, ruta, boton}) => {
  return (
    <AnimatedPage>

    <div className="noHayItems">
    <h1>{mensaje}</h1> 
    <Link to={ruta}>
      <button>{boton}</button>
    </Link>
  </div>
  </AnimatedPage>

  )
}

export default NotFound