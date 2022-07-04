import React from 'react'
import {Link} from 'react-router-dom'
const HomeCard = ({imagen}) => {
    return (
        <div className='homeCardWrapper'>

            <span>Servicio</span>
            <img src={imagen} alt="" />
            <button className="btnMasInformacion">
        <Link
          style={{ display: "block", color: "white" }}
          to={`/`}
        >
          Conocer más
        </Link>
      </button>
        </div>
    )
}

export default HomeCard