import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineWhatsApp } from "react-icons/ai";

export const RoundedBtn = (props) => {
    const myStyle = {
        fontSize:"1.1em",
        color: "black",
        padding: "0.625em 1em",
        borderRadius: "30px",
        borderStyle: "none",
        width:props.width,
        height:props.height,
        backgroundColor:props.backColor,
        WebkitTapHighlightColor: "transparent"


    };        

    /*  1 PARA CONCATENAR:::::::: childContainer = { ...childContainer, backgroundColor: props.color }*/
    return (
        <button style={myStyle} onClick={props.handleClick}>
            {props.icon}
            <Link style={{color:props.color}}to={props.linkTo}>{props.text}</Link>
            
        </button>
    )
} 