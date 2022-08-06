import React from 'react'
import PrimaryButton from './primaryButton'
const HomeCard = ({ imagen,titulo,ruta }) => {
  return (
    <div className='homeCardWrapper'>

      <div className='cardContent'>
        <span>{titulo}</span>

        <img src={imagen} alt="" />
        <PrimaryButton className='btnHome' ruta={ruta} texto='Conocé más' mobileWidth='75%' desktopWidth='75%' mobileHeight='50%' desktopHeight='50%' />

      </div>
    </div>
  )
}

export default HomeCard