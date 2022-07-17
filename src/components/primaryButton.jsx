import React from 'react'
import { Link } from 'react-router-dom'
const PrimaryButton = ({className,ruta, texto,mobileWidth,mobileHeight, desktopWidth,desktopHeight}) => {
    const styles={
            
            alignSelf: 'center',
            minHeight: '8%',
            border: 'none',
            borderRadius: '25px',
            backgroundColor: 'var(--accentRed)',
            fontSize:'1.1em',
            boxShadow: 'rgba(255, 0, 0, 0.5) 0px 7px 29px 0px'
           
    }
    return (
    <button className={className} style={styles}>
    <Link
      style={{ display: "block", color: "white",textDecoration:'none' }}
      to={ruta}
    >
      {texto}
    </Link>
  </button>
  )
   
}

export default PrimaryButton