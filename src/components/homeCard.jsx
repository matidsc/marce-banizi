import React from 'react'
import PrimaryButton from './primaryButton'
const HomeCard = ({ imagen }) => {
  return (
    <div className='homeCardWrapper'>

      <div className='cardContent'>
        <span>Servicio</span>

        <img src={imagen} alt="" />
        <PrimaryButton className='btnHome' ruta='/' texto='Conocé más' mobileWidth='75%' desktopWidth='75%' mobileHeight='50%' desktopHeight='50%' />

      </div>
    </div>
  )
}

export default HomeCard