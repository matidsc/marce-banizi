import React from 'react'
import { Link } from 'react-router-dom'
const HomeCard = ({ imagen }) => {
  return (
    <div className='homeCardWrapper'>

<div className='cardContent'>
      <span>Servicio</span>

      <img src={imagen} alt="" />
      </div>
      <button className="btnMasInformacion">
        <Link
          style={{ display: "block", color: "white" }}
          to={`/`}
        >
          Conocé más
        </Link>
      </button>
    </div>
  )
}

export default HomeCard